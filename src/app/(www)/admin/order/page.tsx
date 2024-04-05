//업체별 발주 상품이 다른지 체크하기

import { Container } from '@/components/Container';
import Goods from '@/interface/goods';
import { supabase } from '@/lib/api';
import { Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react'
import WholesaleOrder from './wholesale-order';
import { cookies } from 'next/headers';
import { Address } from '@/interface/user';
const getGoods = async () => {
    return await supabase.from('goods')
        .select(`*`, { count: 'exact', head: false })
        .eq('type', 'BUSINESS')
        .order('id').returns<Goods[]>();
}
const getAddress = async () => {
    const userId = cookies().get('uid')?.value
    const { data, error } = await supabase.from('address').select()
        .eq('user_id', userId)
        .order('id', { ascending: true }).returns<Address[]>();
    return data
}
export default async function Page() {
    const products = await getGoods()
    const addressBook = await getAddress()
    return (
        <div className='mt-16'>
            <Container>
                {products.data && addressBook && addressBook.length && <WholesaleOrder products={products.data} addressBook={addressBook} />}
                {!(addressBook && addressBook.length) && '배송지 설정을 해주세요'}
            </Container>
        </div>
    )
}
