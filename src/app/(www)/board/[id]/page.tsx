import { Container } from "@/components/Container"
import { IDocument } from "@/interface/board"
import { supabase } from "@/lib/api"
import { Badge } from "flowbite-react";
import Image from 'next/image';

const getPost = async () => {
    const { data, error } = await supabase.from('document').select('*, document_tag(tag(name))').returns<IDocument[]>()
    console.log(data, error)
    return data && data.length ? data[0] : null
}

export default async function page() {
    const post = await getPost()
    if (!post) return <></>
    return (
        <Container>
            <div className="w-[920px] mx-auto mt-32">
                <div className="flex">
                    {post.document_tag.map(tag =>
                        <Badge key={tag.id} color={'gray'} size="sm" href="#">
                            {tag.tag.name}
                        </Badge>
                    )}
                </div>
                <div className="text-5xl">
                    {post.title}
                </div>
                <p className="my-2">{post.created_at.slice(0, 10)}</p>
                <Image className="my-6" src={post.image} width={920} height={800} alt=""></Image>
                <div dangerouslySetInnerHTML={{ __html: post.content }}>

                </div>
            </div>
        </Container>
    )
}
