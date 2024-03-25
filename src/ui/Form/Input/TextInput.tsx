import type { ComponentProps, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes, HelperText, getTheme } from 'flowbite-react';
import { DeepPartial } from 'flowbite-react/lib/esm/types';

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
  color?: keyof FlowbiteTextInputColors;
  helperText?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  rightIcon?: FC<ComponentProps<'svg'>>;
  shadow?: boolean;
  sizing?: keyof FlowbiteTextInputSizes;
  theme?: DeepPartial<FlowbiteTextInputTheme>;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      addon,
      className,
      color = 'gray',
      helperText,
      icon: Icon,
      rightIcon: RightIcon,
      shadow,
      sizing = 'md',
      
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().textInput, customTheme);

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            {RightIcon && (
              <div data-testid="right-icon" className={theme.field.rightIcon.base}>
                <RightIcon className={theme.field.rightIcon.svg} />
              </div>
            )}
            <input type="text" ref={ref}
              className={twMerge(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
                theme.field.input.withIcon[Icon ? 'on' : 'off'],
                theme.field.input.withRightIcon[RightIcon ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
              )}
              {...props}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

TextInput.displayName = 'TextInput';
