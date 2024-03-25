'use client'
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";
import { closeAlert } from "@/redux/features/alertSlice";
import { useEffect } from "react";
import { Alert } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';

export default function AlertComponent() {
    const dispatch = useDispatch();
    const alerts = useAppSelector((state) => state.alertReducer);

    useEffect(() => {
        if (alerts.length > 0) {
            // console.log(alerts)
            const timer = setTimeout(() => {
                dispatch(closeAlert());
            }, alerts[0].timeout);
            return () => {
                clearTimeout(timer);
            };
        }
    })


    return (
        <div className="fixed inset-1/2 translate-x-neg-1/2 translate-y-neg-1/2 w-full z-50">
            {alerts.map(a =>
                <Alert key={a.id} className="mx-auto my-2 p-10 w-1/2 h-32 " color={a.validation} onDismiss={() => alert('Alert dismissed!')}>
                    <div className="flex items-center gap-1">
                        <HiExclamation className="h-5 w-5" />
                        <span className="text-lg font-medium">알림!</span>
                    </div>
                    {a.content}
                </Alert>
            )}
        </div>
    );
}