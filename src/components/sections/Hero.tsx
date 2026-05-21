'use client';

import Image from 'next/image';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    const [typingDone, setTypingDone] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
            {/* Background image */}
            <Image
                src="/images/hero.webp"
                alt="Hero background"
                fill
                priority
                className="object-cover object-center"
                suppressHydrationWarning
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center bg-black/60 p-8 rounded-4xl w-full max-w-2xl">
                <p className="text-sm font-mono text-zinc-400 mb-4 tracking-widest uppercase">
                    Hallo, ich bin
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                    Sven Nowitzky
                </h1>
                <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl min-h-[2rem]">
                    <TypeAnimation
                        sequence={[
                            'Web-Entwickler · Full-Stack · Open-Source-Enthusiast',
                            500,
                            () => setTypingDone(true),
                        ]}
                        speed={60}
                        cursor={!typingDone}
                        style={{ display: 'inline' }}
                    />
                </p>
                <div className="flex gap-4">
                    <a
                        href="#about"
                        aria-label="Nach unten scrollen"
                        className="animate-bounce mt-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
