import { UserItem } from '../../interfaces/interfaces'

export interface UserInfoProps {
    item: UserItem | null
    callback: () => void
}
