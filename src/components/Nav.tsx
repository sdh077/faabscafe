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
import clsx from 'clsx';
export default function Nav({ name, brand, navItems }: { name: string, brand: { img?: string, title: string }, navItems: NavItem[] }) {
    const pathname = usePathname()
    const main = pathname === '/'
    if (main) return (
        <Navbar className={clsx('fixed w-full top-0 bg-transparent', 'z-20 py-4 md:py-8')} >
            <NavbarBrand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">{brand.title}</span>
            </NavbarBrand>
        </Navbar>
    )
    return (
        <Navbar className={clsx('sticky w-full top-0 bg-white', 'z-20 py-4 md:py-8')} fluid rounded style={{ boxShadow: '0 11px 24px rgba(15,19,33,.04)' }} >
            <NavbarBrand href="/">
                {brand?.img && <img src={brand.img} className="mr-3 h-[20px] w-[205px] sm:h-[20px]" alt="Flowbite React Logo" />}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{brand.title}</span>
            </NavbarBrand>
            <Navbar.Toggle />
            <div className="flex md:order-2">
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

