'use client'

import Link from "next/link"
import Script from "next/script"
import { signup } from "./actions";
interface IAddr {
    address: string;
    zonecode: string;
}
export default function Signup() {
    const postSearch = () => {
        new window.daum.Postcode({
            oncomplete: function (data: IAddr) {
                (document.getElementById("address1") as HTMLInputElement).value =
                    data.address;
                (document.getElementById("address_post") as HTMLInputElement).value =
                    data.zonecode;
                document.getElementById("address2")?.focus();
            },
        }).open();
    }
    return (
        <form action={signup}>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="uid">아이디 <span className="text-rose-500">*</span></label>
                    <input id="uid" name='uid' className="form-input w-full" type="text" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">이메일 <span className="text-rose-500">*</span></label>
                    <input id="email" name='email' className="form-input w-full" type="email" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">이름 <span className="text-rose-500">*</span></label>
                    <input id="name" name='name' className="form-input w-full" type="text" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="tel">전화번호 <span className="text-rose-500">*</span></label>
                    <input id="tel" name='tel' className="form-input w-full" type="text" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">비밀번호 <span className="text-rose-500">*</span></label>
                    <input id="password" name="password" className="form-input w-full" type="password" autoComplete="on" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password_confirm">비밀번호 확인 <span className="text-rose-500">*</span></label>
                    <input id="password_confirm" name="password_confirm" className="form-input w-full" type="password" autoComplete="on" required />
                </div>
                <div>
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
                <div>
                    <textarea
                        className="form-textarea w-full focus:border-slate-300"
                        rows={4}
                        defaultValue={'dsfasdf'}
                        disabled
                    />
                </div>
                <label className="flex items-center">
                    <input type="checkbox" name="policy" required className="form-checkbox" />
                    <span className="text-sm ml-2">약관 동의</span>
                </label>
            </div>
            <div className="flex items-center justify-between mt-6">
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap w-full" type="submit">Sign Up</button>
            </div>
            <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></Script>
        </form>
    )
}
