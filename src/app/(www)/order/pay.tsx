'use client'
import React, { useState } from 'react'
import Script from 'next/script';
import { ToggleSwitch } from 'flowbite-react';
import { IMPResponse } from '@/interface/pay';
import { v4 as uuidv4 } from 'uuid';
import { Cart } from '@/interface/cart';
import { orderSuccess } from './actions';
import ripple from "ripple-effects";
import Button from '@/ui/Button';

export default function Pay({ carts, amount, shipping, address }: { carts: Cart[], amount: number, shipping: number, address: string }) {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [payType, setPayType] = useState('card')
    const pay = async () => {
        const uuid = uuidv4()
        const payType = 1
        const { IMP } = window;
        // orderSuccess(carts, amount + shipping, address, payType)
        IMP.init('imp83747000');

        IMP.request_pay({
            pg: "kcp.AO09C",
            pay_method: "card",
            merchant_uid: uuid,
            name: "노르웨이 회전 의자",
            amount: amount + shipping,
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181"
        }, (rsp: IMPResponse) => { // callback
            if (rsp.success) {
                orderSuccess(carts, amount + shipping, address, payType)
            } else {
                console.log(rsp)
            }
        });
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <Button color={payType === 'card' ? 'dark' : 'light'} onClick={() => setPayType('card')}>신용카드</Button>
                <Button color={payType === 'cash' ? 'dark' : 'light'} onClick={() => setPayType('cash')}>무통장 입금</Button>
                <Button color={payType === 'naver' ? 'dark' : 'light'} onClick={() => setPayType('naver')}>네이버 페이</Button>
            </div>
            <div className="mt-6">
                <div className="mb-4">
                    <ToggleSwitch checked={switch1} label="개인정보 수집 및 이용 동의" onChange={setSwitch1} />
                </div>
                <div className="mb-4">
                    <ToggleSwitch checked={switch2} label="구매조건 확인 및 결제진행에 동의" onChange={setSwitch2} />
                </div>
                <div className="mb-4">
                    <Button disabled={!switch1 || !switch2} onClick={() => pay()} className="btn w-full bg-primary hover:bg-primary text-white">Pay</Button>
                </div>
            </div>
            <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
            <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></Script>
        </div>
    )
}
