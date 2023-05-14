import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline, Fab, useMediaQuery, createTheme } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'

export const Theme: FC<PropsWithChildren> = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDarkMode)

    useEffect(() => {
        setIsDarkMode(prefersDarkMode)
    }, [prefersDarkMode])

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode: isDarkMode ? 'dark' : 'light',
            },
        })
    }, [isDarkMode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Fab
                size="medium"
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                }}
                onClick={() => setIsDarkMode((prevMode) => !prevMode)}
            >
                {isDarkMode ? <LightMode/> : <DarkMode/>}
            </Fab>
            {children}
        </ThemeProvider>
    )
}