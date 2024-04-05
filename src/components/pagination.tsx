'use client'
import { Pagination } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Paginantion({ page, totalPages }: { page: number, totalPages: number }) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <div>
            <Pagination currentPage={page} onPageChange={page => router.push(`${pathname}?page=${page}`)} totalPages={totalPages} />
        </div>
    )
}
