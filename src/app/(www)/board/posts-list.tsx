import Link from 'next/link'
import Image from 'next/image'
import Sponsor from '@public/projects/1.jpg'
import { IDocument } from '@/interface/board'
import { Card } from 'flowbite-react'
import { Container } from '@/components/Container'
import Hero from '@/components/Hero'

function PostCard({ post }: { post: IDocument }) {
  return (
    <a href={`/board/${post.id}`}>
      <div
        className="w-full bg-white"
      >
        {post.image &&
          <div className='w-full relative overflow-hidden' style={{
            height: '300px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}>
            <img src={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/${post.image}`} />
          </div>}
        <div className='p-4  min-h-[120px]'>
          <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
            {post.description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default async function PostsList({ posts }: { posts: IDocument[] }) {
  return (
    <div className=' mt-16'>
      {/* Posts */}
      <div className="mb-12">
        <Container>
          {/* List container */}
          <div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-4">
            {posts.filter(post => post.image).map(post =>
              <PostCard key={post.id} post={post}></PostCard>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}
