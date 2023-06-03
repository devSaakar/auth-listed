import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/layout";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
