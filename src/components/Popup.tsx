'use client'
import { useLocalStorage } from 'usehooks-ts'

import { Pops } from '@/interface/pops'
import React, { useState } from 'react'
import FaabsImage from './FaabsImage'
import { Modal } from 'flowbite-react'

export default function Popup(prop: { pops: Pops[] }) {
    const [value, setValue] = useLocalStorage('pops', '')
    const [pops, setPops] = useState(prop.pops)
    const closePop = (id: number, isPermanent: boolean) => {
        if (isPermanent) {
            setValue(value => [...value.split(','), id.toString()].join(','))
        } else {
            setPops(pops => pops.filter(pop => pop.id !== id))
        }
    }
    return (
        <div>
            {pops.filter(pop => !value.includes(pop.id.toString())).map(pop => <div key={pop.id}>
                <Modal show={true} size="xl" popup>
                    <Modal.Body>
                        <FaabsImage src={pop.image} width={1200} height={0} />
                    </Modal.Body>
                    <Modal.Footer className='w-full border-t-2'>
                        <div className='w-full grid grid-cols-2'>
                            <div className='cursor-pointer mx-auto text-primary' onClick={() => closePop(pop.id, true)}>다신 보지 않기</div>
                            <div className='cursor-pointer mx-auto' color="gray" onClick={() => closePop(pop.id, false)}>닫기</div>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>)}
        </div>
    )
}
