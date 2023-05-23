import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


// Doesn't work with turbo, remove the --turbo flag on run dev before using next-auth

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    session:{
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {        
                // If no error and we have user data, return it
                const {email,username} = credentials as {email:string,username:string}
                if (email !== 'jsmith' || username !== '1234') {
                    return null
                }
                // Return null if user data could not be retrieved
                return {
                    id: '1',
                    email: 'doso@gmail.com',
                    name: 'Nathan'
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        })
      // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // verify if user exist and create if account.provider !== credentials
            console.log(user, account, profile, email, credentials)
          return true
        },
        async session({ session, user, token }) {
            console.log(session, user, token)
            return session
        },
    },
    pages: {
        signIn: '/login',
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }