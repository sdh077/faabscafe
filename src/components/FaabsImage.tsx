import Image from 'next/image'
import React from 'react'

export default function FaabsImage({ src, width, height }: { src: string, width: number, height: number }) {
    return (
        <Image
            src={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/${src}`}
            alt={''}
            width={width}
            height={height}
        />
    )
}
