import Link from 'next/link'
import Image from 'next/image'
import Sponsor from '@public/projects/1.jpg'
import { IDocument } from '@/interface/board'
import { Card } from 'flowbite-react'

function PostCard({ post }: { post: IDocument }) {
  return (
    <Card
      className="w-full"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      href={`/board/${post.id}`}
      imgSrc={post.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.description}
      </p>
    </Card>
  );
}

export default function PostsList({ posts }: { posts: IDocument[] }) {
  return (
    <div className=' mt-16'>
      {/* Posts */}
      <div className="mb-12">
        {/* List container */}
        <div className="grid grid-cols-1 md:grid-cols-4 space-y-3 mb-8">
          {posts.map(post =>
            <PostCard key={post.id} post={post}></PostCard>
          )}
        </div>
      </div>
    </div>
  )
}
