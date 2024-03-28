'use client'
import React, { useState } from 'react'
import Script from 'next/script';
import { Button, ToggleSwitch } from 'flowbite-react';
import { IMPResponse } from '@/interface/pay';

export default function Pay({ amount, shipping }: { amount: number, shipping: number }) {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);

    const [payType, setPayType] = useState('card')
    const pay = async () => {
        const { IMP } = window;
        IMP.init('imp83747000');

        IMP.request_pay({
            pg: "kcp.AO09C",
            pay_method: "card",
            merchant_uid: "ORD20180131-0000012",
            name: "노르웨이 회전 의자",
            amount: amount + shipping,
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181"
        }, (rsp: IMPResponse) => { // callback
            if (rsp.success) {
                console.log(rsp)
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
                    <Button disabled={!switch1 || !switch2} onClick={() => pay()} className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">Pay</Button>
                </div>
            </div>
            <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
            <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></Script>
        </div>
    )
}
