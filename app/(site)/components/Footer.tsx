"use client";
import { HiHome } from "react-icons/hi";
import { HiChatAlt } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
// import SidebarItem from "@/components/SidebarItem";
// import { usePathname } from "next/navigation";
// import { useMemo } from 'react'

// import { useRouter } from 'next/router';

interface HeaderProps {
    className?: string;
}

const Footer: React.FC<HeaderProps> = ({ className }) => {
    // const pathname = usePathname();

    // const routes = useMemo(() => [
    //   {
    //     icon: HiUsers,
    //     label: 'users',
    //     active: pathname === '/users',
    //     href: '/users'
    //   },
    //   {
    //     icon: HiHome,
    //     label: 'Home',
    //     href: '/',
    //     active: pathname !== '/search'
    //   },
    //   {
    //     icon: HiChatAlt,
    //     label: 'Chat',
    //     href: '/chat',
    //     active: pathname === '/chat'
    //   },
    // ], [pathname]);

    return (
        <div
            className={twMerge(
                `
        bg-black
        h-fit 
        bg-gradient-to-b
        from-sky-800 
        p-6
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        md:hidden
        lg:hidden
      `,
                className
            )}
        >
            <div
                className="
            flex 
            w-full  
            gap-x-2 
            items-center
            justify-between
          "
            >
                <button
                    onClick={() => { }}
                    className="
            bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            "
                >
                    <Link href={"users"}>
                        <HiUsers className="text-black select-none" size={20} />
                    </Link>
                </button>
                <button
                    onClick={() => { }}
                    className="
              bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            "
                >
                    <Link href={"/"}>
                        <HiHome className="text-black select-none" size={20} />
                    </Link>
                </button>
                <button
                    onClick={() => { }}
                    className="
              bg-white
              rounded-full
              p-2
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
              select-none
            "
                >
                    <Link href={"chat"}>
                        <HiChatAlt className="text-black select-none" size={20} />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Footer;
