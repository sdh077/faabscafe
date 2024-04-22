'use client'
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Button, Modal } from 'flowbite-react';

export default function People({ name, image, text }: { name: string, image: StaticImageData, text: string }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div onClick={() => setOpenModal(true)} className="cursor-pointer">
            <Image
                src={image}
                width={1000}
                alt="메인 배경 이미지"
            />
            <div className="text-xl flex items-center">
                {/* {text} */}
            </div>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Body>
                    <div className="flex justify-center	">
                        <Image
                            src={image}
                            width={1000}
                            alt="메인 배경 이미지"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {text}
                        </p>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}
