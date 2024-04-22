export const metadata = {
  title: 'Notifications Settings - Mosaic',
  description: 'Page description',
}

import { supabase } from '@/lib/api';
import OrdersPanel from './orders-panel'
import { Orders } from '@/interface/orders';
import { cookies } from 'next/headers'

export const revalidate = 0

async function getOrders(type: string | undefined) {
  const userId = cookies().get('uid')?.value
  return await supabase.from('orders',).select(
    `*,
    orders_item(*),
    status!inner(
      *
    )
    `, { count: 'estimated' }
  )
    .eq('user_id', userId)
    .eq('status.type', 'NORMAL')
    .order('id', { ascending: true }).returns<Orders[]>();
}

export default async function OrdersPanelSettings({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}
) {
  const orders = await getOrders(searchParams.type)
  return (
    <OrdersPanel orders={orders.data ?? []} />
  )
}