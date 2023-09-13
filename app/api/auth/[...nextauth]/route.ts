import startDB from "@/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserSchema from "@/models/user";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        await startDB();

        console.log(username);
        console.log(password);

        const user = await UserSchema.findOne({ username });
        if (!user) {
          console.log("User not found");
          throw Error("Incorrect username or password.");
        }
        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
          console.log("Password not found");
          throw Error("Incorrect username or password.");
        }

        return {
          username: user.username,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      params.token.id = params.user.id;
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
