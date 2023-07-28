import { memo, FC } from 'react'
import styles from './styles.module.css'
import { UserInfoProps } from './interface'
import { Button } from '../button'

export const UserInfo: FC<UserInfoProps> = memo((props) => {
    const { item, callback } = props
    if (!item) {
        return
    }
    return (
        <section className={styles.card}>
            <p className={styles.text}>Логин: {item.login}</p>
            <p className={styles.text}>Страница: <a href={item.html_url} target='blank'>{item.html_url}</a></p>
            <p className={styles.text}>Подписчики: <a href={item.followers_url} target='blank'>{item.followers_url}</a></p>
            <p className={styles.text}>Репозитории: <a href={item.followers_url} target='blank'>{item.repos_url}</a></p>
            <Button text='Закрыть' type='button' callback={callback}/>
        </section>
    )
})
