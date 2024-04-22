import Goods, { GoodsOptionItem } from "./goods";

export interface Cart {
    id: number;
    created_at: string
    goods_id: number
    user_id: number
    count: number
    goods: Goods
    cart_item: CartItem[]
}
export interface CartItem {
    id: number
    cart_id: number
    created_at: string
    cart_option_item_id: number
    goods_option_item: GoodsOptionItem
}