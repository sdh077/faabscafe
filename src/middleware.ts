import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    const response = NextResponse.next()
    if (token)
        return response
    return NextResponse.redirect(new URL('/adminLogin', request.url))
}

export const config = {
    matcher: '/admin/:path*',
}