import { Tensor, InferenceSession } from 'onnxruntime-web';

const sess_enc = await InferenceSession.create('/seq2seq_enc.onnx', {
    executionProviders: ['wasm'],
});
const sess_dec = await InferenceSession.create('/seq2seq_dec.onnx', {
    executionProviders: ['wasm'],
});

const response = await fetch('vocabs.json');
const {
  SRC_SOS,
  SRC_EOS,
  SRC_STOI,
  TRG_SOS,
  TRG_EOS,
  TRG_STOI,
  TRG_ITOS
} = await response.json();

function tokenize(text: string) {
  return text.match(/[A-Z]{2,}(?![a-z])|[A-Z][a-z]+(?=[A-Z])|[\'\w\-]+/g);
}

function preprocess(text: string): { src_tensor: number[][], src_mask: number[][][][] } {
    const tokens = (tokenize(text) || []).map((t) => t.toLowerCase());
    const tokensWithSpecialTokens = [SRC_SOS, ...tokens, SRC_EOS];
    const src_indexes = tokensWithSpecialTokens.map((token) => SRC_STOI[token] || 0);
    const src_tensor = [src_indexes];
    const src_mask = [[[src_indexes.map((index) => (index !== 1) ? 1 : 0)]]];
  
    return { src_tensor, src_mask };
}  

function get_trg_mask(trg_tensor: number[][]): number[][][][] {
    const trg_pad_mask = trg_tensor.map((row) => row.map((value) => (value !== 1) ? 1 : 0));
    const trg_len = trg_tensor[0].length;
    const trg_sub_mask = Array(trg_len)
      .fill(0)
      .map((_, i) => Array(trg_len).fill(0).map((_, j) => (j <= i) ? 1 : 0));
  
    return [trg_pad_mask.map((row) => [row]), [trg_sub_mask]];
}  

async function translateText(test_text: string): Promise<string> {
    const { src_tensor, src_mask } = preprocess(test_text);

    const feeds = {
        src_tensor: new Tensor('int64', src_tensor),
        src_mask: new Tensor('bool', src_mask),
    };

    const enc_src = await sess_enc.run(feeds);
    const trg_indexes: number[] = [TRG_STOI[TRG_SOS]];
  
    for (let i = 0; i < 128; i++) {
      const trg_tensor = [trg_indexes.map((index) => Number(index))];
      const trg_mask = get_trg_mask(trg_tensor);

      const feeds = {
        trg_tensor: new Tensor('int32', trg_tensor),
        enc_src: new Tensor('float32', enc_src),
        trg_mask: new Tensor('bool', trg_mask),
        src_mask: new Tensor('bool', src_mask),
      };
  
      const [output, attention] = await sess_dec.run(feeds);
      const pred_token = output.argmax(2)[0].slice(-1)[0];
      trg_indexes.push(pred_token);
  
      if (pred_token === TRG_STOI[TRG_EOS]) {
        break;
      }
    }
  
    const trg_tokens = trg_indexes.map((index) => TRG_ITOS[index]);
    return trg_tokens.slice(1, -1).join(' ');
}  

export {
    translateText,
}