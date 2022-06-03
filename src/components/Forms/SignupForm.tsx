import { LoadingButton } from '@mui/lab'
import { Button, Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useInput } from '../../hooks/useInput'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUserLogin } from '../../models/IUserLogin'
import { SignupService } from '../../services/SingupService'
import H1 from '../UI/H1/H1'

const SignupForm: FC = () => {
    const login = useInput('', {isEmpty: true, minLength: 5, formValid: false})
    const password = useInput('', {isEmpty: true, minLength: 8, passwordValid: true, formValid: false})
    const dispatch = useTypedDispatch()
    const { loading, error, answerText, signupStatus } = useTypedSelector(state => state.signup)
    const signupData: IUserLogin = {
        name: login.value,
        password: password.value
    }

    const fetchSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login.onBlur()
        password.onBlur()
        
        if (login.formValid && password.formValid && !password.passwordValid) {
            dispatch(SignupService(signupData))
        } 
    } 

    return (
        <form method='GET' onSubmit={(e) => fetchSignup(e)}>
            <Stack spacing={2}>
                <H1>Регистрация</H1>
                <TextField
                    disabled={loading}
                    value={login.value}
                    onChange={login.onChange}
                    label="Логин" 
                    variant="standard" 
                />
                { (login.isDirty && login.isEmpty) && <div>Поле пустое</div>}
                { (login.isDirty && login.minLength) && <div>Должно быть больше 5 символов</div>}
                <TextField 
                    disabled={loading}
                    onChange={password.onChange}
                    type='password'
                    label="Пароль" 
                    variant="standard" 
                />
                { (password.isDirty && password.isEmpty) && <div>Поле пустое</div>}
                { (password.isDirty && password.minLength) && <div>Должно быть больше 8 символов</div>}
                { (password.isDirty && password.passwordValid) && <div>Пароль должен состоять из: латинских заглавных и строчных букв и цифр</div>}
                {
                    loading ?
                    <LoadingButton loading variant="outlined">
                        Войти
                    </LoadingButton> :
                    <Button type='submit' variant="contained">Войти</Button>
                }
                {
                    (error) && <div>{answerText}</div>
                }
                {
                    (signupStatus) && <div>{answerText}</div>
                }
            </Stack>
        </form>
    )
}

export default SignupForm