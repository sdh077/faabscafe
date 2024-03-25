'use client'
import { Container } from '@/components/Container'
import React from 'react'
import Image from "next/image";
import { Button, Select } from 'flowbite-react';
import { Iamport, Request, Enum } from 'iamport-rest-client-nodejs';
import Script from 'next/script';

export default function page() {
    const pay = async () => {
        const { IMP } = window;
        IMP.init('imp12710143');

        IMP.request_pay({
            pg: "kcp.AO09C",
            pay_method: "card",
            merchant_uid: "ORD20180131-0000011",
            name: "노르웨이 회전 의자",
            amount: 64900,
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181"
        }, (rsp: { success: any; }) => { // callback
            if (rsp.success) {
                console.log(rsp)
            } else {
                console.log(rsp)
            }
        });
    }

    return (
        <div>
            <button onClick={() => pay()}>결제</button>
            <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></Script>
            <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></Script>
        </div>
    )
}
