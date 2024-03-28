export const metadata = {
  title: 'Notifications Settings - Mosaic',
  description: 'Page description',
}

import { supabase } from '@/lib/api';
import OrdersPanel from './orders-panel'
import { Orders } from '@/interface/orders';
import { cookies } from 'next/headers'

export const revalidate = 0

export async function getOrders() {
  const userId = cookies().get('uid')?.value
  const { data, error } = await supabase.from('orders').select(
    `*,
    orders_item(*),
    status!inner(
      *
    )
    `
  )
    .eq('user_id', userId)
    .eq('status.type', 'NORMAL')
    .order('id', { ascending: true }).returns<Orders[]>();
  return data
}

export default async function OrdersPanelSettings() {
  const orders = await getOrders()
  return (
    <OrdersPanel orders={orders ?? []} />
  )
}