'use client'
import { Toast, ToastToggle } from '@/ui/Toast';
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { closeToast } from '@/redux/features/toastSlice';
import { useEffect } from "react";

export default function ToastModal() {
    const dispatch = useDispatch();
    const toastInfo = useAppSelector((state) => state.toastReducer);
    
    useEffect(() => {
        if (toastInfo.length > 0) {
            const timer = setTimeout(() => {
                dispatch(closeToast());
            }, toastInfo[0].timeout);
            return () => {
                clearTimeout(timer);
            };
        }
    })
// 
    return (
        <div className="fixed inset-x-1/2 bottom-10 translate-x-neg-1/2 flex flex-col flex-nowrap justify-end items-center gap-4 w-full z-50">
            {toastInfo.map(Item =>
                <Toast
                    key={Item.id}
                    toastType={Item.toastType} // 토스트타입 성공/실패/경고
                >
                    <div className="text-sm font-normal">
                        {Item.content} {/* //토스트 메시지 */}
                    </div>
                    <ToastToggle /> {/* //토스트 닫기 */}
                </Toast>
            )}
        </div>
    );
}