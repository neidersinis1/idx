"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { HiChatAlt } from 'react-icons/hi'
import { HiUsers } from 'react-icons/hi'
import { twMerge } from "tailwind-merge";
import SidebarItemMobile from "./SidebarItemMobile";
import Box from "./Box";

// interface SidebarProps {
//   children: React.ReactNode;
// }

const SidebarMobile = () => {
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
          md:hidden 
          flex 
          flex-col 
          gap-y-2 
          text-black 
          h-full 
          w-[300px] 
          p-2
        "
            >
                <Box>
                    <div className="flex flex-col gap-y-2 px-5 py-2">
                        {routes.map((item) => (
                            <SidebarItemMobile key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default SidebarMobile;
