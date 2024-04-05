'use client'
import { WholesaleOrder } from '@/interface/goods'
import { Table } from 'flowbite-react'
import React from 'react'

export default function OrderList({ wholesale }: { wholesale: WholesaleOrder[] }) {
    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>상품명</Table.HeadCell>
                <Table.HeadCell>설명</Table.HeadCell>
                <Table.HeadCell>가격</Table.HeadCell>
                <Table.HeadCell>개수</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {wholesale.map(item =>
                    <Table.Row
                        key={item.id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {item.created_at.slice(0, 10)}
                        </Table.Cell>
                        <Table.Cell>{item.price}</Table.Cell>
                        <Table.Cell>{item.goods.map(g => g.name).join(', ')}</Table.Cell>
                        <Table.Cell>{item.paid ? '정산완료' : '미정산'}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}
