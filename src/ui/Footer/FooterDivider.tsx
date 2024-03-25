import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { getTheme } from 'flowbite-react';
import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().footer.divider, customTheme);

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
