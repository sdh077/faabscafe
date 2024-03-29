import Hero from '@/components/Hero'
import React from 'react'
import bg from '@public/faabs_img/bg1.jpg'
import { Container } from '@/components/Container'
export default function page() {
    return (
        <div>
            <Hero bgImg={'https://ecimg.cafe24img.com/pg514b21282409045/coffee502com/imgs/subscription-top-banner003.jpg'} height={'530px'} >
                <div className='flex justify-center items-center w-full h-full text-white text-xl'>
                    {/* <div className="text-white"> */}
                    단순히 원두 납품에 그치지 않고 운영 환경을 점검하고 솔루션을 제공해드립니다.<br />
                    고민을 함께 나누고 경험을 공유합니다. 우리는 파트너사와 동행합니다.
                    {/* </div> */}
                </div>
            </Hero>
            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px]">원두납품</div>
                    <div className="text-[16px]"><p>단순히 원두 납품에 그치지 않고, 파트너사와 고민을 함께 나누고 경험을 공유합니다.<br />
                        원활한 상담을 위해 상담문의 양식을 작성해주세요. </p>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4dY8keurlusm8rSuJfsntFX34kh18kgdwc5oEYUWoADwtxw/viewform?usp=sf_link" target="blanks_">
                        <button className="btn btn-custom-b-outline"
                            style={{
                                width: '200px',
                                textDecoration: 'none',
                                textAlign: 'left',
                                padding: '20px',
                                color: '#333',
                                border: '1px solid rgba(51, 51, 51, .2)'
                            }}
                        >
                            납품 문의하기
                        </button>
                    </a>
                </div>
            </Container>
            <div className="grid grid-cols-3">
                <div className="">
                    <div className="mobile-box">
                        <div className="area1">
                            <div className="">
                                <img src="/faabs_img/w1.jpeg" className='object-cover h-[500px] w-full' />
                                &nbsp;</div>
                        </div>
                        <div className="area2">

                            <div className="text-md">간편함</div>
                            <div className="text-sm">매주 전문가가 추천하는 새로운 커피</div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mobile-box">
                        <div className="area1">
                            <div className="">
                                <img src="/faabs_img/w2.jpeg" className='object-cover h-[500px] w-full' />
                                &nbsp;</div>
                        </div>
                        <div className="area2">
                            <div className="text-md">신선함</div>
                            <div className="text-sm">로스팅 직후 발송되는 원두로 더욱 신선하게</div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="mobile-box last">
                        <div className="area1">
                            <div className="">
                                <img src="/faabs_img/w3.jpeg" className='object-cover h-[500px] w-full' />
                                &nbsp;</div>
                        </div>
                        <div className="area2">
                            <div className="text-md">합리적</div>
                            <div className="text-sm">언제나 할인된 가격에, 배송비도 무료</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
