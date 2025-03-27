import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';

type NavItemProps = {
    href: string;
    label: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href
    return (
        <Link href={href} className={cn(
            'text-gray-400 flex items-center gap-2',
            isActive && 'text-gray-50'
        )}>
            <span id='nav-decoration'>#</span>
            {label}
        </Link>
    );
}