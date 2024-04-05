'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback } from "react"

export default function More() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    const page = Number(searchParams.get('page') ?? '1')
    return (
        <div className='flex justify-center'>
            <a href={pathname + '?' + createQueryString('page', (page + 1).toString())}>
                <button className='px-6 py-2'
                    style={{
                        backgroundColor: '#797c5b',
                        borderColor: '#c8cbd4',
                        color: '#ffffff',
                        borderWidth: '1px'
                    }}
                >더보기</button>
            </a>
        </div>
    )
}
