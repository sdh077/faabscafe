'use client'
import Goods from '@/interface/goods'
import { Address } from '@/interface/user'
import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import Image from 'next/image'
import FaabsImage from '@/components/FaabsImage'

export function GoodsLine({ goods }: { goods: any }) {
    return (
        <div className='flex'>
            <a className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0" href="#0">
                {goods.goods.img && <FaabsImage src={'beans/' + goods.goods.img} width={100} height={142} />}
            </a>
            <div className="grow">
                <a href="#0">
                    <h3 className="text-lg font-semibold text-primary-800 dark:text-primary mb-1">{goods.name}</h3>
                </a>
                <div className="text-sm mb-2">{goods.cart_item.map((item: any) => item.goods_option_item.name).join(', ')} - {goods.count}개</div>
                {/* Product meta */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Rating and price */}
                    <div className="flex flex-wrap items-center space-x-2 mr-2">
                        {/* Price */}
                        <div>
                            <div className="inline-flex text-sm font-medium dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">
                                {goods.cart_item.map((item: any) => item.goods_option_item.price).reduce((a: any, b: any) => a + b)}
                            </div>
                        </div>
                    </div>
                    {/* <button className="text-sm underline hover:no-underline">Remove</button> */}
                </div>
            </div>
        </div>
    )
}

export default function GoodsPanel({ goods }: { goods: any[] }) {
    return (
        <div className="bg-white w-full dark:bg-primary shadow-md rounded border border-primary dark:border-slate-700 p-5">
            {/* Header */}
            <header className="flex justify-between items-start space-x-3 mb-3">
                {/* User */}
                <div className="flex items-start space-x-3">
                    <div>
                        <div className="leading-tight">
                            <a className="text-sm font-semibold text-primary dark:text-primary" href="#0">
                                주문상품
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Body */}
            <div className="text-sm text-primary dark:text-primary space-y-2 mb-5">
                {goods.map(g =>
                    <GoodsLine goods={g} key={g.id} />
                )}
            </div>
        </div>
    )
}
