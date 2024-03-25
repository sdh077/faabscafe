import { DeepPartial } from 'flowbite-react/lib/esm/types';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteColors, getTheme } from 'flowbite-react';
import { Label } from "flowbite-react";
import { v4 as uuidv4 } from 'uuid';

export interface FlowbiteRadioTheme {
    root: FlowbiteRadioRootTheme;
}

export interface FlowbiteRadioRootTheme {
    base: string;
    color?: FlowbiteColors;
    ring?: boolean;
}

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
    theme?: DeepPartial<FlowbiteRadioTheme>;
    color?: keyof FlowbiteColors;
    ring?: boolean;
    label?: string;
}

export const RadioLabel = forwardRef<HTMLInputElement, RadioProps>(
    ({ className, color = 'default', theme: customTheme = {}, ring = false, label = '', ...props }, ref) => {
        const theme = mergeDeep(getTheme().radio, customTheme);
        const themeColor = theme.root.color ? theme.root.color[color] : '';
        const isRing = ring ? '' : 'focus:ring-0'
        const uuid = props.id ? props.id : uuidv4();

        return (
            <>
                {label ?
                    <div className='flex items-center gap-2'>
                        <input ref={ref} type="radio"
                            id={uuid}
                            className={twMerge(
                                theme.root.base,
                                themeColor,
                                className,
                                isRing
                            )}
                            {...props}
                        />
                        <Label htmlFor={uuid} className='text-base cursor-pointer'>{label}</Label>
                    </div>
                    :
                    <input ref={ref} type="radio"
                        className={twMerge(
                            theme.root.base,
                            themeColor,
                            className,
                            isRing
                        )}
                        {...props}
                    />
                }
            </>
        );
    },
);

RadioLabel.displayName = 'RadioLabel';
