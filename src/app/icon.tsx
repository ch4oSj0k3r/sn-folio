import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

export default async function Icon() {
    const geist = await readFile(
        join(process.cwd(), 'node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf')
    );

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0d0d1a',
                borderRadius: '6px',
                fontFamily: 'Geist',
            }}
        >
            <span
                style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#6366f1',
                    letterSpacing: '-0.5px',
                }}
            >
                SN
            </span>
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
