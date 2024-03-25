'use client';

import type { ComponentProps, FC, ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { FlowbiteAccordionComponentTheme } from './AccordionContent';
import { AccordionContent } from './AccordionContent';
import type { AccordionPanelProps } from './AccordionPanel';
import { AccordionPanel } from './AccordionPanel';
import type { FlowbiteAccordionTitleTheme } from './AccordionTitle';
import { AccordionTitle } from './AccordionTitle';
import { DeepPartial } from '@reduxjs/toolkit';
import { FlowbiteBoolean, getTheme } from 'flowbite-react';
import { mergeDeep } from '@/components/helpers/merge-deep';

export interface FlowbiteAccordionTheme {
  root: FlowbiteAccordionRootTheme;
  content: FlowbiteAccordionComponentTheme;
  title: FlowbiteAccordionTitleTheme;
}

export interface FlowbiteAccordionRootTheme {
  base: string;
  flush: FlowbiteBoolean;
}

export interface AccordionProps extends ComponentProps<'div'> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<'svg'>>;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<FlowbiteAccordionTheme>;
}

const AccordionAllopen: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = true,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState<number[]>(() => {
    // 모든 패널이 열려있는 상태로 초기화
    return collapseAll
      ? Array.isArray(children)
        ? children.map((_, index) => index)
        : [0]
      : [];
  });
  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          flush,
          isOpen: isOpen.includes(i), // isOpen 배열에 i가 포함되어 있는지 확인
          setOpen: () => {
            // toggle 방식으로 패널의 인덱스를 추가 또는 제거
            setOpen((prevOpen) => (prevOpen.includes(i) ? prevOpen.filter((idx) => idx !== i) : [...prevOpen, i]));
          },
        }),
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen],
  );

  const theme = mergeDeep(getTheme().accordion.root, customTheme);


  return (
    <div
      className={twMerge(theme.base, theme.flush[flush ? 'on' : 'off'], className)}
      data-testid="flowbite-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionAllopen.displayName = 'AccordionAllOpen';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const AccordionAllOpen = Object.assign(AccordionAllopen, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
