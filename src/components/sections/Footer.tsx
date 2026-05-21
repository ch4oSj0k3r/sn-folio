import Link from 'next/link';

export default function Footer() {
    const links = [
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sven-nowitzky-66a13430b/',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: 'Xing',
            href: 'https://www.xing.com/profile/Sven_Nowitzky',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.643-.962-.643H3.648z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="py-10 px-6 border-t border-zinc-800 mt-12">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Sven Nowitzky</p>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        {links.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex items-center gap-2 text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                            >
                                {icon}
                                {label}
                            </a>
                        ))}
                    </div>
                    <span className="text-zinc-700">|</span>
                    <Link
                        href="/impressum"
                        className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                        Impressum
                    </Link>
                    <Link
                        href="/datenschutz"
                        className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                        Datenschutz
                    </Link>
                </div>
            </div>
        </footer>
    );
}
