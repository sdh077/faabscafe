import { Orders } from "@/interface/orders"
import { supabase } from "@/lib/api"
import { redirect } from "next/navigation"

export async function cancelReturnAction(FormData: FormData) {
    const id = FormData.get('id')
    const choice = FormData.get('choice')
    const submit = FormData.get('submit') ?? '1'
    const complain = FormData.get('complain')
    const { data, error } = await supabase.from('orders').select().eq('id', id).returns<Orders[]>()

    if (!data?.length) return {}

    const order = data[0]
    order.status_id = submit === '1' ? 5 : 7
    order.log = [
        ...order.log,
        {
            choice,
            msg: complain
        }
    ]

    await supabase.from('orders').update(order).eq('id', id)
    redirect('/account/cancel-return')
}

