'use client'
import {
    Button,
    Dropdown,
    DropdownItem,
} from 'flowbite-react';
import React, { CSSProperties, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from '@/ui/Navbar';
import { NavItem } from '@/interface/nav';
import { logout } from '@/app/(www)/(auth)/signin/actions';
import Logo from '@public/faabs_img/logo.png'
import Logo2 from '@public/faabs_img/logo2.png'
import clsx from 'clsx';
import Image from 'next/image'
export default function Nav({ name, brand, navItems }: { name: string, brand: { img?: string, title: string }, navItems: NavItem[] }) {
    const pathname = usePathname()
    const main = pathname === '/'
    if (main) return (
        <Navbar className={clsx('absolute w-full top-0 bg-transparent', 'z-20 w-100')} >
            <NavbarBrand href="/">
                <Image src={Logo} width={120} height={175} className="mr-3 " alt="Flowbite React Logo" />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-white">{brand.title}</span> */}
            </NavbarBrand>
        </Navbar>
    )
    return (
        <Navbar className={clsx('sticky w-full top-0 bg-white', 'z-20 py-5 md:px-10')} fluid rounded style={{ boxShadow: '0 11px 24px rgba(15,19,33,.04)' }} >
            <NavbarBrand href="/">
                <Image src={Logo2} width={140} height={65} className="mr-3" alt="Flowbite React Logo" />
                {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{brand.title}</span> */}
            </NavbarBrand>
            <div className="flex md:order-3">
                {!name ?
                    <NavbarLink href='/signin'>
                        <Button size={'xs'}>Log in</Button>
                    </NavbarLink> :
                    <NavbarLink>
                        <Dropdown
                            inline
                            label={<div>name</div>}
                        >
                            <DropdownItem href={`/cart`} >
                                장바구니
                            </DropdownItem >
                            <DropdownItem href={`/account/orders`} >
                                주문목록
                            </DropdownItem >
                            <DropdownItem href={`/admin`} >
                                납품관리
                            </DropdownItem >
                            <DropdownItem onClick={() => logout()} >
                                로그아웃
                            </DropdownItem >
                        </Dropdown>
                    </NavbarLink>
                }
            </div>
            <Navbar.Toggle />
            <NavbarCollapse>
                {navItems.map(navItem =>
                    <NavbarLink key={navItem.name} className='w-full' href={`/${navItem.link}`} active={navItem.link === pathname}>
                        {navItem.name}
                    </NavbarLink>
                )}
            </NavbarCollapse>
        </Navbar>
    );
}

