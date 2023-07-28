import { ReactNode } from "react"

export interface ModalProps {
    callback: () => void
    children: ReactNode
}
