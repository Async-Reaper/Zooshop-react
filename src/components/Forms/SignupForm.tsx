import { LoadingButton } from '@mui/lab'
import { Button, Stack, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useInput } from '../../hooks/useInput'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IUserLogin } from '../../models/IUserLogin'
import { SignupService } from '../../services/SignupService'
import Error from '../UI/Error/Error'
import H1 from '../UI/H1/H1'
import Popup from '../UI/Popup/Popup'

const SignupForm: FC = () => {
    const email = useInput('', {isEmpty: true, minLength: 5, formValid: false, emailValid: true})
    const password = useInput('', {isEmpty: true, minLength: 8, passwordValid: true, formValid: false})
    const repeatPassword = useInput('', {isEmpty: true, minLength: 8, passwordValid: true})
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
        repeatPassword.onBlur()

        if (email.formValid && password.formValid && !password.passwordValid && !email.emailValid && password.value === repeatPassword.value) {
            dispatch(SignupService(signupData))
        } 
    } 

    return (
        <form method='GET' onSubmit={(e) => fetchSignup(e)}>
            <Stack spacing={2}>
                {
                    (signupStatus) && <Popup>{answerText}</Popup>
                }
                <H1>Регистрация</H1>
                <TextField
                    disabled={loading}
                    value={email.value}
                    onChange={email.onChange}
                    label="Email" 
                    variant="standard" 
                />
                { (email.isDirty && email.emailValid) && <Error>Email не валиден</Error>}
                { (email.isDirty && email.isEmpty) && <Error>Поле пустое</Error>}
                { (email.isDirty && email.minLength) && <Error>Должно быть больше 5 символов</Error>}
                <TextField 
                    disabled={loading}
                    onChange={password.onChange}
                    type='password'
                    label="Пароль" 
                    variant="standard" 
                />
                { (password.isDirty && password.isEmpty) && <Error>Поле пустое</Error>}
                { (password.isDirty && password.minLength) && <Error>Должно быть больше 8 символов</Error>}
                { (password.isDirty && password.passwordValid) && <Error>Пароль должен состоять из: латинских заглавных и строчных букв и цифр</Error>}
                <TextField 
                    disabled={loading}
                    onChange={repeatPassword.onChange}
                    type='password'
                    label="Повторите пароль" 
                    variant="standard" 
                />
                { (repeatPassword.isDirty && repeatPassword.isEmpty) && <Error>Поле пустое</Error>}
                { (password.value !== repeatPassword.value) && <Error>Пароли не совпадают</Error>}
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
            </Stack>
        </form>
    )
}

export default SignupForm