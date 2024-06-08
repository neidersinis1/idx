"use client";

import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { useMemo, useState } from "react";
import Link from "next/link";
// import { Conversation, User } from "@prisma/client";

// import useOtherUser from "@/app/hooks/useOtherUser";
import useActiveList from "@/app/hooks/useActiveList";

import Avatar from "@/app/components/Avatar";
// import AvatarGroup from "@/app/components/AvatarGroup";
import ProfileDrawer from "./ProfileDrawer";
import { useRouter } from "next/navigation";

// interface HeaderProps {
//   conversation: Conversation & {
//     users: User[]
//   }
// }

const HeaderChat = () => {
    //   const otherUser = useOtherUser(conversation);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();

    const { members } = useActiveList();
    //   const isActive = members.indexOf(otherUser?.email!) !== -1;
    //   const statusText = useMemo(() => {
    //     if (conversation.isGroup) {
    //       return `${conversation.users.length} members`;
    //     }

    //     return isActive ? 'Active' : 'Offline'
    //   }, [conversation, isActive]);

    return (
        <>
            <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <div
                className="
        //bg-sky-500 
        bg-gradient-to-b 
        from-sky-800
        w-full 
        flex 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
        md:rounded
      "
            >
                <div className="flex gap-3 items-center">
                    {/* <Link */}
                    <button
                        onClick={() => router.back()}
                        // href="/"
                        className="
            rounded-full 
            bg-black 
            lg:hidden 
            block 
            text-sky-200 
            hover:text-sky-100 
            transition 
            cursor-pointer
          "
                    >
                        <HiChevronLeft size={32} />
                    </button>
                    {/* </Link> */}
                    {/* {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )} */}
                    <div className="flex flex-col">
                        {/* <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500">
            {statusText}
          </div> */}
                    </div>
                </div>
                <HiEllipsisHorizontal
                    size={32}
                    onClick={() => setDrawerOpen(true)}
                    className="
          text-sky-200
          cursor-pointer
          hover:text-sky-100
          transition
        "
                />
            </div>
        </>
    );
};

export default HeaderChat;
