import genericForwardRef from '@/components/helpers/generic-forward-ref';
import { createElement, type ComponentPropsWithoutRef, type ElementType, type ForwardedRef } from 'react';

export type ButtonBaseProps<T extends ElementType = 'button'> = {
  as?: T;
  href?: string;
} & ComponentPropsWithoutRef<T>;

const ButtonBaseComponent = <T extends ElementType = 'button'>(
  { children, as: Component, href, type = 'button', ...props }: ButtonBaseProps<T>,
  ref: ForwardedRef<T>,
) => {
  const BaseComponent = Component || (href ? 'a' : 'button');

  return createElement(BaseComponent, { ref, href, type, ...props }, children);
};

export const ButtonBase = genericForwardRef(ButtonBaseComponent);
