import { Container } from '@/components/Container'
import React from 'react'
import Goods, { GoodsOption } from '@/interface/goods';
import { supabase } from '@/lib/api';
import GoodsCategory from '@/interface/goods-category';
import GoodsComponent from './goods';
import ReturnPolicy from '@/components/ReturnPolicy';
export type GoodsItem = Goods & {
    goods_category: GoodsCategory
    goods_option: GoodsOption
}
const getInfo = async (id?: string): Promise<GoodsItem | null> => {
    const { data, error } =
        await supabase.from('goods').select('*, goods_category(*), goods_option(*, goods_option_item(*))').eq('id', id).eq('type', 'PERSON')
    return (data && data?.length) ? data[0] : null
}

export default async function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const info = await getInfo(params.id)
    if (!info) return <></>
    return (
        <Container>
            <GoodsComponent info={info} />
            <div className='w-full flex justify-between mt-16'>
                {info?.content && <div className='w-full flex justify-center' dangerouslySetInnerHTML={{ __html: info?.content }} />}
            </div>
            <ReturnPolicy />
        </Container >
    )
}
