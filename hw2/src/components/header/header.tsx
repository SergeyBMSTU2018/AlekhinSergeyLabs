import { FC } from 'react'
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material'

export const Header: FC = () => (
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
        <Toolbar>
            <Typography
                noWrap
                variant="h5"
                color="inherit"
                sx={{ flexGrow: 1 }}
            >
                Sergey Translate
            </Typography>
            <Avatar src="/sergey.webp"/>
        </Toolbar>
    </AppBar>
)
