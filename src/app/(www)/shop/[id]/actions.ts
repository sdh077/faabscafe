'use server'

import { redirect } from "next/navigation"
import { cookies } from 'next/headers'
import { supabase } from "@/lib/api";

export async function shopAction(prevState: any, formData: FormData) {
    const isLogin = cookies().get('token');
    const carts = []
    if (!isLogin) redirect('/signin?path=' + formData.get('pathname'))
    for (const option of formData.getAll('[option]')) {
        const [o, count] = option.toString().split('-')
        const cart = await supabase.from('cart').insert({
            'goods_id': formData.get('goods_id'),
            'user_id': cookies().get('uid')?.value,
            count
        }).select()
        if (cart.data) {
            const cartId = cart.data[0].id
            carts.push(cartId)
            o.split('/').map(async (oi) => {
                await supabase.from('cart_item').insert({
                    'cart_id': cartId,
                    'cart_option_item_id': oi
                })
            })
        }
    }
    if (formData.get('action') === 'buy')
        redirect('/order?carts=' + carts.join(','))
    else
        redirect('/cart')
    return {

    }
}