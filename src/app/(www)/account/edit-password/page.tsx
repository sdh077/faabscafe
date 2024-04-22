'use client'
import React from 'react'
import { changePassword } from './actions'
import { useDispatch } from 'react-redux';
import { openAlert } from '@/redux/features/alertSlice';

export default function page() {
    const dispatch = useDispatch();
    const action = async (formData: FormData) => {
        const result = await changePassword(formData)
        if (!result.result) dispatch(openAlert({ content: result.message, validation: 'info' }))
        else dispatch(openAlert({ content: '비밀번호 변경에 성공하였습니다.', validation: 'success' }))
    }

    return (
        <div className='p-16 w-full'>
            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">비밀번호 변경</h2>
            <div className="mt-5 w-full">
                <form action={action}>
                    <div className="m-2">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">현재 비밀번호</label>
                        <input id="password" name='password' className="form-input w-80" type="password" />
                    </div>
                    <div className="m-2">
                        <label className="block text-sm font-medium mb-1" htmlFor="new-password">새 비밀번호</label>
                        <input id="new-password" name='new-password' className="form-input w-80" type="password" />
                    </div>
                    <div className="m-2">
                        <label className="block text-sm font-medium mb-1" htmlFor="confirmed-new-password">새 비밀번호 확인</label>
                        <input id="confirmed-new-password" name='confirmed-new-password' className="form-input w-80" type="password" />
                    </div>
                    <button className="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-indigo-500">Change</button>
                </form>
            </div>
        </div>
    )
}
