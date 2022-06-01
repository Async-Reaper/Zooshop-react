import React, { FC } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import H1 from '../UI/H1/H1';

const LoginForm: FC = () => {
    return (
        <form>
            <Stack spacing={2}>
                <H1>Авторизация</H1>
                <TextField label="Логин" variant="standard" />
                <TextField label="Пароль" variant="standard" />
                <Button variant="contained">Войти</Button>
            </Stack>
        </form>
    )
}

export default LoginForm