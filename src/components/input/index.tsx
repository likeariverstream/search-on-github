import { ChangeEvent, memo, useLayoutEffect, useState, FC} from 'react'
import styles from './styles.module.css'
import { InputProps } from './interface'
import debounce from 'lodash.debounce'

export const Input: FC<InputProps> = memo((props) => {
    const { inputValue, placeholder, type, onChange } = props
    const [value, setValue] = useState(inputValue)
    const onChangeDebounce = debounce((value: string) => onChange(value), 600)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onChangeDebounce(e.target.value)
    }

    useLayoutEffect(() => setValue(inputValue), [inputValue])

    return (
        <input
            className={styles.input}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
})
