'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { useTableHeadContext } from './TableHeadContext';

import React, { useState } from 'react';
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { TbArrowBigUpLineFilled } from "react-icons/tb";

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends ComponentProps<'th'> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
  sortedStatus?: boolean;
  width?: 'col-2' | 'col-3' | 'col-4' | 'col-5' | 'col-6' | 'col-7' | 'auto' | number;
}


export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  theme: customTheme = {},
  sortedStatus,
  width = "auto",
  ...props
}) => {
  const { theme: headTheme } = useTableHeadContext();

  const theme = mergeDeep(headTheme.cell, customTheme);
  const [isToggleSort, setToggleSort] = useState(false);

  const toggleHandler = () => {
    setToggleSort(!isToggleSort); // 현재 상태의 반대값으로 토글
  };
  //width 값 설정
  const widthObject = {
    'auto': 'w-auto',
    'col-2': 'w-1/2', //50%
    'col-3': 'w-1/3', //33%
    'col-4': 'w-1/4', //25%
    'col-5': 'w-1/5', //20%
    'col-6': 'w-1/6', //16%
    'col-7': 'w-1/12', //8%
    'col-8': 'w-50', //8%
  }
  //숫자로 받으면 픽스값으로 그이외는 string값으로
  const widthClass = typeof width === "number" ? `w-[${width}px]` : widthObject[width]
  return (
    <th className={twMerge(theme.base, className, widthClass)} {...props} onClick={() => toggleHandler()}>
      <span className="flex justify-center items-center gap-1">
        {children}
        {!sortedStatus &&
          <>
            {/* {isToggleSort ? <FaArrowUpLong className='w-3 h-3' /> : <FaArrowDownLong  className='w-3 h-3'/>} */}
            {isToggleSort ? <TbArrowBigUpLineFilled className='w-3 h-3' /> : <TbArrowBigDownLineFilled className='w-3 h-3' />}
          </>
        }
      </span>
    </th>
  );
};
