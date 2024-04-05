'use client'
import Link from 'next/link'
import FaabsImage from '@/components/FaabsImage'
import { useState } from 'react'
import { Cart } from '@/interface/cart'
import { Checkbox } from 'flowbite-react'
import { deleteCart } from './actions'
import { useRouter } from 'next/navigation'

export default function CartItems({ carts }: { carts: Cart[] }) {
  const router = useRouter()
  const [choices, setChoices] = useState<number[]>(carts.map(cart => cart.id))
  const handleCheck = (id: number, checked: boolean) => {
    if (checked && !choices.includes(id)) setChoices([...choices, id])
    if (!checked && choices.includes(id)) setChoices(choices.filter(choice => choice !== id))
  }
  const add = (a: number, b: number) => a + b
  const amount = choices.length ? carts.filter(cart => choices.includes(cart.id)).map(cart => cart.cart_item.map((item: any) => item.goods_option_item.price).reduce(add)).reduce(add) : 0
  const handleDelete = async (id: number) => {
    await deleteCart(id)
    handleCheck(id, false)
  }
  const goOrder = () => {
    if (!choices.length) return
    router.push(`/order?carts=${choices.join(',')}`)
  }
  return (
    <>
      <header className="mb-2 mt-6">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">장바구니 ({choices.length})</h1>
      </header>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

          {/* Cart items */}
          <div className="mb-6 lg:mb-0 ">

            {/* Cart items */}
            <ul>
              {/* Cart item */}
              {carts.map(cart =>
                <li key={cart.id} className="sm:flex items-center py-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex gap-4">
                    <div className='flex items-center'>
                      <Checkbox checked={choices.includes(cart.id)} onChange={(e) => handleCheck(cart.id, e.target.checked)} />
                    </div>
                    <a href={`/shop/${cart.goods.id}`} className='flex gap-4'>
                      <FaabsImage src={'beans/' + cart.goods.img} width={70} height={50} />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">{cart.goods.name}</h3>
                        <div className="text-sm mb-2">{cart.cart_item.map((item: any) => item.goods_option_item.name).join(', ')}</div>
                        <div className="inline-flex text-sm font-medium text-emerald-600 text-center py-0.5">{cart.cart_item.map((item: any) => item.goods_option_item.price).reduce((a: number, b: number) => a + b)}원</div>
                      </div>
                    </a>
                    {/* Product meta */}
                    <div className="flex flex-wrap justify-end items-center">
                      <button className="text-sm underline hover:no-underline" onClick={async () => await handleDelete(cart.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              )}
            </ul>

          </div>

          {/* Sidebar */}
          <div className='relative'>
            <div className="lg:sticky bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-[18rem] xl:w-[20rem]">
              <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Summary</div>
              <div className="mb-4">
                <button onClick={() => goOrder()}
                  disabled={!choices.length}
                  className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Buy Now - {amount}원</button>
              </div>
              <div className="text-xs text-slate-500 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}