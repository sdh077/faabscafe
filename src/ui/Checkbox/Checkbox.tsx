import { DeepPartial } from '@reduxjs/toolkit';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteColors, getTheme } from 'flowbite-react';

export interface FlowbiteCheckboxTheme {
  root: FlowbiteCheckboxRootTheme;
}

export interface FlowbiteCheckboxRootTheme {
  base: string;
  color?: FlowbiteColors;
  ring?: boolean
}

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  theme?: DeepPartial<FlowbiteCheckboxTheme>;
  color?: keyof FlowbiteColors;
  ring?: boolean;
  
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = 'default', theme: customTheme = {}, ring = false, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme);
    const isRing = ring ? '' : 'focus:ring-0'
    const themeColor = theme.root.color? theme.root.color[color] : '';

    return (
      <input ref={ref} type="checkbox"
        className={twMerge(
          theme.root.base,
          themeColor,
          className,
          isRing
        )}
        {...props}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
