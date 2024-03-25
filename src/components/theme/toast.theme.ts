import type { FlowbiteToastTheme } from '@ui/Toast';

const toast: FlowbiteToastTheme = {
  root: {
    base: 'flex w-full max-w-lg items-center rounded-lg bg-white p-4 text-gray-800 shadow',
    closed: 'opacity-0 ease-out',
  },
  toggle: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
    icon: 'h-5 w-5 shrink-0',
  },
};
export default toast