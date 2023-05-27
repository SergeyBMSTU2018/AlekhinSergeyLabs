import { FC, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { useSnackbar } from 'notistack'

import { TextArea } from './text-area'
import { translateText } from './translate.ts'

export const Translate: FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [source, setSource] = useState('')
    const [target, setTarget] = useState('')

    const handleChangeSource = async (text: string) => {
        setSource(text)

        try {
            const res = await translateText('Мальчик')

            setTarget(res)
        } catch (err) {
            console.error(err)
            enqueueSnackbar('Ошибка при переводе текста', { variant: 'error' })
        }
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
                        label="Английский"
                        readOnly
                        value={target}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
