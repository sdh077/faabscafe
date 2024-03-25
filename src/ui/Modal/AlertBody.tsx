'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { useModalContext } from './ModalContext';
import { BsInfoCircleFill } from "react-icons/bs";

export interface FlowbiteModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteModalBodyTheme>;
}

export const AlertBody: FC<ModalBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();

  const theme = mergeDeep(rootTheme.body, customTheme);

  return (
    <div className={twMerge(theme.base, popup && [theme.popup], className, 'px-6 py-2')} {...props}>
      <div className='flex justify-start items-center gap-4 pt-8'>
        <BsInfoCircleFill className='w-10 h-10 min-h-10 min-w-10 text-blue-500' />
        {children}
      </div>
    </div>
  );
};
