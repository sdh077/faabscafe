import React from 'react'
import { cookies } from 'next/headers';
import { supabase } from '@/lib/api';
import Pay from './pay';
import CartItems from './cart-items';
import { Address, User } from '@/interface/user';
import { TextInput } from 'flowbite-react';
import AddressPanel from './address-panel';
import GoodsPanel from './goods-panel';
import PayPanel from './pay-panel';
import { Cart } from '@/interface/cart';

export const revalidate = 0;
const getCart = async (cartIds: string[]) => {
    const uid = cookies().get('uid')?.value
    const q = supabase.from('cart').select(
        `*, goods(id, img,name, description), cart_item(goods_option_item(*))`
    )
        .eq('user_id', uid)
    return await (cartIds.length ? q.in('id', cartIds) : q).returns<Cart[]>()

}
const getAddress = async () => {
    const userId = cookies().get('uid')?.value
    const { data, error } = await supabase.from('address').select()
        .eq('user_id', userId)
        .order('id', { ascending: true }).returns<Address[]>();
    return data
}
const getUser = async () => {
    const userId = cookies().get('uid')?.value
    const { data, error } = await supabase.from('users').select('name, email, tel')
        .eq('id', userId)
        .order('id', { ascending: true }).returns<User[]>();
    return data
}
export default async function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}
) {
    const addressBook = await getAddress()
    const mainAddress = searchParams.address ? addressBook?.find(address => address.id = Number(searchParams.address)) : addressBook?.find(address => address.is_default)
    const cartIds = searchParams.carts?.split(',') ?? []
    const carts = await getCart(cartIds)
    const userInfo = await getUser()
    if (!carts.data || !mainAddress) return <></>
    const add = (a: any, b: any) => a + b
    const amount = carts.data.map(cart =>
        cart.cart_item.map((item: any) => item.goods_option_item.price).reduce(add)
    ).reduce(add)
    return (
        <div className="lg:relative lg:flex bg-slate-50">

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
                <div className="lg:max-w-[640px] lg:mx-auto">

                    {/* Cart items */}
                    <div className="mb-6 lg:mb-0">
                        <header className="mb-2">
                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Shopping Cart ({carts.data.length})</h1>
                        </header>
                        <ul>
                            {mainAddress &&
                                <li className="sm:flex items-center py-6 border-b border-slate-200 dark:border-slate-700">
                                    <AddressPanel mainAddress={mainAddress} />
                                </li>
                            }
                            <li className="sm:flex items-center py-6 border-b border-slate-200 dark:border-slate-700">
                                <GoodsPanel goods={carts.data} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div>
                <div className="lg:sticky lg:top-16 bg-slate-50 dark:bg-slate-800/20 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100dvh-64px)]">
                    <div className="py-8 px-4 lg:px-8 2xl:px-12">
                        <div className="max-w-sm mx-auto lg:max-w-none">
                            <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Review & Pay</h2>
                            <div className="space-y-6">

                                {/* Order summary */}
                                <div>
                                    <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Summary</div>
                                    <ul className="mb-4">
                                        <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                                            <div>Total</div>
                                            <div className="font-medium text-emerald-600">{amount}원</div>
                                        </li>
                                        <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                                            <div>배송비</div>
                                            <div className="font-medium text-emerald-600">{amount > 20000 ? 0 : 3000}원</div>
                                        </li>
                                    </ul>
                                </div>

                                <Pay carts={carts.data} address={`[${mainAddress.post}] ${mainAddress.address1} ${mainAddress.address2}`} amount={amount} shipping={amount > 20000 ? 0 : 3000} />



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
