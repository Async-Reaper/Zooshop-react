import React, { FC, useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import H1 from '../UI/H1/H1';
import { IUserLogin } from '../../models/IUserLogin';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { LoginService } from '../../services/LoginService';
import { useInput } from '../../hooks/useInput';

const LoginForm: FC = () => {
    const login = useInput('')
    const password = useInput('')

    const { loading } = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()

    const loginData: IUserLogin = {
        name: login.value,
        password: password.value
    }

    const fetchLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.onClick()
        password.onClick()
        // dispatch(LoginService(loginData))
    }
    return (
        <form onSubmit={fetchLogin}>
            <Stack spacing={2}>
                <H1>Авторизация</H1>
                <TextField 
                    value={login}

                    label="Логин" 
                    variant="standard" 
                />
                <TextField 
                    value={password}

                    label="Пароль" 
                    variant="standard" 
                />
                <Button  type='submit' variant="contained">Войти</Button>
            </Stack>
        </form>
    )
}

export default LoginForm