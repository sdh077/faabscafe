'use client'

import { Orders } from '@/interface/orders'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from 'flowbite-react'

export default function CancelReturnPanel({ orders }: { orders: Orders[] }) {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const normalOrder = {
    'cancelRequest': orders.filter(order => order.status.name === '취소신청'),
    'cancelCompleted': orders.filter(order => order.status.name === '취소완료'),
    'returnRequest': orders.filter(order => order.status.name === '환불신청'),
    'return': orders.filter(order => order.status.name === '환불중'),
    'returnCompleted': orders.filter(order => order.status.name === '환불완료'),
  }

  const [comments, setComments] = useState<boolean>(true)
  const [messages, setMessages] = useState<boolean>(true)
  const [mentions, setMentions] = useState<boolean>(false)

  return (
    <div className="grow">
      <div className="px-5 py-1 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Unique Visitors */}
          <div className="flex items-center py-2 w-1/4 justify-center">
            <a href='/account/cancel-return-exchange?type=CANCEL'>
              <div className="mr-5">
                <div className="flex items-center justify-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.cancelRequest.length + normalOrder.cancelCompleted.length}</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">취소 주문</div>
              </div>
            </a>
          </div>
          {/* Total Pageviews */}
          <div className="flex items-center py-2 w-1/4 justify-center">
            <a href='/account/cancel-return-exchange?type=RETURN'>
              <div className="mr-5">
                <div className="flex items-center justify-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.return.length + normalOrder.returnRequest.length + normalOrder.returnCompleted.length}</div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">환불 주문</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">My Orders</h2>

        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">주문내역</h3>
          <ul>
            {orders.filter(order => {
              if (!type) return true
              return order.status.type === type
            }).map(order =>
              <li key={order.id} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
                {/* Left */}
                <div>
                  [{order.status.name}]
                  {order.orders_item.map(item =>
                    <div key={item.id} className='flex'>
                      <div className="text-slate-800 dark:text-slate-100 font-semibold mr-4">{item.product_title}</div>
                      <div className="text-sm">{item.product_option}, {item.price}원</div>
                    </div>
                  )}
                </div>
                {/* Right */}
                <div className=" items-center ml-4">
                  <div className="mb-2">
                    <Button>배송 조회</Button>
                  </div>
                </div>
              </li>
            )}

          </ul>
        </section>
      </div>


    </div>
  )
}