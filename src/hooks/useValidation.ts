import { useEffect, useState } from "react"

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLength, setMinLength] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true)
    const [formValid, setFormValid] = useState(false)
    const [emailValid, setEmailValid] = useState(true)
    useEffect(() => {
        for (const validation in validations) {
            switch(validation) {
                case 'minLength' :
                    value.length > validations[validation] ? setMinLength(false) : setMinLength(true)
                break;
                case 'isEmpty' :
                    value ? setIsEmpty(false) : setIsEmpty(true)
                break;      
                case 'passwordValid':
                    const reP = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
                    reP.test(String(value)) ? setPasswordValid(false) : setPasswordValid(true)
                break;
                case 'emailValid' :
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
                    re.test(String(value).toLowerCase()) ? setEmailValid(false) : setEmailValid(true)
                break
            }
        }
    }, [value])

    useEffect(() => {
        if (minLength || isEmpty) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [isEmpty, minLength, passwordValid])

    return {
        isEmpty,
        minLength,
        passwordValid,
        formValid,
        emailValid
    }
}