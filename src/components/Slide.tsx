'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import '@styles/swiper.css'
import img from '@public/faabs_img/main1.png'
import mimg from '@public/faabs_img/main2.jpeg'
import img2 from '@public/faabs_img/bg1.jpg'
import Hero from './Hero';

export default function Slide({ images }: { images: { name: string, id: string }[] }) {

  return (
    <Swiper
      spaceBetween={250}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map(image =>
        <SwiperSlide key={image.id}>
          <Hero bgImg={`https://mrhpbteqzpwrmvlorobs.supabase.co/storage/v1/object/public/faabs/main/${image.name}`} height={600}>
          </Hero>
        </SwiperSlide>
      )}
    </Swiper>
  );
};