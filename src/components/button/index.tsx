import React, { memo, FC } from 'react'
import styles from './styles.module.css'
import { ButtonProps } from './interface'

export const Button: FC<ButtonProps> = memo((props) => {
    const { type, callback, text } = props
    return (
        <button type={type} onClick={callback} className={styles.button} >{text}</button>
    )
})
