
import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/app/libs/prismadb"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error('Invalid credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import NextAuth, { AuthOptions } from 'next-auth';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// import Credentials from 'next-auth/providers/credentials';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import { compare } from 'bcrypt';
// import prismadb from '@/app/libs/prismadb';

// export const authOptions: AuthOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID || '',
//       clientSecret: process.env.GITHUB_SECRET || '',
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID || '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
//     }),
//     Credentials({
//       id: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'text',
//         },
//         password: {
//           label: 'Password',
//           type: 'passord'
//         }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Email and password required');
//         }

//         const user = await prismadb.user.findUnique({
//           where: {
//             email: credentials.email
//           }
//         });

//         if (!user || !user.hashedPassword) {
//           throw new Error('Email does not exist');
//         }

//         const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

//         if (!isCorrectPassword) {
//           throw new Error('Incorrect password');
//         }

//         return user;
//       }
//     })
//   ],
//   pages: {
//     signIn: '/auth'
//   },
//   debug: process.env.NODE_ENV === 'development',
//   adapter: PrismaAdapter(prismadb),
//   session: { strategy: 'jwt' },
//   jwt: {
//     secret: process.env.NEXTAUTH_JWT_SECRET,
//   },
//   secret: process.env.NEXTAUTH_SECRET
// };

// export default NextAuth(authOptions);

