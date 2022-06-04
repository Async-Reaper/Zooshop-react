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
    const email = useInput('', {isEmpty: true, minLength: 5, formValid: false})
    const password = useInput('', {isEmpty: true, minLength: 8, passwordValid: true, formValid: false})
    const dispatch = useTypedDispatch()
    const { loading, error, answerText, signupStatus } = useTypedSelector(state => state.signup)

    const signupData: IUserLogin = {
        email: email.value,
        password: password.value
    }

    const fetchSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        email.onBlur()
        password.onBlur()
        
        dispatch(SignupService(signupData))
        if (email.formValid && password.formValid && !password.passwordValid) {
        } 
    } 

    return (
        <form method='GET' onSubmit={(e) => fetchSignup(e)}>
            <Stack spacing={2}>
                <H1>Регистрация</H1>
                <TextField
                    disabled={loading}
                    value={email.value}
                    onChange={email.onChange}
                    label="Логин" 
                    variant="standard" 
                />
                { (email.isDirty && email.isEmpty) && <div>Поле пустое</div>}
                { (email.isDirty && email.minLength) && <div>Должно быть больше 5 символов</div>}
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
                    <Button type='submit' variant="contained">ЗАрегистрироваться</Button>
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