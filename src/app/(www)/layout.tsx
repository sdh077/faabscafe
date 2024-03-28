import FooterComponent from '@/components/Footer'
import Nav from '@/components/Nav'
import TransitionComponent from '@/components/Transition'
import React from 'react'
import { cookies } from 'next/headers'
import { Navs } from '@/interface/nav'
import { Spinner } from 'flowbite-react'


export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies()
    const name = cookieStore.get('name')
    const navItems: Navs[] = [
        {
            name: 'About',
            link: 'about',
        }, {
            name: 'Shop',
            link: 'shop',
        }, {
            name: 'Contact',
            link: 'contact',
        }, {
            //     name: 'Order',
            //     link: 'order',
            // }, {
            name: 'Archive',
            link: 'board',
            // children: [
            //     {
            //         name: '커피뉴스',
            //         link: 'archive/news'
            //     }
            // ]
        },
    ]
    return (
        <TransitionComponent>
            <Nav
                name={name?.value ?? ''}
                brand={{
                    title: 'FAABS COFFEE'
                }}
                navItems={navItems} />
            <div className='mt-20'>
                {children}
            </div>
            <FooterComponent navItems={navItems} />
        </TransitionComponent>
    )
}
