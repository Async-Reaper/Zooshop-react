import { useEffect, useState } from "react"

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLength, setMinLength] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true)
    const [nameValid, setNameValid] = useState(true)

    useEffect(() => {
        for (const validation in validations) {
            switch(validation) {
                case 'minLength' :
                    value.length > validations[validation] ? setMinLength(false) : setMinLength(true)
                break;
                case 'isEmpty' :
                    value ? setIsEmpty(false) : setIsEmpty(true)
                break;                
            }
        }
    }, [value])



    return {
        isEmpty,
        minLength,
        passwordValid,
        nameValid
    }
}