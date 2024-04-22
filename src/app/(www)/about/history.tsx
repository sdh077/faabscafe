'use client'
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimate, useInView, useScroll, useSpring } from "framer-motion";
import { inView } from "framer-motion"

import jj from '@public/faabs_img/jj.png'
import js from '@public/faabs_img/js.png'
import Image, { StaticImageData } from "next/image";
import { IHistory } from "@/interface/history";

function CheckIcon() {
    return (
        <div className="elementor-icon absolute left-[50%] -ml-[16px] z-5 text-[20px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 48 48"
            >
                <g id="Gruppe_185" data-name="Gruppe 185" transform="translate(-824 -9619)">
                    <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx={24}
                        cy={24}
                        r={24}
                        transform="translate(824 9619)"
                        fill="#1a2833"
                    />
                    <path
                        id="Pfad_487"
                        data-name="Pfad 487"
                        d="M10523.578-9753.28l-1.768-1.769-8.3-8.3,3.535-3.535,6.528,6.528,13.34-13.34,3.535,3.535Z"
                        transform="translate(-9678.484 19407.871)"
                        fill="#fff"
                    />
                </g>
            </svg>{" "}
        </div>
    )
}

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
        <div className="my-20 flex ">
            <div ref={ref} className="timeline w-[80%] px-10 py-2 pe-lg-7 rounded-lg">
                {/* bg-[#1A2833]  text-[#F5581E]*/}
                <div className="text-lg  text-[40px] text-bold">{year}</div>
                <hr className="mt-4 mb-10 bg-black" style={{ height: '2px' }} />
                <div>
                    {value.map(item =>
                        <div className=" text-sm mb-1" key={item.id}>{item.tag ? `[${item.tag}]` : ''}{item.month ? `${item.month}월 ` : ''}{item.content}</div>
                    )}
                </div>
            </div>
            {<CheckIcon />}
        </div>
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
        animate('div', { y: 100 }, { duration: 1, type: 'spring' })
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
        <div className="relative mb-20">
            <div className="flex w-full relative p-6">
                <div className="w-1/2">
                    <div className="sticky top-[80px] ml-[10%]" ref={scope}>
                        <div className="w-[80%]">
                            {/* <motion.div
                                key={image.src}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    x: -100,
                                    opacity: 1,
                                    transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                                }}
                            > */}
                            <Image key={image.src} src={image} width={1000} height={800} alt="" />
                            {/* </motion.div> */}
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    {Object.entries(arr).map(([key, value]) =>
                        <Item key={key} year={key} handleImage={handleImage} value={value} />
                    )}
                </div>
            </div>
        </div >
    );
}
