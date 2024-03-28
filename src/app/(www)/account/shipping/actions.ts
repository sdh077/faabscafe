'use server'
import { supabase } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createAddress(formData: FormData) {
    const uid = cookies().get('uid')?.value
    const res = await supabase.from('address').insert({
        user_id: uid,
        name: formData.get('name'),
        address1: formData.get('address1'),
        address2: formData.get('address2'),
        phone: formData.get('tel'),
        is_default: true,
        post: formData.get('address_post'),
    })
    revalidatePath('/account/shipping')
    return true
}
export async function deleteAddress(id: number) {
    const res = await supabase.from('address').delete().eq('id', id)
    revalidatePath('/account/shipping')
    return true
}