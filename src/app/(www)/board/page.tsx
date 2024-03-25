import { Container } from '@/components/Container'
import React from 'react'
import PostsList from './posts-list'
import { supabase } from '@/lib/api'
import { IDocument } from '@/interface/board'
import PostsNav from './posts-nav'


const getBoard = async () => {
    const { data, error } = await supabase.from('board').select().eq('use_yn', true).returns<IDocument[]>()
    return data ?? []
}
const getDocument = async (board: string | undefined) => {
    const docuQuery = supabase.from('document').select()
    const { data, error } = await (board ? docuQuery.eq('board_id', board) : docuQuery).returns<IDocument[]>()
    return data ?? []
}

export default async function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}) {
    const boards = await getBoard();
    const posts = await getDocument(searchParams.type);
    return (
        <section className="relative mt-32">
            <Container>
                <PostsNav boards={boards} />
                <PostsList posts={posts} />
            </Container>
        </section>
    )
}
