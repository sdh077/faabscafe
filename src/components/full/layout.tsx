import React from 'react'

export default function layout({ params: { id }, children }: { params: { id: string }, children: React.ReactNode }) {
    return (
        <>
            <div
            >
                {children}
            </div>
        </>
    )
}
