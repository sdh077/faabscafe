'use client'
import { Address } from "@/interface/user"
import { postSearch } from "@/lib/address";
import { Modal } from "flowbite-react"
import { useState } from "react";
import { createAddress, deleteAddress } from "./actions";
import ModalBlank from "@/components/modal-blank";

export function ShippingLine({ address }: { address: Address }) {
  const [dangerModalOpen, setDangerModalOpen] = useState<boolean>(false)

  return (
    <section className="border p-4">
      <ul>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-md text-slate-800 dark:text-slate-100 font-medium">{address.is_default ? '[기본배송지]' : ''} {address.name}</div>
        </li>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">[{address.post}] {address.address1}, {address.address2}</div>
        </li>
        <li className="md:flex md:justify-between md:items-center  border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">{address.phone}</div>
        </li>
        <li className="md:items-center py-3 border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">요청사항</div>
          <div className="text-sm text-slate-800 dark:text-slate-100 font-medium">{address.request}</div>
        </li>
        <li className="md:flex md:justify-end md:items-center py-3 border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-600 dark:text-slate-400 ml-4">
            <a className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => { setDangerModalOpen(true) }}

            >삭제</a>
          </div>
        </li>
        <ModalBlank isOpen={dangerModalOpen} setIsOpen={setDangerModalOpen}>
          <div className="p-5 flex space-x-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100 dark:bg-rose-500/30">
              <svg className="w-4 h-4 shrink-0 fill-current text-rose-500" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
              </svg>
            </div>
            {/* Content */}
            <div>
              {/* Modal header */}
              <div className="mb-2">
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">Delete 1 customer?</div>
              </div>
              {/* Modal content */}
              <div className="text-sm mb-10">
                <div className="space-y-2">
                  <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex flex-wrap justify-end space-x-2">
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" onClick={() => { setDangerModalOpen(false) }}>Cancel</button>
                <button className="btn-sm bg-rose-500 hover:bg-rose-600 text-white"
                  onClick={() => { deleteAddress(address.id); setDangerModalOpen(false) }}
                >Yes, Delete it</button>
              </div>
            </div>
          </div>
        </ModalBlank>
      </ul>
    </section>
  )
}
export default function ShippingPanel({ addressbook }: { addressbook: Address[] }) {
  const [openModal, setOpenModal] = useState(false);
  const handleAction = async (form: FormData) => {
    const res = await createAddress(form)
    setOpenModal(false)
  }
  return (
    <div className="grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">배송지 목록</h2>
        </div>
        {addressbook.map(address =>
          <ShippingLine key={address.id} address={address} />
        )}
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
              onClick={() => setOpenModal(true)}
            >
              추가</button>
          </div>
        </div>
      </footer>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>배송지 추가</Modal.Header>
        <Modal.Body>
          <form action={(form) => handleAction(form)}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">수령자 <span className="text-rose-500">*</span></label>
              <input id="name" name='name' className="form-input w-full" type="text" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="tel">전화번호 <span className="text-rose-500">*</span></label>
              <input id="tel" name='tel' className="form-input w-full" type="text" required />
            </div>
            <div className="mt-8">
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap w-full"
                type="button"
                onClick={postSearch}
              >주소 찾기</button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address_post">우편번호</label>
              <input id="address_post" readOnly name="address_post" className="form-input w-full" type="text" autoComplete="on" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address1">주소</label>
              <input id="address1" readOnly name="address1" className="form-input w-full" type="text" autoComplete="on" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="address2">상세 주소 <span className="text-rose-500">*</span></label>
              <input id="address2" name="address2" className="form-input w-full" type="text" autoComplete="on" required />
            </div>

            <div className="flex items-center justify-between mt-6">
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap w-full" type="submit">Sign Up</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}