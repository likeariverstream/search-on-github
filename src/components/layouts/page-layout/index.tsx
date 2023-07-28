import { memo, FC } from 'react'
import { ListLayoutProps } from './interface'
import styles from './styles.module.css'

export const PageLayout: FC<ListLayoutProps> = memo(({children}) => {

    return (
        <main className={styles.page}>{children}</main>
    )
})
