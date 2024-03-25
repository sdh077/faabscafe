import { Container } from '@/components/Container'
import Hero from '@/components/Hero'
import { Textarea } from '@/ui/Form/Textarea'
import { Label, TextInput } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Container>
                <div className='my-20'>
                    <div className='text-2xl'>
                        Get in touch with us
                    </div>
                    <div className='text-md'>
                        Do you have questions about our products or need a quote? Use the contact form below and we will get back to you.
                    </div>
                </div>
                <Image src="/1200x600/2.jpg" width={1200} height={600} className="rounded-3xl my-10" alt="" />
                <div className='grid grid-cols-3 text-center'>
                    <div>
                        <h5>Customer support</h5>
                        If you are already a customer with us, we will be happy to help you in our Customer Support.
                    </div>
                    <div>
                        <h5>Skype</h5>
                        Want to Discuss in details about your next project?, Join us on skype
                    </div>
                    <div>
                        <h5>Phone</h5>
                        Give us a call Monday to Friday
                        10:AM to 5:PM
                    </div>
                </div>
                <div className='my-20'>
                    <a href='https://m.place.naver.com/share?id=1000833099&tabsPath=%2Fhome&appMode=detail' target='_blank'>
                        <Image src={'/faabs_img/map.png'} width={1200} height={400} alt='' />
                    </a>
                </div>

                <div className='my-20'>
                    <div className='text-4xl'>
                        Contact Form
                    </div>
                    <div className='text-xl'>
                        Use the contact form if you have questions about our products. Our sales team will be happy to help you:
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <Label htmlFor="inputName">NAME</Label>
                    <TextInput sizing={'md'} type="text" id="inputName" />
                    <Label htmlFor="inputEmail">E-MAIL</Label>
                    <TextInput className='flex w-128' type="text" id="inputEmail" />
                    <Label htmlFor="inputSubject">Subject</Label>
                    <TextInput type="text" id="inputSubject" />
                    <Label htmlFor="inputContent">Content</Label>
                    <Textarea id="inputContent" height={1000} />
                </div>
            </Container>
        </div>
    )
}
