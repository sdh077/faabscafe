export interface IHistory {
    id: number
    created_at: string
    year: number
    month: number | null
    content: string
    tag: string[]
    link: string
}