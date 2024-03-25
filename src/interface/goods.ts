export default interface Goods {
    id: number,
    name: string;
    green: string;
    flavor: string;
    content: string;
    eng_name: string;
    roasting: string;
    created_at: string;
    category_id: number;
    description: string;
    shipping_id: number;
    img: string;
    goods_option: GoodsOption[]
}

export interface GoodsOption {
    id: number
    title: string;
    goods_option_item: GoodsOptionItem[]
}
export interface GoodsOptionItem {
    id: number
    name: string
    price: number
}