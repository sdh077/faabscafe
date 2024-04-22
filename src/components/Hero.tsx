import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image";

export default function Hero({ height = '100vh', bgImg, color, children }: { height?: string, bgImg?: string, color?: string, children?: React.ReactNode }) {
  return (
    <div className='w-full relative' style={{
      minHeight: height,
      backgroundImage: `url('${bgImg}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>
      <div className='absolute w-full h-full '
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        {children}
      </div>
    </div>
  )
}
