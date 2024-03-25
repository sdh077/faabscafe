import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean, FlowbiteColors, HelperText, getTheme } from 'flowbite-react';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';

export interface FlowbiteTextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: FlowbiteBoolean;
}

export interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  color?: keyof TextareaColors;
  shadow?: boolean;
  theme?: DeepPartial<FlowbiteTextareaTheme>;
  width?: "full" | number;
  height?: "full" | number;
  resize?: "none" | "resize" | "x-axis" | "y-axis";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    color = 'gray',
    theme: customTheme = {},
    width = "full",
    height = "full",
    resize = "resize",
    ...props
  }, ref) => {
    const theme = mergeDeep(getTheme().textarea, customTheme);

    //width 값 설정
    const widthObject = {
      "full": 'w-full'
    }
    //숫자로 받으면 픽스값으로 그이외는 string값으로
    const widthClass = typeof width === "number" ? `w-[${width}px]` : widthObject[width]


    const heightObject = {
      "full": 'h-full'
    }
    const heightClass = typeof height === "number" ? `h-[${height}px]` : heightObject[height]


    const resizeObject = {
      "none" : "resize-none",
      "resize" : "resize",
      "x-axis" : "resize-x",
      "y-axis" : "resize-y"
    }



    return (
      <>
        <textarea
          ref={ref}
          className={twMerge(
            theme.base,
            theme.colors[color],
            className,
            widthClass,
            heightClass,
            resizeObject[resize]
          )}
          {...props}
        />
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
