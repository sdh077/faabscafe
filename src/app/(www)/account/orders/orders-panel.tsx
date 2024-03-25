'use client'

import { Orders } from '@/interface/orders'
import { Button, Modal, Textarea } from 'flowbite-react'
import { useState } from 'react'
import { cancelReturnAction } from './actions'

const CancelView = ({ modalOrder }: { modalOrder: Orders }) => {
  const [choice, setChoice] = useState(0)
  return (
    <>
      <Modal.Header>{modalOrder.product_title}</Modal.Header>
      <Modal.Body>
        <input type='hidden' name='choice' value={choice} />
        <div className="space-y-6">
          <div className='grid grid-cols-2'>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(1)} color={choice === 1 ? 'success' : 'light'}>단순 변심</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(2)} color={choice === 2 ? 'success' : 'light'}>주문 실수</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(3)} color={choice === 3 ? 'success' : 'light'}>파손 및 불량</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(4)} color={choice === 4 ? 'success' : 'light'}>오배송 및 지연</Button></div>
          </div>
        </div>
        <div className='px-4 py-2'>
          <Textarea name='complain' className='h-[200px]' />
        </div>
      </Modal.Body>
    </>
  )
}

const ReturnView = ({ modalOrder }: { modalOrder: Orders }) => {
  const [choice, setChoice] = useState(0)
  return (
    <>
      <Modal.Header>{modalOrder.product_title}</Modal.Header>
      <Modal.Body>
        <input type='hidden' name='choice' value={choice} />
        <div className="space-y-6">
          <div className='grid grid-cols-2'>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(1)} color={choice === 1 ? 'success' : 'light'}>단순 변심</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(2)} color={choice === 2 ? 'success' : 'light'}>주문 실수</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(3)} color={choice === 3 ? 'success' : 'light'}>파손 및 불량</Button></div>
            <div className='px-4 py-1'><Button className='w-full' onClick={() => setChoice(4)} color={choice === 4 ? 'success' : 'light'}>오배송 및 지연</Button></div>
          </div>
        </div>
        <div className='px-4 py-2'>
          <Textarea name='complain' className='h-[200px]' />
        </div>
      </Modal.Body>
    </>
  )
}

export default function OrdersPanel({ orders }: { orders: Orders[] }) {
  const [openModal, setOpenModal] = useState(0);
  const [modalOrder, setModalOrder] = useState<Orders>()
  const normalOrder = {
    'before': orders.filter(order => order.status.name === '입금전'),
    'prepare': orders.filter(order => order.status.name === '배송준비중'),
    'shipping': orders.filter(order => order.status.name === '배송중'),
    'completed': orders.filter(order => order.status.name === '배송완료'),
  }
  const closeModal = () => {
    setOpenModal(0)
    setModalOrder(undefined)
  }

  const cancelReturn = (isCancel: boolean, order: Orders) => {
    setOpenModal(isCancel ? 1 : 2)
    setModalOrder(order)
  }

  return (
    <div className="grow">
      <div className="px-5 py-1 mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Unique Visitors */}
          <div className="flex items-center py-2 w-1/4 justify-center">
            <div className="mr-5">
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.before.length}</div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">입금전</div>
            </div>
          </div>
          {/* Total Pageviews */}
          <div className="flex items-center py-2 w-1/4 justify-center">
            <div className="mr-5">
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.prepare.length}</div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">배송준비중</div>
            </div>
          </div>
          {/* Bounce Rate */}
          <div className="flex items-center py-2 w-1/4 justify-center">
            <div className="mr-5">
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.shipping.length}</div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">배송중</div>
            </div>
          </div>
          {/* Visit Duration*/}
          <div className="flex items-center  w-1/4 justify-center">
            <div>
              <div className="flex items-center justify-center">
                <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">{normalOrder.completed.length}</div>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">배송완료</div>
            </div>
          </div>
        </div>
      </div>
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">My Orders</h2>

        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">주문내역</h3>
          <ul>
            {orders.map(order =>
              <li key={order.id} className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
                {/* Left */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold">[{order.status.name}]{order.product_title}</div>
                  <div className="text-sm">{order.product_option}, {order.price}원</div>
                </div>
                {/* Right */}
                <div className=" items-center ml-4">
                  <div className="mb-2">
                    <Button>배송 조회</Button>
                  </div>
                  <div className="mt-2">
                    <Button color="light" onClick={() => cancelReturn(['입금전', '배송준비중'].includes(order.status.name), order)}>{['입금전', '배송준비중'].includes(order.status.name) ? '주문 취소' : '환불 신청'}</Button>
                  </div>
                </div>
              </li>
            )}

          </ul>
        </section>
      </div>
      <Modal dismissible show={!!openModal} onClose={() => setOpenModal(0)}>
        <form action={cancelReturnAction}>
          <input type='hidden' name='id' value={modalOrder?.id} />
          {modalOrder &&
            (openModal ?
              <CancelView modalOrder={modalOrder} /> :
              <ReturnView modalOrder={modalOrder} />)
          }
          <Modal.Footer>
            <footer>
              <div className="flex self-end">
                <Button onClick={() => closeModal()} color='light' >취소</Button>
                <Button type='submit' value={openModal} name='submit' className='mx-4'>제출</Button>
              </div>
            </footer>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}