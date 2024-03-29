import React from 'react'
export default function Video({ src }: { src: string }) {
    return (
        <section>
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
            >
                <source src={src} type='video/mp4'></source>
            </video>
        </section >
    )
}
