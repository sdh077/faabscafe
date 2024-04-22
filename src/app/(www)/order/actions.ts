'use server'
import { Cart } from "@/interface/cart"
import { Orders } from "@/interface/orders"
import { supabase } from "@/lib/api"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function orderSuccess(carts: Cart[], price: number, address: string, payType: number) {
    const uid = cookies().get('uid')?.value
    const order = {
        status_id: 2,
        price,
        pay_type_id: payType,
        user_id: uid,
        address,
    }
    const res = await supabase.from('orders')
        .insert(order)
        .select()
    if (!res.data) return {

    }
    const ordersId = res.data[0].id
    for (const cart of carts) {
        const orderItem = {
            product_title: cart.goods.name,
            product_option: cart.cart_item.map(item => item.goods_option_item.name).join(','),
            price: cart.cart_item.map(item => item.goods_option_item.price).reduce((a, b) => a + b),
            count: cart.count,
            goods_id: cart.goods.id,
            orders_id: ordersId
        }
        await supabase.from('orders_item')
            .insert(orderItem)
            .select()
        await supabase.from('cart')
            .update({ 'is_bought': true })
            .eq('id', cart.id)
    }
    redirect(`/order/${ordersId}`)
}