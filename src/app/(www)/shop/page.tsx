import CardComponent from '@/components/Card'
import { Container } from '@/components/Container'
import Goods from '@/interface/goods';
import GoodsCategory from '@/interface/goods-category';
import { supabase } from '@/lib/api';
import React from 'react'
const getCategory = async () => {
    const { data, error } = await supabase.from('goods_category').select(
        `*,
    goods(
      *
    )
    `
    )
        .eq('use_main', true)
        .eq('type', 'PERSON')
        .order('id', { ascending: true }).returns<GoodsCategory[]>();
    return data
}
const getGoods = async (category: string, page: number) => {
    const q = supabase.from('goods').select('*', { count: 'exact' }).eq('type', 'PERSON')
    return await (category ?
        q.eq('category_id', category) :
        q)
        .range((page - 1) * 9, (page) * 9 - 1)
        .order('id', { ascending: false }).returns<Goods[]>();
}
export default async function Page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const categorys = await getCategory();
    const goods = await getGoods(searchParams.category ?? '', Number(searchParams.page ?? '1'));
    const transition = 'py-8 px-4 hover:border-b-2 border-zinc-500'
    const page = Number(searchParams.page ?? '1')
    return (
        <div className=''>
            <Container>
                <div className="overflow-hidden text-[#1C1C1B]">
                    <nav className="menu">
                        <ul className='flex items-center between-justify'>
                            <li className='relative text-xl p-8'>
                                <a className={transition}
                                    href="/shop">
                                    ALL
                                </a>
                            </li>
                            {categorys?.map(category =>
                                <li key={category.id} className='relative text-xl p-8'>
                                    <a className={transition}
                                        href={`/shop?category=${category.id}`}>
                                        {category.title}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {goods.data?.map(item =>
                        <CardComponent key={item.id} description={item.description} id={item.id} flavor={item.flavor} img={item.img} title={item.name} content={item.description} link={`/shop/${item.id}`} />
                    )}
                </div>
            </Container>
            {/* <Paginantion page={page} totalPages={(goods.count ?? 0) / 9} /> */}
        </div>
    )
}
