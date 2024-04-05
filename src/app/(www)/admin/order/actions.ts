'use server'
import { Wholesale } from "@/interface/goods"
import { supabase } from "@/lib/api"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function addWholesale(price: number, address_id: number, products: Wholesale[]) {
    const uid = cookies().get('uid')?.value
    const info = {
        price,
        address_id,
        user_id: uid,
        goods: products
    }
    const res = await supabase.from('wholesale').insert(info)
    redirect('/admin')
}