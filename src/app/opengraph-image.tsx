import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Sven Nowitzky — Web-Entwickler';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    const geist = await readFile(
        join(process.cwd(), 'node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
    );

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                background: '#0d0d1a',
                padding: '80px',
                fontFamily: 'Geist',
            }}
        >
            {/* Indigo accent bar */}
            <div
                style={{
                    width: '64px',
                    height: '4px',
                    background: '#6366f1',
                    borderRadius: '2px',
                    marginBottom: '40px',
                }}
            />

            {/* Monogram */}
            <div
                style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#6366f1',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    display: 'flex',
                }}
            >
                sn-folio
            </div>

            {/* Name */}
            <div
                style={{
                    fontSize: '80px',
                    fontWeight: 700,
                    color: '#f4f4f5',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                    display: 'flex',
                }}
            >
                Sven Nowitzky
            </div>

            {/* Subtitle */}
            <div
                style={{
                    fontSize: '32px',
                    color: '#a1a1aa',
                    marginBottom: '48px',
                    display: 'flex',
                }}
            >
                Web-Entwickler · Full-Stack
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '16px' }}>
                {['React', 'Next.js', 'TypeScript'].map((tag) => (
                    <div
                        key={tag}
                        style={{
                            fontSize: '18px',
                            color: '#818cf8',
                            background: '#1e1b4b',
                            padding: '8px 20px',
                            borderRadius: '6px',
                            display: 'flex',
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: 'Geist',
                    data: geist,
                    style: 'normal',
                    weight: 700,
                },
            ],
        }
    );
}
