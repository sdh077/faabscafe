import { encriptPassword, supabase } from "@/lib/api"
import { redirect } from "next/navigation"

export async function signup(formData: FormData) {
    const password = (formData.get('password') as string)
    const encriptedPassword = encriptPassword(password)
    const info = {
        tel: formData.get('tel'),
        uid: formData.get('uid'),
        name: formData.get('name'),
        type: 'USER',
        email: formData.get('email'),
        policy: 'AGREE',
        address1: formData.get('address1'),
        address2: formData.get('address2'),
        password: encriptedPassword,
        address_post: formData.get('address_post'),
    }

    const res = await supabase.from('users').insert(info)
    console.log(res)
    redirect('/signin')

}