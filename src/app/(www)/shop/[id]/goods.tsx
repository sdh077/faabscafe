'use client'
import React, { useEffect, useState } from 'react'
import { GoodsItem } from './page'
import { useFormState } from 'react-dom'
import { shopAction } from './actions'
import Image from "next/image";
import { Button, Select, TextInput } from 'flowbite-react';
import { usePathname } from 'next/navigation'
import { GoodsOptionItem } from '@/interface/goods'

const initialState = {
    message: '',
    errors: ''
}
const SelectOption = ({ title, id }: { title: string, id: string }) => {
    const [count, setCount] = useState(1)
    return (
        <div className='my-4'>
            {title}
            <input name='[option]' value={`${id}-${count}`} type='hidden'></input>
            <TextInput type='number' value={count} onChange={e => setCount(Number(e.target.value))} />
        </div>
    )
}
export default function Goods({ info }: { info: GoodsItem }) {
    const initvalue = info.goods_option.map(o => ({ ...o, select: 0 }))
    const [options, setOptions] = useState(initvalue)
    const [selectItems, setSelectItems] = useState<{ id: number[], name: string, price: number }[]>([])
    const pathname = usePathname()
    const [state, formAction] = useFormState(shopAction, initialState)
    const selectOption = (e: any, option: any) => {
        const temp = options.map(o => o.id !== option.id ? o : { ...o, select: Number(e.target.value) })
        setOptions(temp)
    }
    useEffect(() => {
        if (options.every(o => o.select !== 0)) {
            const addOption = options.map(o => o.goods_option_item.find(item => item.id === o.select))
            if (addOption) {
                const newSelect = {
                    id: addOption.map(o => o?.id ?? 0),
                    name: addOption.map(o => o?.name).join(', '),
                    price: addOption.map(o => o?.price).reduce((a, b) => (a ?? 0) + (b ?? 0), 0) ?? 0
                }
                console.log(newSelect)
                if (!selectItems.map(i => i.name).includes(newSelect.name)) {
                    setSelectItems([...selectItems, newSelect])
                    setOptions(initvalue)
                }
            }
        }
    }, [options])
    return (
        <form action={formAction}>
            <div className="flex items-center justify-between mt-10">
                <div className="me-auto order-last relative z-10 w-1/2">
                    <h6 className="mb-3 text-body-secondary" >
                        {info.goods_category.title}
                    </h6>
                    <h2
                        className="mb-4 mb-lg-5 position-relative display-5"

                        data-aos-delay={100}
                    >
                        {info.name}
                    </h2>
                    <p className="mb-5" data-aos-delay={150}>
                        {info.description}
                    </p>
                    <ul
                        className="mb-5"
                    >
                        <li className="me-3 mb-3 items-center">
                            <div className="me-2 fs-4">
                                <i className="bx bx-check-circle text-body-secondary opacity-75 middle"></i>
                            </div>
                            <div>flavor {info.flavor}</div>
                        </li>
                        <li className="me-3 mb-3 items-center">
                            <div className="me-2 fs-4">
                                <i className="bx bx-check-circle text-body-secondary opacity-75 middle"></i>
                            </div>
                            <div>roasting {info.roasting}</div>
                        </li>
                        <li className="me-3 mb-3 items-center">
                            <div className="me-2 fs-4">
                                <i className="bx bx-check-circle text-body-secondary opacity-75 middle"></i>
                            </div>
                            <div>green {info.green}</div>
                        </li>
                    </ul>
                    <input type='hidden' value={info.id} name='goods_id' />
                    {options.map(option =>
                        <div className="mb-5" key={option.id}>
                            <div className='w-1/5'>
                                {option.title}
                            </div>
                            <Select id="chBasic" className="form-control w-4/5" value={option.select} onChange={(e) => selectOption(e, option)} name={option.id.toString()}>
                                <option value="">
                                    옵션을 선택해주세요
                                </option>
                                {option.goods_option_item.map(item =>
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                )}
                            </Select>
                        </div>
                    )}
                    {selectItems.map((selectItem, index) =>
                        <SelectOption title={selectItem.name} id={selectItem.id.join('/')} key={selectItem.name} />
                    )}
                    <div className='flex gap-2'>
                        <Button type='submit' name='action' size={'md'} value="buy">바로 구매하기</Button>
                        <Button type='submit' name='action' color='success' size={'md'} value="add-to-cart">장바구니</Button>
                    </div>
                    <i className="bx bxs-chevron-right">
                        <i className="bx bxs-chevron-right"></i>
                    </i>
                </div>
                <div className="position-relative pe-12 pb-12 w-1/2">
                    {/*feature image*/}
                    {info.img && <Image
                        className="img-fluid position-relative w-100 d-block mx-auto rounded-5 shadow-lg"
                        alt=""
                        src={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/beans/${info.img}`}
                        width={960}
                        height={1000}
                    />}
                </div>
            </div>
            <input type='hidden' name='pathname' value={pathname} />
        </form>
    )
}
