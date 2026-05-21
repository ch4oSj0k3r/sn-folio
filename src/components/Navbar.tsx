'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Über mich', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projekte', href: '/#projects' },
    { label: 'Erfahrung', href: '/#experience' },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
            <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold text-zinc-100 hover:text-indigo-400 transition-colors"
                >
                    sn-folio
                </Link>
                {isHome && (
                    <ul className="hidden sm:flex items-center gap-6">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
