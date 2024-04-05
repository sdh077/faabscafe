import Hero from '@/components/Hero'
import React from 'react'
import bg from '@public/faabs_img/bg1.jpg'
import { Container } from '@/components/Container'
import { supabase } from '@/lib/api'
import Goods from '@/interface/goods'
import Contact from './Contact'

export default async function Page() {
    return (
        <div>
            <Hero bgImg={'https://ecimg.cafe24img.com/pg514b21282409045/coffee502com/imgs/subscription-top-banner003.jpg'} height={'530px'} >
                <div className='flex justify-center items-center w-full h-full text-primary text-xl'>
                    <div className="mx-auto text-center">
                        스페셜티 커피 시장에서 같이 성장할 파트너를 모집합니다. <br />
                        원두 납품, 케이터링, 공동 연구 및 개발, 컨설팅, 교육 파트너십에는 여러 형태가 있습니다.
                    </div>
                </div>
            </Hero>
            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px] w-1/6">원두납품</div>
                    <div className="text-[16px] w-4/6"><p>
                        원두 납품은 기본적으로 파브스 매장에서 대면으로 상담을 진행합니다.
                        <br />대면 상담에서는 원두를 단순히 공급하는 것을 떠나 파브스 커피의 원두를 사용하여 스페셜티 커피 시장에서 어떤 방향성을 가질지에 대해 진심으로 상담이 이뤄집니다.
                        <br />대면 상담이 어려우신 분들은 샘플 200g/500g/1kg 단위로 사업자 가격으로 제공 드리며 향후 납품이 이뤄지면 납품가에서 샘플 구매가격을 제외시켜 드립니다.
                        <br />납품 계약이 이뤄지면 초반 방문 세팅부터 주기적인 방문 세팅을 도와드릴 예정입니다.
                    </p>
                    </div>
                    {/* <div className='w-1/6 px-6'>
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
                    </div> */}
                </div>
            </Container>

            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px] w-1/6">케이터링</div>
                    <div className="text-[16px] w-4/6"><p>
                        파브스 커피를 약 40잔 (뜨거운 음료 기준)이 담기는 보온병 또는 종이팩 약 15잔 (뜨거운 음료 기준)에 담아 제공 드립니다.
                        <br />쿠키와 같은 디져트 류도 함께 주문 가능합니다.
                    </p>
                    </div>
                    {/* <div className='w-1/6 px-6'>
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
                                케이터링 신청
                            </button>
                        </a>
                    </div> */}
                </div>
            </Container>
            <div className="grid grid-cols-3 mx-4">
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
            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px] w-1/3">공동 연구 및 개발</div>
                    <div className="text-[16px] w-2/3"><p>
                        Good wave with Good coffee라는 파브스의 비젼에 어울리는 프로젝트에 대한 논의를 환영합니다.

                    </p>
                    </div>
                </div>
            </Container>
            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px] w-1/3">컨설팅</div>
                    <div className="text-[16px] w-2/3"><p>
                        바 구성을 비롯한 인테리어와 카페의 컨셉과 운영의 기반을 만드는 작업까지 진행이 가능합니다.
                    </p>
                    </div>
                </div>
            </Container>
            <Container className='my-24'>
                <div className='flex justify-between'>
                    <div className="text-[20px] w-1/3">교육</div>
                    <div className="text-[16px] w-2/3"><p>
                        로스팅과 추출을 비롯해 팀 센서리 및 조직 강화 솔루션 포함하여 교육을 진행하고 있습니다.
                    </p>
                    </div>
                </div>
            </Container>
            <Contact />
        </div>
    )
}
