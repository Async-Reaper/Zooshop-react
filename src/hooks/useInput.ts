import { useState } from "react"

export const useInput = (state: string) => {
    const [value, setValue] = useState(state);
    const [isDirty, setIsDirty] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }

    const onClick = (): void => {
        setIsDirty(true)
    }

    return {
        value,
        isDirty,
        onChange,
        onClick
    }
}