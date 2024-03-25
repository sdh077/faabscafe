export interface Orders {
    id: number
    created_at: string
    status_id: number
    product_title: string
    product_option: string
    price: number
    count: number
    arrived_at: string
    canceled_at: string
    goods_id: number
    pay_type_id: null
    user_id: number
    address: string
    status: Status
    log: any
}
export interface Status {
    id: number
    name: string
    type: string
    created_at: string
}