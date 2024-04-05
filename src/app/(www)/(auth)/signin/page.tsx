'use client'

import { TextInput } from '@/ui/Form/Input/TextInput'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import { login } from './actions'
import sql from '@/lib/db'
import { useFormState } from 'react-dom'
import { useState } from 'react'
import Spinner from '@/components/spinner'
const initialState = {
  message: '',
  errors: ''
}
export default function SignIn({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}) {
  const [load, setLoad] = useState(false)
  const [state, formAction] = useFormState(login, initialState)
  return (
    <>
      <div className="max-w-sm mx-auto mt-20 my-60">
        <form action={async (payload) => {
          setLoad(true)
          formAction(payload)
          setLoad(false)
        }}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="email">
                ID
              </label>
              <TextInput id="uid" name='uid' type="text" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <TextInput id="password" name='password' type="password" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          {typeof state?.errors === 'string' ? state?.errors : ''}
          <Button className="w-full mt-2" type='submit'>{load ? <Spinner /> : '로그인'}</Button>
          <input type='hidden' name='callback' value={searchParams.path} />
        </form>
        <div className="flex flex-wrap my-4 text-sm text-gray-500 gap-3 justify-center">
          <span>아이디 찾기</span>|
          <span>비밀번호찾기</span>
        </div>
        <div className="flex items-center my-6">
          <div className="border-t border-gray-200 grow mr-3" aria-hidden="true" />
          <div className="text-sm text-gray-500 italic">or</div>
          <div className="border-t border-gray-200 grow ml-3" aria-hidden="true" />
        </div>
        <form>
          <div className="flex flex-wrap">
            <div className="w-full">
              <Button className="w-full" href="/join">파브스커피 회원가입</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
