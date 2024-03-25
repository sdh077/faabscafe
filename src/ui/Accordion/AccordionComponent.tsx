'use client';
import type { FC } from 'react';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, AccordionAllOpen } from "@ui/Accordion";

// 제네릭을 사용하여 탭 콘텐츠와 탭을 렌더링하는 컴포넌트를 정의함.
interface AccordionComponentProps<T> {
    accordionsData: T[]; // 배열 제네릭으로 전달되어 탭 데이터를 담은 배열.
    allOpen?: boolean;
}

const AccordionComponent: FC<AccordionComponentProps<{
    title: string;
    content: any;
}>> = ({ accordionsData, allOpen }) => {
    return (
        <>
            {!allOpen ?
                <Accordion>
                    {accordionsData.map((Item, idx) => (
                        <AccordionPanel key={idx}>
                            <AccordionTitle>{Item.title}</AccordionTitle>
                            <AccordionContent>
                                {Item.content}
                            </AccordionContent>
                        </AccordionPanel>
                    ))}
                </Accordion>
                :
                <AccordionAllOpen>
                    {accordionsData.map((Item, idx) => (
                        <AccordionPanel key={idx}>
                            <AccordionTitle>{Item.title}</AccordionTitle>
                            <AccordionContent>
                                {Item.content}
                            </AccordionContent>
                        </AccordionPanel>
                    ))}
                </AccordionAllOpen>
            }
        </>
    );
};

export default AccordionComponent;
