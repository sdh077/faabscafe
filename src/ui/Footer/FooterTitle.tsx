import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { getTheme } from 'flowbite-react';

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends ComponentProps<'h2'> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = 'h2',
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.title, customTheme);

  return (
    <Component data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
