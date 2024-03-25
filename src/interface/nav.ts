export interface NavItem {
    name: string;
    link: string
}
export type Navs = NavItem & {
    children?: NavItem[]
}