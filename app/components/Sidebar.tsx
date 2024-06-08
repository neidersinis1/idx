"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { HiChatAlt } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi'
import { twMerge } from "tailwind-merge";
import SidebarItem from "./SidebarItem";
import Box from "./Box";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname === '/',
            href: '/'
        },
        {
            icon: HiChatAlt,
            label: 'Chat',
            active: pathname === '/messenger/users',
            href: '/messenger/users'
        },
        {
            icon: HiUsers,
            label: 'Users',
            active: pathname === '/users',
            href: '/users'
        },
        {
            icon: BiSearch,
            label: 'Search',
            href: '/search',
            active: pathname === '/search'
        },
    ], [pathname]);

    return (
        <div
            className={twMerge(`
        flex 
        h-full
        `,
                // player.activeId && 'h-[calc(100%-80px)]'
            )}
        >
            <div
                className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
            >
                <Box>
                    <div className="flex flex-col gap-y-2 px-5 py-2">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    {/* <Library songs={songs} /> */}
                </Box>
            </div>
            <main className="h-full w-full flex-1 md:py-2 md:pr-2 md:rounded overflow-y-auto">
                {children}
            </main>
        </div>
    );
}

export default Sidebar;
