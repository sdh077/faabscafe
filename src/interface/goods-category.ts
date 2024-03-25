import Goods from "./goods"

export default interface GoodsCategory {
    created_at: string
    eng_title: string
    id: number
    title: string
    use_main: boolean
    use_yn: boolean
    goods?: Goods[]
}