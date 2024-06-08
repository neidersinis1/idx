import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        console.log(session)
        if (!session?.user?.email) {
            return console.log('getCurrentUser no trajo')
                ;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        console.log(error)
        return null;
    }
};

export default getCurrentUser;
