'use client'
import { Address } from '@/interface/user'
import { Button, TextInput } from 'flowbite-react'
import React, { useState } from 'react'

export default function AddressPanel({ mainAddress }: { mainAddress: Address }) {
    const [request, setRequest] = useState(mainAddress.request)
    return (
        <div className="bg-white w-full dark:bg-primary shadow-md rounded border border-primary dark:border-slate-700 p-5">
            {/* Header */}
            <header className="flex justify-between items-start space-x-3 mb-3">
                {/* User */}
                <div className="flex items-start space-x-3">
                    <div>
                        <div className="leading-tight">
                            <a className="text-sm font-semibold text-primary dark:text-primary" href="#0">
                                {mainAddress.name}
                            </a>
                        </div>
                        <div className="text-xs text-primary">{mainAddress.phone}</div>
                    </div>
                </div>
                <div>
                    <Button>변경</Button>
                </div>
            </header>
            {/* Body */}
            <div className="text-sm text-primary dark:text-primary space-y-2 mb-5">
                <p>
                    [{mainAddress.post}] {mainAddress.address1}, {mainAddress.address2}
                </p>
                배송메모 <TextInput value={request} onChange={e => setRequest(e.target.value)} name='request' />
            </div>
        </div>
    )
}
