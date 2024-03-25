import type { ComponentProps, ElementType, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { getTheme } from 'flowbite-react';

export interface FlowbiteFooterLinkTheme {
  base: string;
  href: string;
}

export interface FooterLinkProps extends ComponentProps<'a'> {
  as?: ElementType;
  href: string;
  theme?: DeepPartial<FlowbiteFooterLinkTheme>;
}

export const FooterLink: FC<FooterLinkProps> = ({
  as: Component = 'a',
  children,
  className,
  href,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink.link, customTheme);

  return (
    <li className={twMerge(theme.base, className)}>
      <Component href={href} className={theme.href} {...props}>
        {children}
      </Component>
    </li>
  );
};
