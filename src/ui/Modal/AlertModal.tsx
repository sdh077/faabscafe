'use client';

import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import type { MutableRefObject } from 'react';
import { forwardRef, useState, type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '@/components/helpers/merge-deep';
import { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes, getTheme } from 'flowbite-react';
import { DeepPartial } from '@reduxjs/toolkit';
import { AlertBody } from './AlertBody';
import { AlertFooter } from './AlertFooter';
import { ModalContext } from './ModalContext';

import type { FlowbiteModalBodyTheme } from './ModalBody';
import type { FlowbiteModalFooterTheme } from './ModalFooter';
import type { FlowbiteModalHeaderTheme } from './ModalHeader';
import { HiOutlineX } from 'react-icons/hi';


export interface FlowbiteModalTheme {
  root: FlowbiteModalRootTheme;
  content: FlowbiteModalContentTheme;
  body: FlowbiteModalBodyTheme;
  header: FlowbiteModalHeaderTheme;
  footer: FlowbiteModalFooterTheme;
}

export interface FlowbiteModalRootTheme {
  base: string;
  show: FlowbiteBoolean;
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface FlowbiteModalContentTheme {
  base: string;
  inner: string;
}

export interface ModalPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<FlowbiteSizes, 'xs'> {
  [key: string]: string;
}

export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<FlowbiteModalTheme>;
  initialFocus?: number | MutableRefObject<HTMLElement | null>;
}

const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      className,
      dismissible = false,
      onClose,
      popup,
      position = 'center',
      root,
      show,
      size = 'md',
      theme: customTheme = {},
      initialFocus,
      ...props
    },
    theirRef,
  ) => {
    const [headerId, setHeaderId] = useState<string | undefined>(undefined);
    const theme = mergeDeep(getTheme().modal, customTheme);

    const { context } = useFloating({
      open: show,
      onOpenChange: () => onClose && onClose(),
    });

    const ref = useMergeRefs([context.refs.setFloating, theirRef]);

    const click = useClick(context);
    const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown', enabled: dismissible });
    const role = useRole(context);

    const { getFloatingProps } = useInteractions([click, dismiss, role]);

    if (!show) {
      return null;
    }

    return (
      <ModalContext.Provider value={{ theme, popup, onClose, setHeaderId }}>
        <FloatingPortal root={root}>
          <FloatingOverlay
            lockScroll
            data-testid="modal-overlay"
            className={twMerge(
              theme.root.base,
              theme.root.positions[position],
              show ? theme.root.show.on : theme.root.show.off,
              className,
              
            )}
            {...props}
          >
            <FloatingFocusManager context={context} initialFocus={initialFocus}>
              <div
                ref={ref}
                {...getFloatingProps(props)}
                aria-labelledby={headerId}
                className={twMerge(theme.content.base, theme.root.sizes[size])}
              >
                <div className={
                  twMerge(
                  theme.content.inner,
                  'border-l-4 border-solid border-blue-500',
                  )}>
                  <div className='absolute flex justify-end w-full'>
                    <button
                      type="button"
                      className='flex justify-center items-center w-11 h-11'
                      aria-label="Close"
                      onClick={onClose}>
                      <HiOutlineX aria-hidden className={theme.header.close.icon} />
                    </button>
                  </div>
                  {children}
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      </ModalContext.Provider>
    );
  },
);

ModalComponent.displayName = 'AlertModal';
AlertBody.displayName = 'AlertModal.Body';
AlertFooter.displayName = 'AlertModal.Footer';

export const AlertModal = Object.assign(ModalComponent, {
  Body: AlertBody,
  Footer: AlertFooter,
});
