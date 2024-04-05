'use server'
import { supabase } from "@/lib/api"
import { revalidatePath } from "next/cache"

export async function deleteCart(cartId: number) {
    await supabase.from('cart_item')
        .delete()
        .eq('cart_id', cartId)
    const res = await supabase.from('cart')
        .delete()
        .eq('id', cartId)
    console.log(res)
    revalidatePath(`/cart`) // Navigate to the new post page

}