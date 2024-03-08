import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const hardcodedUser = {
          username: process.env.HARD_USERNAME,
          password: process.env.HARD_PASSWORD,
          id: '1'
        }
        const user =
          hardcodedUser.username === credentials?.username &&
          hardcodedUser.password === credentials?.password
            ? hardcodedUser
            : null

        return user
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60
  }
})

export { handler as GET, handler as POST }
