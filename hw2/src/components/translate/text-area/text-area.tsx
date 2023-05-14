import { FC } from 'react'
import { TextField } from '@mui/material'

interface TextAreaProps {
    label: string
    readOnly?: boolean
    value: string
    whenChange?: (value: string) => void
}

export const TextArea: FC<TextAreaProps> = ({ label, readOnly, value, whenChange }) => (
    <TextField
        multiline
        rows={5}
        fullWidth
        label={label}
        InputProps={{ readOnly }}
        value={value}
        onChange={(e) => whenChange?.(e.target.value)}
    />
)
