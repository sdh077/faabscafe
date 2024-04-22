import React from 'react'

export default function page({
    params,
    searchParams,
}: {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}
) {
    return (
        <div>{params.id}</div>
    )
}
