import { Container } from "@/components/Container"
import { IDocument } from "@/interface/board"
import { supabase } from "@/lib/api"
import { Badge } from "flowbite-react";
import Image from 'next/image';

export const revalidate = 0
const getPost = async (id: string): Promise<IDocument | null> => {
    const { data, error } = await supabase.from('document')
        .select('*, document_tag(tag(name))')
        .eq('id', id)
        .returns<IDocument[]>()
    return data && data.length ? data[0] : null
}

export default async function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}
) {
    const post: IDocument | null = await getPost(params.id)
    if (!post) return <></>
    return (
        <Container>
            <div className="w-[920px] mx-auto mt-8">
                <div className="flex">
                    {post.document_tag.map(tag =>
                        <Badge key={tag.id} color={'gray'} size="sm">
                            {tag.tag.name}
                        </Badge>
                    )}
                </div>
                <div className="text-5xl">
                    {post.title}
                </div>
                <p className="my-2">{post.created_at.slice(0, 10)}</p>
                <Image className="my-6" src={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/${post.image}`} width={920} height={800} alt=""></Image>
                <div dangerouslySetInnerHTML={{ __html: post.content }}>

                </div>
            </div>
        </Container>
    )
}
