export interface SelectProps {
    onChange: (value: string) => void
    value: string
    options: { value: string, title: string }[]
    description?: string
}
