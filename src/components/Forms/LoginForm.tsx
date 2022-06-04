import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Stack, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUserLogin } from '../../models/IUserLogin';
import { LoginService } from '../../services/LoginService';
import H1 from '../UI/H1/H1';

const LoginForm: FC = () => {
    const email = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})

    const { loading, error, errorText, loginStatus } = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    const loginData: IUserLogin = {
        email: email.value,
        password: password.value
    }

    const fetchLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        email.onBlur()
        password.onBlur()

        if (!email.isEmpty && !password.isEmpty) {
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
                    value={email.value}
                    onChange={email.onChange}
                    label="Email" 
                    variant="standard" 
                />
                { (email.isDirty && email.isEmpty) && <div>Поле пустое</div>}
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