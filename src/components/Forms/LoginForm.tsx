import React, { FC, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import H1 from '../UI/H1/H1';
import { IUserLogin } from '../../models/IUserLogin';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { LoginService } from '../../services/LoginService';
import { useInput } from '../../hooks/useInput';
import { Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
    const login = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})

    const { loading, error, errorText, loginStatus } = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    const loginData: IUserLogin = {
        name: login.value,
        password: password.value
    }

    const fetchLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.onBlur()
        password.onBlur()

        if (!login.isEmpty && !password.isEmpty) {
            dispatch(LoginService(loginData))
        }
    } 

    loginStatus && navigate('/')

    return (
        <form method='GET' onSubmit={(e) => fetchLogin(e)}>
            <Stack spacing={2}>
                <H1>Авторизация</H1>
                <TextField
                    disabled={loading}
                    value={login.value}
                    onChange={login.onChange}
                    label="Логин" 
                    variant="standard" 
                />
                { (login.isDirty && login.isEmpty) && <div>Поле пустое</div>}
                <TextField 
                    disabled={loading}
                    onChange={password.onChange}
                    type='password'
                    label="Пароль" 
                    variant="standard" 
                />
                { (password.isDirty && password.isEmpty) && <div>Поле пустое</div>}
                {
                    loading ?
                    <LoadingButton loading variant="outlined">
                        Войти
                    </LoadingButton> :
                    <Button type='submit' variant="contained">Войти</Button>
                }
                {
                    (error) && <div>{errorText}</div>
                }
            </Stack>
        </form>
    )
}

export default LoginForm