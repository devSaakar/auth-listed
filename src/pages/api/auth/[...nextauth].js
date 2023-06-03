import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "2641152573-jll4gpbqs8hrvrqpjhar8bbefblspm74.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
