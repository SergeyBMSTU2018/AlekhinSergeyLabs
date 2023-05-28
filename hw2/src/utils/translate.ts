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
  TRG_ITOS,
} = await response.json();

const T_SRC_SOS: string = SRC_SOS
const T_SRC_EOS: string = SRC_EOS
const T_SRC_STOI: Record<string, number> = SRC_STOI
const T_TRG_SOS: string = TRG_SOS
const T_TRG_EOS: string = TRG_EOS
const T_TRG_STOI: Record<string, number> = TRG_STOI
const T_TRG_ITOS: string[] = TRG_ITOS

/**
 * Переведена
 *
 * Возвращаем массив токенов
 */
function tokenize(text: string): string[] {
  return text.match(/[А-Яа-я]+|[A-Za-z]+|['\w-]+/g) || [];
}

/**
 * Функция извлечения максимального значения в массиве
 */
function argmax(arr: number[]): number {
    let maxIndex = 0;
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxIndex = i;
            maxValue = arr[i];
        }
    }

    return maxIndex;
}

/**
 * Реализация arr1 * arr2 на TS
 */
function broadcastArray(array: number[], matrix: number[][]): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < matrix.length; i++) {
        const row: number[] = [];

        for (let j = 0; j < matrix[i].length; j++) {
            row.push(array[j] * matrix[i][j]);
        }

        result.push(row);
    }

    return result;
}


/**
 * Переведена
 *
 * src_tensor и src_mask похоже на правду
 */
function preprocess(text: string): { src_tensor: Tensor; src_mask: Tensor } {
    const tokens = tokenize(text).map((t) => t.toLowerCase());
    const tokensWithSpecialTokens = [T_SRC_SOS, ...tokens, T_SRC_EOS];

    const src_indexes = tokensWithSpecialTokens.map((token) => T_SRC_STOI[token] || 0);
    const src_indexes_number = src_indexes.map((n) => n !== 1 ? 1 : 0);
    const src_indexes_bigint = src_indexes.map((n) => BigInt(n));

    const src_tensor = new Tensor('int64', BigInt64Array.from(src_indexes_bigint), [1, src_indexes_bigint.length]);
    const src_mask = new Tensor('bool', Uint8Array.from(src_indexes_number), [1, 1, 1, src_indexes_number.length]);

    return { src_tensor, src_mask };
}

function get_trg_mask(trg_tensor: number[]): Tensor {
    const trg_pad_mask = trg_tensor.map((n) => n !== 1 ? 1 : 0);
    const trg_len = trg_tensor.length;

    const trg_sub_mask = Array(trg_len)
        .fill(0)
        .map((_, i) => Array(trg_len).fill(0).map((_, j) => (j <= i) ? 1 : 0));

    const result = broadcastArray(trg_pad_mask, trg_sub_mask)
    const flat_result = result.flatMap((r) => r)

    // TODO: ошибка в размерности
    return new Tensor('bool', Uint8Array.from(flat_result), [1, 1, trg_len, trg_len]);
}

async function translateText(test_text: string): Promise<string> {
    const { src_tensor, src_mask } = preprocess(test_text);

    const { enc_src } = await sess_enc.run({ src_tensor, src_mask });

    const trg_indexes = [T_TRG_STOI[T_TRG_SOS]];

    for (let i = 0; i < 128; i++) {
        const trg_indexes_bigint = trg_indexes.map((n) => BigInt(n));
        const trg_tensor = new Tensor('int64', BigInt64Array.from(trg_indexes_bigint), [1, trg_indexes_bigint.length]);

        const trg_mask = get_trg_mask(trg_indexes);

        const feeds = {
            trg_tensor,
            enc_src,
            trg_mask,
            src_mask
        };

        const { output } = await sess_dec.run(feeds);
        // @ts-expect-error сложно типизировать
        const pred_token = argmax(output.data);
        trg_indexes.push(pred_token);

        if (pred_token === T_TRG_STOI[T_TRG_EOS]) {
            break;
        }
    }

    const trg_tokens = trg_indexes.map((i) => T_TRG_ITOS[i]);
    return trg_tokens.slice(1, -1).join(' ');
}

export {
    translateText,
}