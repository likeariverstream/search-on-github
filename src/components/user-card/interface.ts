import { UserItem } from '../../interfaces/interfaces'

export interface UserCardProps {
    callback: (id: number) => void
    item: UserItem
}
