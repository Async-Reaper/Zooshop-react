import React, { FC } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LoginForm: FC = () => {
    return (
        <form>
            <Stack spacing={2}>
                <h1>Авторизация</h1>
                <TextField label="Логин" variant="standard" />
                <TextField label="Пароль" variant="standard" />
                <Button variant="contained">Войти</Button>
            </Stack>
        </form>
    )
}

export default LoginForm