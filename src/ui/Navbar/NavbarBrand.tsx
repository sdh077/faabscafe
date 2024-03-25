'use client';

import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNavbarContext } from './NavbarContext';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';

export interface FlowbiteNavbarBrandTheme {
  base: string;
}

export interface NavbarBrandProps extends ComponentProps<'a'>, Record<string, unknown> {
  as?: ElementType;
  href?: string;
  theme?: DeepPartial<FlowbiteNavbarBrandTheme>;
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  as: Component = 'a',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: rootTheme } = useNavbarContext();

  const theme = mergeDeep(rootTheme.brand, customTheme);

  return (
    <Component className={twMerge(theme.base, className)} {...props}>
      {children}
    </Component>
  );
};
