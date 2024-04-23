import React from 'react'
export default function Video({ src, children }: { src: string, children: React.ReactNode }) {
    return (
        <section >
            <div className='w-full h-full bg-black z-10'
                style={{
                    top: '0',
                    left: 0,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)'
                }}
            ></div>
            <video style={{
                position: 'absolute',
                top: '0',
                left: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
            }}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={src} type='video/mp4'></source>
            </video>
            {children}
        </section >
    )
}
