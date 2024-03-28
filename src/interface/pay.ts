export interface IMPResponse {
    "success": boolean
    "imp_uid": string
    "pay_method": string
    "merchant_uid": string
    "name": string
    "paid_amount": number
    "currency": string
    "pg_provider": string
    "pg_type": string
    "pg_tid": string
    "apply_num": string
    "buyer_name": string
    "buyer_email": string
    "buyer_tel": string
    "buyer_addr": string
    "buyer_postcode": string
    "custom_data": null
    "status": string
    "paid_at": number
    "receipt_url": string
    "card_name": string
    "bank_name": string
    "card_quota": number
    "card_number": string
}
// export interface PaySuccess{
//     "success": true,
//     "imp_uid": "imp_637719328745",
//     "pay_method": "card",
//     "merchant_uid": "ORD20180131-0000011",
//     "name": "노르웨이 회전 의자",
//     "paid_amount": 33000,
//     "currency": "KRW",
//     "pg_provider": "kcp",
//     "pg_type": "payment",
//     "pg_tid": "24716917041840",
//     "apply_num": "75786222",
//     "buyer_name": "홍길동",
//     "buyer_email": "gildong@gmail.com",
//     "buyer_tel": "010-4242-4242",
//     "buyer_addr": "서울특별시 강남구 신사동",
//     "buyer_postcode": "01181",
//     "custom_data": null,
//     "status": "paid",
//     "paid_at": 1711434827,
//     "receipt_url": "https://admin8.kcp.co.kr/assist/bill.BillActionNew.do?cmd=card_bill&tno=24716917041840&order_no=imp_637719328745&trade_mony=33000",
//     "card_name": "현대카드",
//     "bank_name": null,
//     "card_quota": 0,
//     "card_number": "4045770000006504"
// }