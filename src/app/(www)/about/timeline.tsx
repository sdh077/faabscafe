'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './timeline.css'
import { Container } from "@/components/Container";
import { IHistory } from "@/interface/history";
export default function Timeline({ historys }: { historys: IHistory[] }) {
    const arr: Record<number, IHistory[]> = {};
    historys.map((history: IHistory, i) => {
        if (!arr[history.year]) arr[history.year] = []
        arr[history.year].push(history)
    })
    return (
        <Container>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper mt-16">
                {Object.entries(arr).map(([key, value]) =>
                    <SwiperSlide key={key}>
                        <div className="swiper-slide swiper-slide-active">
                            <div>
                                <div className="pe-5 pb-3 pe-lg-7">
                                    <h2 className="text-primary display-5">{key}</h2>
                                </div>
                                <div className="swiper-divider-line bg-primary relative w-100 h-1 my-4 bg-[#e3dffc]"
                                    style={{ backgroundColor: '#7360f2' }}
                                ></div>
                                <div className="pe-7 pt-3 pe-lg-7">
                                    {value.map(item =>
                                        <h5 key={item.id}>{item.tag ? `[${item.tag}]` : ''}{item.month ? `${item.month}월 ` : ''}{item.content}</h5>
                                    )}
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                )}
            </Swiper>
        </Container>
    )
}
