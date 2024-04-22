import Hero from '@/components/Hero'
import React from 'react'
import about1 from '@public/faabs_img/about/image.jpeg'
import about2 from '@public/faabs_img/about/image2.jpeg'
import jj from '@public/faabs_img/jj.png'
import js from '@public/faabs_img/js.png'
import Image from "next/image";
import { Container } from '@/components/Container';
import People from './people'
import { supabase } from '@/lib/api'
import Timeline from './timeline'
import { IHistory } from '@/interface/history'
import History from './history'
const getHistory = async () => {
    const { data, error } = await supabase.from('history').select().returns<IHistory[]>()
    return data ?? [];
}

export default async function About() {
    const historys = await getHistory()
    return (
        <div className='relative'>
            <History historys={historys} />
            <Container>
                <div className='my-12'>
                    <Image
                        src={about1}
                        width={1200}
                        alt="메인 배경 이미지"
                    />
                    <Image
                        src={about2}
                        width={1200}
                        alt="메인 배경 이미지"
                    />
                </div>
            </Container>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-1'>
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
                <People
                    name={'신정주'}
                    text={'커피를 전달하는 전달자로서의 모습이 좋습니다. 파브스커피에서 커피를 고객들에게 전달해 드리는 노력하는 전달자가 되겠습니다.'}
                    image={jj}
                />
                <People
                    name={'이준선'}
                    text={'커피는 끊임없는 연구를 해야해서 좋습니다. 생두, 로스팅, 추출 등 제가 전공한 Hydraulics에서의 유사(sediment)와 난류(turbulence)의 관계를 반영해 확장해나가고 싶습니다.'}
                    image={js}
                />
            </div>
            {/* <Timeline historys={historys} /> */}
        </div>
    )
}
