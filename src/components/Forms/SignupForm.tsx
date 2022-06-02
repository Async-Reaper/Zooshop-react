import { LoadingButton } from '@mui/lab'
import { Button, Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useInput } from '../../hooks/useInput'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUserLogin } from '../../models/IUserLogin'
import H1 from '../UI/H1/H1'

const SignupForm: FC = () => {
    const login = useInput('', {isEmpty: true})
    const password = useInput('', {isEmpty: true})

    const { loading, error, errorText, loginStatus } = useTypedSelector(state => state.login)

    const signupData: IUserLogin = {
        name: login.value,
        password: password.value
    }

    const fetchSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.onBlur()
        password.onBlur()

        
    } 

    return (
        <form method='GET' onSubmit={(e) => fetchSignup(e)}>
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

export default SignupForm