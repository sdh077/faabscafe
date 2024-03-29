'use client'
import './full.css'
import { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import { motion } from 'framer-motion';
import { WaveComponent } from './wave/app'
import Video from './video';

export default function Page() {
    const [position, setPosition] = useState([0, 0])
    const [currentPage, setCurrentPage] = useState(1);
    const [throttle, setThrottle] = useState(false);
    const [direction, setDirection] = useState('')
    const outerDivRef = useRef<HTMLDivElement>(null);
    const DIVIDER_HEIGHT = 5;


    const canvas = useRef<HTMLCanvasElement>(null)
    if (canvas.current) new WaveComponent(canvas.current)

    useEffect(() => {
        const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
        if (!outerDivRef.current) return;
        outerDivRef.current.scrollTo({
            top: pageHeight * (currentPage - 1) + DIVIDER_HEIGHT * (currentPage - 1),
            left: 0,
            behavior: "smooth",
        });
    }, [currentPage])
    useEffect(() => {
        const wheelHandler = (e: any) => {
            e.preventDefault();
            if (throttle) return;
            setThrottle(true);
            const { deltaY } = e;
            if (!outerDivRef.current) return;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
            const scrollCenter = scrollTop + pageHeight / 2
            const page = Math.ceil(scrollCenter / pageHeight)
            const nextPage = currentPage + (deltaY > 0 ? 1 : -1)
            setDirection(deltaY > 0 ? 'down' : 'up')
            setCurrentPage(nextPage > 0 ? nextPage < 4 ? nextPage : 3 : 0);
            setTimeout(async () => {
                setThrottle(false);
            }, 1200);
        };
        const outerDivRefCurrent = outerDivRef.current;
        if (outerDivRefCurrent)
            outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            if (outerDivRefCurrent)
                outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, [throttle]);
    return (
        <main>
            <canvas style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                top: '0',
                zIndex: 1000,
                display: throttle ? 'block' : 'none',
            }} ref={canvas} />
            <div ref={outerDivRef} className="outer">
                <Dots currentPage={currentPage} />
                <div className="inner ">
                    {[
                        <div style={{
                            clipPath: 'circle(300px at 50% 50%)'
                        }}>
                            1hjghgjhghgi
                        </div>
                        , <Video src="/video/faabsvideo.mp4" />, 12, <Video src="/video/officeloop.mp4" />][currentPage]}
                </div>
            </div>
        </main>
    )
}
