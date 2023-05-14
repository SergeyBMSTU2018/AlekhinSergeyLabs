import axios from 'axios';

interface TranslateRequest {
    text: string
}

interface TranslateResponse {
    translation: string;
}

async function translateCustom(req: TranslateRequest) {
    const { data } = await axios.post<TranslateResponse>(
        '/api/translate/custom',
        req,
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );

    return data;
}

async function translateGoogle(req: TranslateRequest) {
    const { data } = await axios.post<TranslateResponse>(
        '/api/translate/google',
        req,
        {
            headers: {
                Accept: 'application/json',
            },
        }
    );

    return data;
}

export {
    translateCustom,
    translateGoogle,
}
