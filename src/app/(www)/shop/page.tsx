import CardComponent from '@/components/Card'
import { Container } from '@/components/Container'
import Hero from '@/components/Hero'
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
        .order('id', { ascending: true }).returns<GoodsCategory[]>();
    return data
}
const getGoods = async (category?: string): Promise<Goods[]> => {
    const q = supabase.from('goods').select()
    const { data, error } =
        category ?
            await q.eq('category_id', category).returns<Goods[]>() :
            await q.returns<Goods[]>();
    return data ?? []
}
export default async function Bean({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const categorys = await getCategory();
    const goods = await getGoods(searchParams.category);
    const transition = 'py-8 px-4 hover:border-b-2 border-zinc-500'
    return (
        <div className=''>
            <Container>
                <div className="mb-8 overflow-hidden text-[#1C1C1B]" style={{ borderBottom: '1px solid #d0d0d0' }}>
                    <nav className="menu">
                        <ul className='flex items-center between-justify'>
                            <li className='relative text-xl p-8'>
                                <a className={transition}
                                    href="/shop">ALL</a>
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
                    {goods?.map(item =>
                        <CardComponent key={item.id} id={item.id} flavor={item.flavor} img={item.img} title={item.name} content={item.description} link={`/shop/${item.id}`} />
                    )}
                </div>
            </Container>
        </div>
    )
}
