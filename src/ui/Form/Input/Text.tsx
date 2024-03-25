'use client'

import type { ComponentProps, ReactNode,  } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from 'flowbite-react/lib/esm/types';
import { textInputTheme } from './theme';


export interface InputValidation {
    root: InputValidationRoot;
}
export interface InputValidationRoot {
    code: string;
}

export interface FlowbiteTextInputTheme {
    base: string;
    field: {
        base: string;
        input: {
            base: string;
            sizes: FlowbiteTextInputSizes;
            colors: FlowbiteTextInputColors;
            withAddon: FlowbiteBoolean;
        };
    };
}

export interface FlowbiteTextInputColors
    extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}

export interface FlowbiteTextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}

export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
    addon?: ReactNode;
    theme?: DeepPartial<FlowbiteTextInputTheme>;
    type: "text" | "number" | "password";
    width?: "sm" | "md" | "lg" | "full" | number;
}

export const Text = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            addon,
            className,
            theme: customTheme = {},
            type  = "text",
            width = "full",
            ...props
        },
        ref,
    ) => {
        const theme = mergeDeep(getTheme().textInput, textInputTheme);



        //width 값 설정
        const widthObject = {
            "sm": 'w-20', //80px
            "md": 'w-40', //160px
            "lg": 'w-80',  //320px
            "full": 'w-full'
        }
        //숫자로 받으면 픽스값으로 그이외는 string값으로
        const widthClass = typeof width === "number" ? `w-[${width}px]` : widthObject[width]

        return (
            <>
                <div className={twMerge(theme.base, className)}>
                    <div className={theme.field.base}>
                        <input
                            ref={ref}
                            type={type} // input 지정
                            className={twMerge(
                                theme.field.input.base,
                                theme.field.input.withAddon[addon ? 'on' : 'off'],
                                widthClass
                            )}
                            {...props}
                        />
                    </div>
                </div>
            </>
        );
    },
);

Text.displayName = 'Text';
