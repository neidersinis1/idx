"use client";

import { useCallback, useState } from 'react';
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { HiMenu } from 'react-icons/hi'
import Logo from './Logo'
// import { BiSearch } from "react-icons/bi";
import MobileMenu from './MobileMenu';
import Button from "./Button";
import Link from 'next/link';
// import ConfirmModal from '@/app/(site)/components/ConfirModal';
import { useSession, signOut } from 'next-auth/react';


interface HeaderProps {
    // children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    // const [ShowMobileMenu, setShowMobileMenu] = useState(false)
    const { data: user } = useSession()
    // console.log('user', user)
    // const user = 1

    // const toggleMobileMenu = useCallback(() => {
    //   setShowMobileMenu((current) => !current);
    // }, []);



    const router = useRouter();

    const handleLogout = async () => {
        signOut()
        router.push('/')
    }

    return (
        <>
            <MobileMenu
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
            />
            <div
                className={twMerge(`
        h-fit 
        bg-gradient-to-b 
        from-sky-800 
        px-4
        md:rounded
        `,
                    className
                )}>
                <div className="w-full mb-4 flex items-center justify-between">
                    <div className="hidden md:flex gap-x-2 p-2 items-center">
                        <button
                            onClick={() => router.back()}
                            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
                        >
                            <RxCaretLeft className="text-white" size={35} />
                        </button>
                        <button
                            onClick={() => router.forward()}
                            className="
              rounded-full 
              bg-black 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
            "
                        >
                            <RxCaretRight className="text-white" size={35} />
                        </button>
                    </div>
                    <div className="flex w-full justify-between  md:hidden gap-x-2 items-center">
                        <div
                            className='
              bg-transparent
              -ml-5 
              flex
              items-center
              justify-center
              cursor-pointer
              select-none
            '
                        >
                            <Link href={'/'}>
                                <Logo />
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:hidden gap-x-2 items-center">
                        <button
                            onClick={() => setConfirmOpen(true)}
                            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              transition
              select-none
            '
                        >
                            <HiMenu className='text-black select-none' size={20} />
                            {/* <MobileMenu isOpen={ShowMobileMenu} onClose={() => setConfirmOpen(false)} /> */}
                        </button>
                    </div>
                    <div className="hidden md:flex justify-between items-center gap-x-4">
                        {user ? (
                            <div className="flex gap-x-4 items-center">
                                <Button
                                    onClick={handleLogout}
                                    className="bg-white px-6 py-2"
                                >
                                    Logout
                                </Button>
                                <Button
                                    onClick={() => router.push('/account')}
                                    className="bg-white"
                                >
                                    <FaUserAlt />
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <Button
                                        onClick={() => router.push('/auth')}
                                        className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                                    >
                                        Sign up
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        onClick={() => router.push('/auth')}
                                        className="bg-white px-6 py-2"
                                    >
                                        Log in
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* {children} */}
            </div>
        </>
    );
}

export default Header;
