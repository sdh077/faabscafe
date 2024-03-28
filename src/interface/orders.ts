export interface Orders {
    id: number
    created_at: string
    status_id: number
    price: number
    arrived_at: string
    canceled_at: string
    pay_type_id: null
    user_id: number
    address: string
    status: Status
    log: any
    orders_item: OrdersItem[]
}
export interface Status {
    id: number
    name: string
    type: string
    created_at: string
}
export interface OrdersItem {
    id: number;
    product_title: string
    product_option: string
    price: number
    count: number
    goods_id: number
}