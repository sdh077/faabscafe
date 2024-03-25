import { FlowbiteDropdownTheme } from "@/ui/Dropdown";
const dropdownTheme: FlowbiteDropdownTheme = {
    "arrowIcon": "h-4 w-4",
    "content": "py-1 focus:outline-none ",
    "floating": {
        "animation": "transition-opacity",
        "arrow": {
            "base": "absolute z-10 h-2 w-2 rotate-45",
            "style": {
                "dark": "bg-gray-900 ",
                "light": "bg-white",
                "auto": "bg-white dark:bg-gray-700"
            },
            "placement": "-4px"
        },
        "base": "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
        "content": "py-1 text-sm text-gray-700",
        "divider": "my-1 h-px bg-gray-100",
        "header": "block py-2 px-4 text-sm text-gray-700",
        "hidden": "invisible opacity-0 ",
        "item": {
            "container": "",
            "base": "py-2 px-4 text-sm text-left text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100",
            "icon": "h-4 w-4"
        },
        "style": {
            "dark": "bg-gray-900 text-white",
            "light": "border border-gray-100 bg-white text-gray-900",
            "auto": "border border-gray-100 bg-white text-gray-900"
        },
        "target": "block w-full min-w-20 text-gray-900 bg-transparent border border-gray-500 enabled:hover:bg-transparent"
    },
    "inlineWrapper": "flex items-center"
};

export default dropdownTheme