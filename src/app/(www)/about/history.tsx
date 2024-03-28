'use client'
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView, useScroll, useSpring } from "framer-motion";
import { inView } from "framer-motion"

import jj from '@public/faabs_img/jj.png'
import js from '@public/faabs_img/js.png'
import Image, { StaticImageData } from "next/image";
import { IHistory } from "@/interface/history";

function Item({ handleImage, year, value }: { handleImage: any, year: string, value: IHistory[] }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    useEffect(() => {
        if (inView) {
            handleImage(Number(year) % 2 ? jj : js)
        }
    }, [inView]);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return (
        <section>
            <div>
                <div ref={ref} className="w-full pe-7 pt-3 pe-lg-7">
                    {year}
                    {value.map(item =>
                        <h5 key={item.id}>{item.tag ? `[${item.tag}]` : ''}{item.month ? `${item.month}월 ` : ''}{item.content}</h5>
                    )}
                </div>
            </div>
        </section>
    );
}
export default function History({ historys }: { historys: IHistory[] }) {
    const arr: Record<number, IHistory[]> = {};
    historys.map((history: IHistory, i) => {
        if (!arr[history.year]) arr[history.year] = []
        arr[history.year].push(history)
    })
    const [image, setImage] = useState(jj)
    const [scope, animate] = useAnimate()
    const handleImage = (img: StaticImageData) => {
        animate('span', { y: 100 }, { duration: 1, type: 'spring' })
        setImage(img)
    }
    const show = {
        opacity: 1,
        display: "block"
    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    return (
        <div className="flex w-full relative p-6">
            <div className="w-1/2">
                <div className="sticky top-[20px]" ref={scope}>
                    <span>
                        <motion.div
                            key={image.src}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                x: -100,
                                opacity: 1,
                                transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <Image key={image.src} src={image} width={1000} height={800} alt="" />
                        </motion.div>
                    </span>
                </div>
            </div>
            <div className="w-1/2">
                {Object.entries(arr).map(([key, value]) =>
                    <Item key={key} year={key} handleImage={handleImage} value={value} />
                )}
            </div>
        </div>
    );
}
