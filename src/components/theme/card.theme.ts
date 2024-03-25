import { CustomFlowbiteTheme, FlowbiteCardTheme } from "flowbite-react";

const cardTheme: CustomFlowbiteTheme['card'] = {
    root: {
        base: 'flex border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
        children: 'flex h-full flex-col justify-center gap-4 p-6',
        horizontal: {
            off: 'flex-col',
            on: 'flex-col md:max-w-xl md:flex-row',
        },
        href: '',
    },
    img: {
        base: '',
        horizontal: {
            off: '',
            on: 'h-48 w-full object-cover md:h-auto md:w-48 md:rounded-none',
        },
    },
};

export default cardTheme