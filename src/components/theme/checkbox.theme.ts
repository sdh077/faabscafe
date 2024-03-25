import { FlowbiteCheckboxTheme } from "@/ui/Checkbox";

const checkboxTheme: FlowbiteCheckboxTheme = {
  root: {
    base: 'w-4 h-4 rounded border border-gray-300 bg-gray-100 focus:ring-offset-0 cursor-pointer',
    color: {
      default: 'text-blue-600',
      red: 'text-red-600',
      dark: 'text-gray-800',
      purple: 'text-purple-600',
      blue: 'text-blue-700',
      cyan: 'text-cyan-600',
      green: 'text-green-600',
      indigo: 'text-indigo-700',
      yellow: 'text-yellow-400',
      
      lime: 'focus:ring-lime-700 text-lime-700',
      pink: 'focus:ring-pink-600 text-pink-600',
      success: 'focus:ring-green-800 dark:ring-offset-green-800  text-green-800',
      warning: 'focus:ring-yellow-400 dark:ring-offset-yellow-400  text-yellow-400',
      gray: 'focus:ring-gray-900 dark:ring-offset-gray-900  text-gray-900',
      info: 'focus:ring-cyan-800 dark:ring-offset-gray-800  text-cyan-800',
      light: 'focus:ring-gray-900 dark:ring-offset-gray-900 text-gray-900',
      failure: 'focus:ring-red-900 dark:ring-offset-red-900 text-red-900',
      teal: 'focus:ring-teal-600 text-teal-600',
    },
  },
};

export default checkboxTheme