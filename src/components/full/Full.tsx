'use client'
import './full.css'
import { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import { motion } from 'framer-motion';
import { WaveComponent } from './wave/app'
import Video from './video';

const First = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clipPath, setClipPath] = useState(`circle(20px at 50% 50%)`)

    return (
        <div>
            {'clipPathclipPathclipPathclipPathclipPath'}
            <div
                className='bg-primary text-primary w-full h-full'
                onMouseMove={e => {
                    setClipPath(`circle(100px at ${e.clientX / document.body.clientWidth * 100}% ${e.clientY / document.body.clientHeight * 100}%)`)
                }}
                style={{
                    clipPath,
                    WebkitTextFillColor: '#333'
                }}
            >
            </div >
        </div>
    )
}

export default function Full() {
    const [currentPage, setCurrentPage] = useState(0);
    const [throttle, setThrottle] = useState(false);
    const [direction, setDirection] = useState('')
    const outerDivRef = useRef<HTMLDivElement>(null);
    const DIVIDER_HEIGHT = 5;


    // const canvas = useRef<HTMLCanvasElement>(null)
    // if (canvas.current) new WaveComponent(canvas.current)

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
            setCurrentPage(nextPage > 0 ? nextPage < 3 ? nextPage : 2 : 0);
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
        <main >
            <div ref={outerDivRef} className="outer relative">
                <Dots currentPage={currentPage + 1} setCurrentPage={setCurrentPage} />
                <div className="inner ">
                    {[
                        <Video key={2} src="/video/faabsvideo.mp4" data-aos="fade-up">
                            <>
                                <div className='absolute text-5xl left-25 bottom-[30px] text-white opacity-100 z-[11]'>
                                    drinking coffee every day
                                </div>
                            </>
                        </Video>,
                        <img key={3} src='/faabs_img/full1.jpeg' className='w-full h-full' />
                        , <Video key={4} src="/video/officeloop.mp4" data-aos="fade-up">
                            <div data-aos="fade-right" className='absolute text-5xl left-[100px] bottom-25 text-white opacity-100 z-[11]'>
                                Coffee is Good
                            </div>
                        </Video>][currentPage]}
                </div>
            </div>
        </main>
    )
}
