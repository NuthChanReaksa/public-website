export interface MenuItem {
    name: string;
    path: string;
    active: boolean;
}

export const MenuList: MenuItem[] = [
    {
        name: "ABOUT",
        path: "/about",
        active: false,
    },
    {
        name: "ACADEMIC",
        path: "/academic",
        active: false,
    },
    {
        name: "ADMISSION",
        path: "/admission",
        active: false,
    },
    {
        name: "SHORT COURSE",
        path: "https://istad.co/page/course",
        active: false,
    },
    {
        name: "SCHOLARSHIP",
        path: "/scholarship",
        active: false,
    },
    {
        name: "NEW & EVENT",
        path: "/newsEvent",
        active: false,
    },
    {
        name: "LEARNING PORTAL",
        path: "/learningPortal",
        active: false,
    }
];
