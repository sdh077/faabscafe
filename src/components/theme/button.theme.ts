import type { FlowbiteButtonTheme } from '@ui/Button/CustomerButton';

const button: FlowbiteButtonTheme = {
  base: 'group flex items-stretch items-center justify-center p-0.5 min-w-20 text-center font-medium relative focus:z-10 focus:outline-none',
  fullSized: 'w-full',
  color: {
    default: 'text-gray-900 bg-gray-200 border border-transparent enabled:hover:bg-gray-300 focus:ring-gray-300',
    dark: 'text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-gray-300',
    blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300',
    red: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-400 focus:ring-red-300 ',
    green: 'text-white bg-green-700 border border-transparent enabled:hover:bg-green-400 focus:ring-green-300 ',
    purple: 'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-purple-300 ',
    gray: 'text-gray-900 bg-gray-200 border border-transparent enabled:hover:bg-gray-400 focus:ring-gray-300',
    failure: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-red-300',
    info: 'text-white bg-cyan-800 border border-transparent enabled:hover:bg-cyan-900 focus:ring-cyan-300',
    light: 'text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700',
    success: 'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',
    warning: 'text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
    cyan: 'text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
    indigo: 'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',
    lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',
    pink: 'text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',
    teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
    yellow: 'text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',
  },
  disabled: 'cursor-not-allowed opacity-50',
  isProcessing: 'cursor-wait',
  spinnerSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
  spinnerLeftPosition: {
    xs: 'left-2',
    sm: 'left-3',
    md: 'left-4',
    lg: 'left-5',
    xl: 'left-6',
  },



  label: 'l-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
  outline: {
    color: {
      default: 'text-gray-900 bg-transparent border border-gray-500 enabled:hover:text-white enabled:hover:bg-gray-500 focus:ring-slate-500 focus:ring-2 ',
      dark: 'text-slate-900 bg-transparent border border-slate-900 enabled:hover:text-white enabled:hover:bg-slate-900 focus:ring-gray-300 focus:ring-2 ',
      gray: 'text-gray-900 bg-transparent border border-gray-500 enabled:hover:text-white enabled:hover:bg-gray-500 focus:ring-slate-500 focus:ring-2 ',
      blue: 'text-blue-700 bg-transparent border border-blue-700 enabled:hover:text-white enabled:hover:bg-blue-800 focus:outline-none focus:ring-blue-300 focus:ring-2',
      green: 'text-green-700 bg-transparent border border-green-700 enabled:hover:text-white enabled:hover:bg-green-800 focus:outline-none focus:ring-green-300 focus:ring-2',
      red: 'text-red-600 bg-transparent border border-red-600 enabled:hover:text-white enabled:hover:bg-red-600 focus:outline-none focus:ring-red-300 focus:ring-2',
      purple: 'text-purple-700 bg-transparent border border-purple-700 hover:text-white enabled:hover:bg-purple-500 focus:outline-none focus:ring-red-300 focus:ring-2',
      cyan: 'text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
      yellow: 'text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',
      indigo: 'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',
      lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',
      pink: 'text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',
      teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
    },
    off: '',
    on: 'flex justify-center transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit  w-full',
    pill: {
      off: '',
      on: 'rounded-full',
    },
  },
  pill: {
    off: 'rounded-md',
    on: 'rounded-full',
  },
  size: {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-1 py-1',
    lg: 'text-base px-2.5 py-2.5',
    xl: 'text-base px-6 py-3',
  },
};

export default button