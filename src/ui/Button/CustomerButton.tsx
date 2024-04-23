import { DeepPartial } from 'flowbite-react/lib/esm/types';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { Button, Tooltip } from 'flowbite-react';
import { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode, useEffect, useRef } from 'react';
import { ButtonBaseProps } from './ButtonBase';

import { twMerge } from 'tailwind-merge';
// import type { CustomFlowbiteTheme, FlowbiteSizes } from 'flowbite-react';
// import { buttonTheme } from '../../components/theme/button.theme'

import { getTheme } from 'flowbite-react';
import type {
    FlowbiteBoolean,
    FlowbiteColors,
    FlowbiteSizes,
} from 'flowbite-react';
import ripple from 'ripple-effects';

export interface FlowbiteButtonTheme {
    base: string;
    fullSized: string;
    disabled: string;
    isProcessing: string;
    spinnerSlot: string;
    spinnerLeftPosition: ButtonSizes;
    label: string;
    size: ButtonSizes;
    color: FlowbiteColors;
    outline: FlowbiteButtonOutlineTheme;
    pill: FlowbiteBoolean;
}
export interface FlowbiteButtonInnerTheme {
    base: string;
    outline: string;
    isProcessingPadding: ButtonSizes;
}

export interface FlowbiteButtonOutlineTheme extends FlowbiteBoolean {
    color: ButtonOutlineColors;
    pill: FlowbiteBoolean;
}
export interface ButtonOutlineColors extends Pick<FlowbiteColors, 'gray'> {
    [key: string]: string;
}

export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'lg' | 'xl'> {
    [key: string]: string;
}

export type IButton<T extends ElementType = 'button'> = {
    pill?: boolean;
    color?: string;
    outline?: boolean;
    isProcessing?: boolean;
    // processingSpinner?: ReactNode,
    icon?: { direction: 'right' | 'left' | 'up' | 'down', Icon: any };
    tooltip?: string;
    size?: keyof ButtonSizes;
    children?: JSX.Element | string | ReactNode;
    width?: "sm" | "md" | "lg" | "full" | number;
    theme?: DeepPartial<FlowbiteButtonTheme>;
} & ComponentPropsWithoutRef<T>;



const ButtonComponent = <T extends ElementType = 'button'>(
    {
        pill = false,
        color = 'default',
        icon,
        children,
        size,
        outline = false,
        isProcessing = false,
        width = "full",
        className,
        theme: customTheme = {},
        ...props
    }: IButton,
    ref: ForwardedRef<T>) => {
    const button = useRef(null)

    useEffect(() => {
        if (!button.current) return
        ripple(button.current, {
            background: 'radial-gragiend(white,black)',
            opacity: 0.4,
            triggerExcept: 'button', // BUtton children of the card will not cause a trigger to the ripple
        })
    }, [])
    //width 값 설정
    const widthObject = {
        "sm": 'w-24', //96px
        "md": 'w-40', //160px
        "lg": 'w-80',  //320px
        "full": 'w-full'
    }
    //숫자로 받으면 픽스값으로 그이외는 string값으로
    const widthClass = typeof width === "number" ? `w-[${width}px]` : widthObject[width]
    const theme = mergeDeep(getTheme().button, customTheme);

    const Btn = () =>
        <Button
            pill={pill}
            outline={outline}
            color={color}
            isProcessing={isProcessing}
            // theme={buttonTheme}
            className={twMerge(
                theme.base,
                className,
                widthClass
            )}
            ref={button}

            {...props}
        >
            {icon?.direction === 'left' && <icon.Icon />}
            {children}
            {icon?.direction === 'right' && <icon.Icon />}
        </Button>
    // const theirProps = props as ButtonBaseProps<T>;


    return (
        <>
            <Btn />
        </>
    );
}

export default ButtonComponent