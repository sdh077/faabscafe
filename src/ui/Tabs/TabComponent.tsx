'use client';
import type { FC } from 'react';
import { Tabs } from "@/ui/Tabs";

// 제네릭을 사용하여 탭 콘텐츠와 탭을 렌더링하는 컴포넌트를 정의함.
interface TabComponentProps<T> {
    tabsData: T[]; // 배열 제네릭으로 전달되어 탭 데이터를 담은 배열.
}

// FC 타입을 사용하여 함수형 컴포넌트를 정의.
// 제네릭을 사용하여 TabComponentProps에 동적으로 타입을 할당함.
const TabComponent: FC<TabComponentProps<{
    title: string;
    content: string;
    disabled: boolean;
}>> = ({ tabsData }) => {

    const TabContent: FC<{ content: string }> = ({ content }) => (
        <div className='font-medium text-sm text-gray-600 '>
            {content}
        </div>
    );

    return (
        <Tabs>
            {tabsData.map((tab, idx) => (
                <Tabs.Item key={idx} title={tab.title} disabled={tab.disabled} >
                    <TabContent {...tab}/>
                </Tabs.Item>
            ))}
        </Tabs>
    );
};

export default TabComponent;
