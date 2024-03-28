import { createClient } from '@supabase/supabase-js'
import { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY } from './constants'
import crypto from "crypto";

if (!NEXT_PUBLIC_SUPABASE_URL) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
if (!NEXT_PUBLIC_SUPABASE_KEY) throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_KEY')

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY)

export const encriptPassword = (password: string) => crypto.createHash("sha512").update(password).digest("base64")