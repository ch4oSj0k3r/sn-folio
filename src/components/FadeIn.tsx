'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
