"use client";
import Goods, { Wholesale } from "@/interface/goods";
import { Button, Modal, Table, TextInput } from "flowbite-react";
import { useState } from "react";
import { addWholesale } from "./actions";
import { Address } from "@/interface/user";
export default function WholesaleOrder({ products, addressBook }: { products: Goods[], addressBook: Address[] }) {
    const [openModal, setOpenModal] = useState(false);
    const [addressId, setAddressId] = useState(addressBook.find(address => address.is_default)?.id ?? addressBook[0].id)
    const [productList, setProductList] = useState<Wholesale[]>(products.map(p => ({ ...p, count: 0 })))
    const changeCount = (product: Wholesale, count: number) => {
        product.count = count
        setProductList(productList.map(p => p.id === product.id ? product : p))
    }
    const totalPrice = productList.filter(p => p.count !== 0).reduce((a, b) => a + b.price * b.count, 0)
    const submit = async () => {
        await addWholesale(totalPrice, addressId, productList)
        setOpenModal(false)
    }
    return (
        <div className="lg:flex">
            <div className="w-full lg:w-3/4 overflow-x-auto p-4">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>상품명</Table.HeadCell>
                        <Table.HeadCell>설명</Table.HeadCell>
                        <Table.HeadCell>가격</Table.HeadCell>
                        <Table.HeadCell>개수</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {productList.map(product =>
                            <Table.Row
                                key={product.id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {product.name}
                                </Table.Cell>
                                <Table.Cell>{product.description}</Table.Cell>
                                <Table.Cell>{product.price}</Table.Cell>
                                <Table.Cell><TextInput type="number" onChange={(e) => changeCount(product, Number(e.target.value))} value={product.count} /></Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
            <div className="w-full lg:w-1/4 p-4">
                <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 ">
                    <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">Order Summary</div>
                    {/* Order details */}
                    <ul className="mb-4">
                        {productList.filter(p => p.count !== 0).map(p =>
                            <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                                <div>{p.name}</div>
                                <div className="font-medium text-slate-800 dark:text-slate-100">{p.price} * {p.count}</div>
                            </li>
                        )}
                    </ul>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="address">배송지 </label>
                        <select id="address" className="form-select w-full" value={addressId} onChange={e => setAddressId(Number(e.target.value))}>
                            {addressBook.map(address =>
                                <option value={address.id}>{address.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-4">
                        <button disabled={totalPrice === 0} onClick={() => setOpenModal(true)} className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Buy Now - {totalPrice}</button>
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>주문 확인</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                            to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                            soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => submit()}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

