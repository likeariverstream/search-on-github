export interface PaginationProps {
    count: number
    limit?: number
    page: number | null
    indent?: number
    onChange: (num: number | null) => void
    makeLink: (num: number) => string
}
