"use client"
import className from '@/utils/className';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({children, exact = false, activeClassName, href, ...props }) => {
const path = usePathname()
const active = exact ? path === href : path.startsWith(href);
const classes = className(props.className, active && activeClassName)
if(classes){
    props.className = classes
}



    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default Navlink;