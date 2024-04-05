import type { FlowbiteNavbarTheme } from "flowbite-react";

const navbarTheme: FlowbiteNavbarTheme = {
  root: {
    base: 'z-40 bg-white px-2 py-2.5 dark:border-gray-200 dark:bg-gray-800 sm:px-4 h-20 flex ',
    rounded: {
      on: 'rounded',
      off: '',
    },
    bordered: {
      on: 'border',
      off: '',
    },
    inner: {
      base: 'z-40 mx-auto container flex flex-wrap items-center justify-between',
      fluid: {
        on: '',
        off: 'container',
      },
    },
  },
  brand: {
    base: 'flex items-center',
  },
  collapse: {
    base: 'md:block w-[80%]',
    list: 'mt-4 flex flex-row md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
    hidden: {
      on: 'hidden',
      off: '',
    },
  },
  link: {
    base: ' block py-2 pr-4 pl-3 md:p-0 flex content-baseline',
    active: {
      on: 'bg-primary text-white dark:text-white md:bg-transparent md:text-cyan-700',
      off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-white',
    },
    disabled: {
      on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
      off: '',
    },
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
    icon: 'h-6 w-6 shrink-0',
  },
};
export default navbarTheme