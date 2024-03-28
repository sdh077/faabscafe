export const metadata = {
  title: 'Shipping Settings - Mosaic',
  description: 'Page description',
}
import { cookies } from 'next/headers'
import ShippingPanel from './shipping-panel'
import { supabase } from '@/lib/api'
import { Address } from '@/interface/user'
export const revalidate = 0
const getAddress = async () => {
  const userId = cookies().get('uid')?.value
  const { data, error } = await supabase.from('address').select()
    .eq('user_id', userId)
    .order('id', { ascending: true }).returns<Address[]>();
  return data
}
export default async function ShippingSettings() {
  const addressbook = await getAddress()
  if (!addressbook) return <></>
  return (
    <ShippingPanel addressbook={addressbook} />
  )
}