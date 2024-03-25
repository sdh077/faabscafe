'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { DeepPartial } from '@reduxjs/toolkit';
import { useTableContext } from './TableContext';

export interface FlowbiteTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends ComponentProps<'tr'> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
  height?: "sm" | "lg" | "full" | number;
}

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  theme: customTheme = {},
  height = "sm",
  ...props
}) => {
  const { theme: rootTheme, hoverable, striped } = useTableContext();
  const theme = mergeDeep(rootTheme.row, customTheme);

  const heightObject = {
    "sm": 'h-10', //40px
    "lg": 'h-16',  //64px
    "full": 'h-full'
  }
  const heightClass = typeof height === "number" ? `h-[${height}px]` : heightObject[height]
  return (
    <tr data-testid="table-row-element"
      className={twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className, heightClass)}
      {...props}
    >
      {children}
    </tr>
  );
};
