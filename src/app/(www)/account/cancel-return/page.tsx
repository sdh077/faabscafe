export const metadata = {
  title: 'Notifications Settings - Mosaic',
  description: 'Page description',
}

import { supabase } from '@/lib/api';
import CancelReturnPanel from './cre-panel'
import { Orders } from '@/interface/orders';
import { cookies } from 'next/headers'

export const revalidate = 0

const getOrders = async () => {
  const userId = cookies().get('uid')?.value
  const { data, error } = await supabase.from('orders').select(
    `*,
    status!inner(
      *
    )
    `
  )
    .eq('user_id', userId)
    .neq('status.type', 'NORMAL')
    .order('id', { ascending: true }).returns<Orders[]>();
  return data
}

export default async function CREPanelSettings() {
  const orders = await getOrders()
  return (
    <CancelReturnPanel orders={orders ?? []} />
  )
}