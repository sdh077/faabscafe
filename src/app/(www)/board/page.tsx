import React from 'react'
import PostsList from './posts-list'
import { supabase } from '@/lib/api'
import { IDocument } from '@/interface/board'
import PostsNav from './posts-nav'
import Paginantion from '@/components/pagination'


const getBoard = async () => {
    const { data, error } = await supabase.from('board').select().eq('use_yn', true).returns<IDocument[]>()
    return data ?? []
}
const getDocument = async (board: string | undefined, page: number) => {
    const docuQuery = supabase.from('document').select('*', { count: 'exact' })
    return await (board ? docuQuery.eq('board_id', board) : docuQuery)
        .range((page - 1) * 10, page * 10)
        .returns<IDocument[]>()
}

export default async function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const boards = await getBoard();
    const posts = await getDocument(searchParams.type, Number(searchParams.page ?? '1'));
    if (!posts.data) return <></>
    const totalPages = Math.floor((posts.count ?? 0) / 9) + 1
    return (
        <section className="relative pt-8 bg-[#F8F9FA]">
            {/* <PostsNav boards={boards} /> */}
            <PostsList posts={posts.data} />
            <div className='mx-auto'>
                <Paginantion page={Number(searchParams.page ?? '1')} totalPages={totalPages} />
            </div>
        </section>
    )
}
