import { useState } from "react"
import { useValidation } from './useValidation'

export const useInput = (state: string, validation: any) => {
    const [value, setValue] = useState(state);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const valid = useValidation(value, validation)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    const onClick = (): void => {
        setIsDirty(true)
    }

    const onBlur = (): void => {
        setIsDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onClick,
        onBlur,
        ...valid
    }
}