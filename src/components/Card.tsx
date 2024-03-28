
'use client';

import { motion } from "framer-motion";


export default function CardComponent({ id, img, title, content, flavor, link }: { id: number, img: string, title: string, content: string, flavor: string, link?: string }) {
    return (
        <a href={`/shop/${id}`} className="card-hover overflow-hidden h-[440px] border-2">
            <motion.div className="overflow-hidden relative mb-4"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                }}
            >

                <div
                    style={{
                        minHeight: `300px`,
                        backgroundImage: `url('${`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/beans/${img}`}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50%',
                        backgroundSize: 'cover',
                    }}
                />
            </motion.div>
            <div className="p-2">
                <p className="mb-1">{title}</p>
                <span className="text-body-secondary">{content}</span>
            </div>
        </a>

    );
}
