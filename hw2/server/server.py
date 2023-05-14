from flask import Flask, request, jsonify
from googletrans import Translator
import onnxruntime
import numpy as np
import pickle
import re

app = Flask(__name__)

flag = 0
#далее указывются названия используемых моделей и служебных файлов, лишнее просто закомментировать
sess_enc = onnxruntime.InferenceSession('seq2seq_enc.onnx') #для машинного перевода
sess_dec = onnxruntime.InferenceSession('seq2seq_dec.onnx') #для машинного перевода
with open('vocabs.pickle', 'rb') as f: #для машинного перевода
    SRC_SOS, SRC_EOS, SRC_STOI, TRG_SOS, TRG_EOS, TRG_STOI, TRG_ITOS = pickle.load(f)

def tokenize(text):
    return re.findall("[A-Z]{2,}(?![a-z])|[A-Z][a-z]+(?=[A-Z])|[\'\w\-]+",text)

def preprocess(text):
    tokens = [t.lower() for t in tokenize(text)]
    tokens = [SRC_SOS] + tokens + [SRC_EOS]
    src_indexes = [SRC_STOI.get(token, 0) for token in tokens]
    src_tensor = np.int64(src_indexes).reshape(1, -1)
    src_mask = (np.int64(src_indexes) != 1).reshape(1, 1, 1, -1)
    return src_tensor, src_mask

def get_trg_mask(trg_tensor):
    trg_pad_mask = (trg_tensor != 1).reshape(1, 1, 1, -1)
    trg_len = trg_tensor.shape[1]
    trg_sub_mask = np.tril(np.ones((trg_len, trg_len), dtype=np.bool_))
    return trg_pad_mask & trg_sub_mask

def Translate(test_text):
    src_tensor, src_mask = preprocess(test_text)
    enc_src = sess_enc.run(None, {'src_tensor': src_tensor, 'src_mask': src_mask})[0]
    trg_indexes = [TRG_STOI[TRG_SOS]]
    for i in range(128):
        trg_tensor = np.int64(trg_indexes).reshape(1, -1)
        trg_mask = get_trg_mask(trg_tensor)
        output, attention = sess_dec.run(None, {'trg_tensor': trg_tensor, 'enc_src': enc_src, 'trg_mask': trg_mask, 'src_mask': src_mask})
        pred_token = output.argmax(axis=2)[:,-1].item()
        trg_indexes.append(pred_token)
        if pred_token == TRG_STOI[TRG_EOS]:
            break
    trg_tokens = [TRG_ITOS[i] for i in trg_indexes]
    return ' '.join(trg_tokens[1:-1])

# Обработка POST-запросов на /api/translate/custom
@app.route('/api/translate/custom', methods=['POST'])
def translate():
    text = request.json['text']
    print(text)

    result = Translate(text)

    return jsonify({ 'translation': result })

# Обработка POST-запросов на /api/translate/google
@app.route('/api/translate/google', methods=['POST'])
def translateGoogle():
    text = request.json['text']

    translator = Translator()
    result = translator.translate(text, dest='en').text

    return jsonify({ 'translation': result })
