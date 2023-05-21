import { FC, useState } from 'react'
import { Container, Grid } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useDebouncedCallback } from 'use-debounce'

import { TextArea } from './text-area'
import { translateText } from './translate'
import { translateCustom, translateGoogle } from '../../api'

export const Translate: FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [source, setSource] = useState('')
    const [targetCustom, setTargetCustom] = useState('')
    const [targetGoogle, setTargetGoogle] = useState('')

    const translateText1 = useDebouncedCallback(async (text: string) => {
        const res = await translateText(text)

        setTargetCustom(res)
    }, 300)

    const handleChangeSource = async (text: string) => {
        setSource(text)
        await translateText1(text)
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
