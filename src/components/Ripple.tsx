'use client'
import React, { useRef, useState } from 'react'

export default function Ripple({ children }: { children: React.ReactNode }) {
    const [animating, setAnimating] = useState(false)
    const [position, setPosition] = useState({ left: 0, right: 0 })
    const ref = useRef<HTMLDivElement>(null)

    const onMouseOn = (e: React.MouseEvent) => {
        setAnimating(true)
        if (!ref.current) return
        const offset = ref.current.getBoundingClientRect()
        const x = e.pageX - offset.left
        const y = e.pageY - offset.top


        setPosition({ left: x, right: y })

        setTimeout(() => {
            setAnimating(false)
            setPosition({ left: 0, right: 0 })
        }, 1000)
    }
    return (
        <div ref={ref} className='relative' onMouseEnter={e => onMouseOn(e)}>
            {children}
            {animating && <span className='ripple' style={position}></span>}
        </div>
    )
}
