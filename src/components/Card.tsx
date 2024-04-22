
'use client';

import { motion } from "framer-motion";


export default function CardComponent({ id, img, title, content, flavor, link, description }: { id: number, img: string | File, title: string, content: string, flavor: string, link?: string, description: string }) {
    return (
        <a href={`/shop/${id}`} className="card-hover overflow-hidden h-[440px] ">
            {/* border-[1px] mt-[-1px] mr-[-1px]"> */}
            <motion.div className="overflow-hidden relative mb-4"
                whileHover={{
                    scale: 1.05,
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
                <p className="mb-1 text-[15px]">{title}</p>
                <div className="text-[12px] color-primary opacity-[0.7] text-primary">{description}</div>
                <span className="text-body-secondary text-[12px]">13000원</span>
            </div>
        </a>

    );
}
