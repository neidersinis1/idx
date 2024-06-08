import { getServerSession } from "next-auth";

import { authOptions } from "@/app/messenger/api/auth/[...nextauth]/route";

export default async function getSession() {
    return await getServerSession(authOptions);
}
