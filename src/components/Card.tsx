
'use client';

import { Card } from 'flowbite-react';
import { StaticImageData } from 'next/image';

export default function CardComponent({ img, title, content, link }: { img: string, title: string, content: string, link?: string }) {
    return (
        <Card
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/beans/${img}`}
            href={link}
        >
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {content}
            </p>
        </Card>
    );
}
