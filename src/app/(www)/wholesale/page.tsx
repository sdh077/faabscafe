import Hero from '@/components/Hero'
import React from 'react'
import bg from '@public/faabs_img/bg1.jpg'
export default function page() {
    return (
        <div>
            <Hero bgImg={bg.src} height={'50vh'} >
                <div className='flex justify-center items-center w-full h-[50vh] text-white text-xl'>
                    {/* <div className="text-white"> */}
                    단순히 원두 납품에 그치지 않고 운영 환경을 점검하고 솔루션을 제공해드립니다.<br />
                    고민을 함께 나누고 경험을 공유합니다. 우리는 파트너사와 동행합니다.
                    {/* </div> */}
                </div>
            </Hero>
        </div>
    )
}
