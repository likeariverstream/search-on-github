import { memo } from 'react'
import { SpinnerProps } from './interface'
import styles from './styles.module.css'
export const Spinner = memo(({ active, children }: SpinnerProps) => {

    return (
        active ? <div className={styles.spinner}/> : <>{children}</>
    )
})
