'use client';

import { Fragment, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoClose, IoTrash } from 'react-icons/io5'
import useActiveList from '@/app/hooks/useActiveList';
import Avatar from '@/app/components/Avatar';
import ConfirmModal from '../(site)/components/ConfirmModal';
import Button from './Button';
// import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SidebarMobile from './SidebarMobile.tsx';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const { members } = useActiveList();

    const router = useRouter();
    const { data: user } = useSession()

    const handleLogout = async () => {
        signOut()
        router.push('/')
    }

    // if (!visible) {
    //       return null;
    //     }


    return (
        <>
            <ConfirmModal
                isOpen={confirmOpen}
                onClose={() => setConfirmOpen(false)}
            />
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-2 flex max-w-xs">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-neutral-200 py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-800 focus:ring-offset-2"
                                                            onClick={onClose}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <IoClose size={24} aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className="flex flex-col items-center">
                                                    <div className="mb-2">
                                                        <Avatar />
                                                    </div>
                                                    <div>
                                                        <SidebarMobile />
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {/* {statusText} */}
                                                    </div>

                                                    <div className="md:hidden flex flex-col justify-between items-center gap-x-4">
                                                        {user ? (
                                                            <div className="flex flex-col gap-x-4 items-center">
                                                                <Button
                                                                    onClick={handleLogout}
                                                                    className="
                                      bg-sky-700 
                                      bg-gradient-to-b 
                                      from-sky-900  
                                      text-white
                                      px-6
                                      py-2
                                      m-2
                                    "
                                                                >
                                                                    Cerrar Seccion
                                                                </Button>
                                                                {/* <Button
                                    onClick={() => router.push('/account')}
                                    className="
                                     bg-sky-700 
                                      bg-gradient-to-b 
                                      from-sky-900  
                                      text-white
                                      px-6
                                      py-2
                                      m-2
                                    "
                                  >
                                    <FaUserAlt />
                                  </Button> */}
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div>
                                                                    <Button
                                                                        onClick={() => router.push('/auth')}
                                                                        className="
                                        bg-sky-700 
                                        bg-gradient-to-b 
                                        from-sky-900  
                                        text-white
                                        w-52
                                        font-medium
                                        px-6
                                        py-2
                                        m-2
                                      "
                                                                    >
                                                                        Iniciar Seccion
                                                                    </Button>
                                                                </div>
                                                                <div>
                                                                    <Button
                                                                        onClick={() => router.push('/auth')}
                                                                        className="
                                        bg-sky-700 
                                        bg-gradient-to-b 
                                        from-sky-900 
                                        text-white
                                        w-52
                                        font-medium
                                        px-6 py-2 m-2
                                      "
                                                                    >
                                                                        Registrarse
                                                                    </Button>
                                                                </div>

                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* <div className="flex gap-10 my-8">
                            <div onClick={() => setConfirmOpen(true)} className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75">
                              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                                <IoTrash size={20} />
                              </div>
                              <div className="text-sm font-light text-neutral-600">
                                Delete
                              </div>
                            </div>
                          </div> */}
                                                <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0">
                                                    <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>

                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default MobileMenu;

// import React from "react";

// interface MobileMenuProps {
//   visible?: boolean;
// }

// const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
//   if (!visible) {
//     return null;
//   }

//   return (
//     <div className="bg-neutrla-900 w-30 absolute top-20 z-30 right-2 py-5 flex-col rounded-lg border-2 boder-neutral-800 flex">
//       <div className="flex flex-col gap-4">
//         <div className="px-3 text-center text-white hover:underline">Iniciar Seccion</div>
//         <div className="px-3 text-center text-white hover:underline">Cerrar seccion</div>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;