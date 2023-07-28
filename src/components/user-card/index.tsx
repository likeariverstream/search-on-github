import { memo, FC } from 'react'
import styles from './styles.module.css'
import { UserCardProps } from './interface'

export const UserCard: FC<UserCardProps> = memo((props) => {
    const { callback, item } = props
    const onClickHandler = () => {
        const { id } = item
        callback(id)
    }
    return (
        <section className={styles.card} onClick={onClickHandler}>
            <p className={styles.login}>{item.login}</p>
        </section>
    )
})
