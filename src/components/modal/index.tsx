import { memo, FC } from 'react'
import { ModalProps } from './interface'
import styles from './style.module.css'
export const Modal: FC<ModalProps> = memo((props) => {
    const { children, callback } = props
    return (
        <>
            <div className={styles.overlay} onMouseDown={callback}></div>
            <div className={styles.modal}>{children}</div>
        </>
    )
})
