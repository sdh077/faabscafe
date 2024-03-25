import { DeepPartial } from 'flowbite-react/lib/esm/types';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteColors, getTheme } from 'flowbite-react';

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
  ring?: boolean
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, color = 'default', theme: customTheme = {}, ring = false, ...props }, ref) => {
    const theme = mergeDeep(getTheme().radio, customTheme);
    const themeColor = theme.root.color? theme.root.color[color] : '';
    const isRing = ring ? '' : 'focus:ring-0'

    return <input ref={ref} type="radio"
      className={twMerge(
        theme.root.base,
        themeColor,
        className,
        isRing
      )}
      {...props}
    />;

  },
);

Radio.displayName = 'Radio';
