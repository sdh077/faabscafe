//업체별 발주 상품이 다른지 체크하기

import { Container } from "@/components/Container";
import { WholesaleOrder } from "@/interface/goods";
import { supabase } from "@/lib/api";
import { Button, Table } from "flowbite-react";
import { cookies } from "next/headers";
import OrderList from "./order-list";
import { Pagination } from 'flowbite-react';
import Paginantion from "@/components/pagination";

const getWhole = async (page: number) => {
    const uid = cookies().get('uid')?.value
    return await supabase.from('wholesale')
        .select(`*`, { count: 'exact', head: false })
        .eq('user_id', uid)
        .range((page - 1) * 10, page * 10)
        .order('id').returns<WholesaleOrder[]>();
}
export default async function Page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}
) {
    const page = Number(searchParams.page ?? '1')
    const wholesale = await getWhole(page)
    return (
        <div className='mt-16'>
            <Container>
                <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex self-end">
                        <Button href="/admin/order">주문하기</Button>
                    </div>
                </div>
                <OrderList wholesale={wholesale.data ?? []} />
                <Paginantion page={page} totalPages={wholesale.count ?? 0} />
            </Container>
        </div>
    )
}
