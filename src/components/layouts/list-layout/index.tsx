import { memo, FC } from 'react'
import { ListLayoutProps } from './interface'
import styles from './styles.module.css'

export const ListLayout: FC<ListLayoutProps> = memo(({children}) => {

    return (
        <div className={styles.layout}>{children}</div>
    )
})
