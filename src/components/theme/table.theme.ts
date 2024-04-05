import type { CustomFlowbiteTheme } from 'flowbite-react';
const customTableTheme: CustomFlowbiteTheme['table'] = {
  "root": {
    "base": "w-full text-left text-sm table-fixed",
    "shadow": "absolute bg-white w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    "wrapper": "relative"
  },
  "body": {
    "base": "group/body",
    "cell": {
      "base": " px-1 py-3 h-10 text-center overflow-ellipsis overflow-hidden whitespace-nowrap "
      //" group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-1 py-3 h-10 text-center overflow-ellipsis overflow-hidden whitespace-nowrap "
    }
  },
  "head": {
    "base": "group/head text-xs uppercase text-gray-700",
    "cell": {
      "base": "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg px-1 py-3 h-10 text-center bg-slate-100 cursor-pointer"
    }
  },
  "row": {
    "base": "group/row",
    "hovered": "hover:bg-gray-300",
    "striped": "odd:bg-white even:bg-gray-50"
  }
};

export default customTableTheme