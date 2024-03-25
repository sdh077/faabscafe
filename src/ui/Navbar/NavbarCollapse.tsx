'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useNavbarContext } from './NavbarContext';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean } from 'flowbite-react';

export interface FlowbiteNavbarCollapseTheme {
  base: string;
  list: string;
  hidden: FlowbiteBoolean;
}

export interface NavbarCollapseProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteNavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();

  const theme = mergeDeep(rootTheme.collapse, customTheme);

  return (
    <div
      data-testid="flowbite-navbar-collapse"
      className={twMerge(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
