import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image";

export default function Hero({ height = 500, bgImg, color, children }: { height?: number, bgImg?: string, color?: string, children?: React.ReactNode }) {
  return (
    <div className='w-full relative' style={{
      minHeight: `100vh`,
      backgroundImage: `url('${bgImg}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <div className='z-10 absolute w-full h-full'>
        {children}
      </div>
    </div>
  )
}
