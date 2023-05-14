import { FC, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useDebouncedCallback } from 'use-debounce'

import { TextArea } from './text-area'
import { translateCustom, translateGoogle } from '../../api'

export const Translate: FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [source, setSource] = useState('')
    const [targetCustom, setTargetCustom] = useState('')
    const [targetGoogle, setTargetGoogle] = useState('')

    const translateText = useDebouncedCallback(async (text: string) => {
        try {
            const [custom, google] = await Promise.all([
                translateCustom({ text }),
                translateGoogle({ text }),
            ])

            setTargetCustom(custom.translation)
            setTargetGoogle(google.translation)
        } catch {
            enqueueSnackbar('Ошибка при переводе', { variant: 'error' });
        }
    }, 300)

    const handleChangeSource = async (text: string) => {
        setSource(text)
        await translateText(text)
    }

    return (
        <Container sx={{ mt: 5 }}>
            <Grid
                container
                spacing={1}
            >
                <Grid item xs>
                    <TextArea
                        label="Русский"
                        value={source}
                        whenChange={handleChangeSource}
                    />
                </Grid>
                <Grid item xs>
                    <TextArea
                        label="Английский (Custom)"
                        readOnly
                        value={targetCustom}
                    />
                </Grid>
                <Grid item xs>
                    <TextArea
                        label="Английский (Google)"
                        readOnly
                        value={targetGoogle}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
