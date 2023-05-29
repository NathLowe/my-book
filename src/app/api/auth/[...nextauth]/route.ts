import { getClient } from "@/datas/apollo";
import { identifyUser } from "@/datas/functions";
import {
  GET_USERS,
  UsersResult,
  UsersVariables,
} from "@/queries/user/GetUsers";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// To make it work with Turbopack
import crypto from "node:crypto";
global.crypto ??= crypto;

export interface CredentialsType {
  username: string;
  email: string;
}

const client = new ApolloClient({
  uri: process.env.GRAPHQL_DATABASE,
  cache: new InMemoryCache(),
});

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Get all the users and filter to find the right one
        let { data } = await client.query<UsersResult, UsersVariables>({
          query: GET_USERS,
          variables: {
            options: {
              paginate: {
                limit: 30,
                page: 1,
              },
            },
          },
        });

        const user = identifyUser(data.users, credentials);

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // The middleware will get the language automatically
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, user, token }) {
      session.user.id = token.sub
      return session;
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
