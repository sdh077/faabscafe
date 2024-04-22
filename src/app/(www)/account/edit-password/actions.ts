'use server'
import { encriptPassword, supabase } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function changePassword(formData: FormData) {
    const uid = cookies().get('uid')?.value
    const password = (formData.get('password') as string)
    const newPassword = (formData.get('new-password') as string)
    const confirmedNewPassword = (formData.get('confirmed-new-password') as string)
    const encryptedPassword = encriptPassword(password)
    const newEncryptedPassword = encriptPassword(newPassword)
    const { data, count } = await supabase.from('users').select('id', { count: 'exact' }).eq('id', uid).eq('password', encryptedPassword)

    if (count === 1) {
        await supabase.from('users').update({ 'password': newEncryptedPassword }).eq('id', uid)
        return {
            result: true,
            message: ''
        }
    } else return {
        result: false,
        message: '비밀번호가 틀렸습니다'
    }

}