export interface ButtonProps {
    callback: () => void
    text: string
    type: 'button' | 'submit' | 'reset' | undefined
}
