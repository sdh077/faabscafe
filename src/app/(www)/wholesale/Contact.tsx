import { Container } from '@/components/Container'
import { Button, Label, TextInput, Textarea, Select } from 'flowbite-react'
import React from 'react'

export default function Contact() {
    return (
        <Container>
            <div className="flex flex-col gap-4">
                <Label htmlFor="inputName">이름</Label>
                <TextInput sizing={'md'} type="text" id="inputName" />
                <Label htmlFor="inputEmail">연락처</Label>
                <TextInput className='flex w-128' type="text" id="inputEmail" />
                <Label htmlFor="inputSubject">지역</Label>
                <TextInput type="text" id="inputSubject" />
                <Label htmlFor="inputSubject">(예정)상호명</Label>
                <TextInput type="text" id="inputSubject" />
                <Label htmlFor="type">파트너쉽 방법</Label>
                <Select id="type" required>
                    <option>원두 납품</option>
                    <option>공동 연구 및 개발</option>
                    <option>컨설팅</option>
                </Select>
                <Label htmlFor="inputContent">문의 상세 내용</Label>
                <Textarea id="inputContent" />
            </div>
            <footer>
                <div className="flex flex-col py-5 border-t border-slate-200 ">
                    <div className="flex self-end">
                        <Button>신청하기</Button>
                    </div>
                </div>
            </footer>
        </Container>
    )
}
