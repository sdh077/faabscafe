'use server'

import { encriptPassword, supabase } from "@/lib/api"
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

export async function login(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    uid: formData.get('uid'),
    password: formData.get('password'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  const encryptedPassword = encriptPassword(validatedFields.data.password)
  const users = await sql`
    select
      *
    from users
    WHERE 
      uid=${validatedFields.data.uid}
      AND password =${encryptedPassword}
      AND type='USER'
    `
  if (!users.length) {
    return {
      errors: '아이디 또는 비밀번호가 일치하지 않습니다.',
    }
  }
  const token = jwt.sign(users[0], 'shhhhh');
  cookies().set('token', token)
  cookies().set('uid', users[0].id)
  cookies().set('name', users[0].name)
  const callback = formData.get('callback') ?? ''
  if (callback && typeof callback === 'string') redirect(callback)
  else redirect(`/`)
}

export async function logout() {
  cookies().delete('token')
  cookies().delete('uid')
  cookies().delete('name')
  redirect(`/`)
}