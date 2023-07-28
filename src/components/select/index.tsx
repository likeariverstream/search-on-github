import { memo, FC, ChangeEvent } from 'react'
import styles from './styles.module.css'
import { SelectProps } from './interface'

export const Select: FC<SelectProps> = memo((props) => {
    const { onChange, value, options, description } = props

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        onChange(value)
    }

    return (
        <div className={styles.wrapper}>
            {description && <h5 className={styles.description}>{description}</h5>}
            <select className={styles.select} value={value} onChange={onSelect}>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>{item.title}</option>
                ))}
            </select>
        </div>
    )
})
