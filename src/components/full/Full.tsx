'use client'
import './full.css'
import { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import { motion } from 'framer-motion';
import { WaveComponent } from './wave/app'
import Video from './video';


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
        const keyHandler = (e: KeyboardEvent) => {
            if (throttle) return;
            setThrottle(true);
            if (e.code === 'ArrowDown' || e.code === 'ArrowUp')
                changePage(e.code === 'ArrowDown' ? 1 : -1)
        }
        const wheelHandler = (e: any) => {
            if (throttle) return;
            setThrottle(true);
            const { deltaY } = e;
            if (!outerDivRef.current) return;
            changePage(deltaY)
        };
        const changePage = (value: number) => {
            setDirection(value > 0 ? 'down' : 'up')
            const nextPage = currentPage + (value > 0 ? 1 : -1)
            setCurrentPage(nextPage);
            setTimeout(async () => {
                setThrottle(false);
            }, 800);
        }
        const outerDivRefCurrent = outerDivRef.current;
        if (outerDivRefCurrent) {
            window.addEventListener("wheel", wheelHandler);
            window.addEventListener("keyup", keyHandler);
        }
        return () => {
            if (outerDivRefCurrent) {
                window.removeEventListener("wheel", wheelHandler);
                window.removeEventListener("keyup", keyHandler);
            }
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
                            <div data-aos="fade-right" className='absolute text-5xl left-[100px] bottom-[10%] text-white opacity-100 z-[11]'>
                                Coffee is Good
                            </div>
                        </Video>][currentPage]}
                </div>
            </div>
        </main>
    )
}
