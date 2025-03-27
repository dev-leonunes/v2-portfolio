'use client';

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-items";

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projetos" },
];

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        width={58}
                        height={49}
                        src="/public/next.svg"
                        alt="Logo"
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map((item) => (
                        <NavItem {...item} key={item.label} />
                    ))}
                </nav>
            </div>
        </header>
    );
}
