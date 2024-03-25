'use client';

import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNavbarContext } from './NavbarContext';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean } from 'flowbite-react';

export interface FlowbiteNavbarLinkTheme {
  base: string;
  active: FlowbiteBoolean;
  disabled: FlowbiteBoolean;
}

export interface NavbarLinkProps extends ComponentProps<'a'>, Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarLinkTheme>;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  as: Component = 'a',
  disabled,
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();

  const theme = mergeDeep(rootTheme.link, customTheme);

  return (
    <li className='flex items-center'>
      <Component
        className={twMerge(
          theme.base,
          active && theme.active.on,
          !active && !disabled && theme.active.off,
          theme.disabled[disabled ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
