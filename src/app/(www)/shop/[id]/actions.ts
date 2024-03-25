'use server'

import { supabase } from "@/lib/api"
import sql from "@/lib/db"
import { z } from 'zod'
import crypto from "crypto";
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
const schema = z.object({
    uid: z.string({
        invalid_type_error: 'Invalid Email',
    }),
    password: z.string({
        invalid_type_error: 'Invalid Password',
    }),
})

export async function shopAction(prevState: any, formData: FormData) {
    const isLogin = cookies().get('token');
    if (!isLogin) redirect('/signin?path=' + formData.get('pathname'))
    formData.forEach(console.log)
    formData.forEach((value, key) => {
        if (key.includes('[option]'))
            console.log(key, value)
    })
    return {

    }
}