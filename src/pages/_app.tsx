import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Layout from "~/components/Layout";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>Reconnect Reiki</title>
          <meta name="description" content="Reconnect Reiki by Caroline" />
          <link rel="icon" href="/rrfavicon.ico" />
        </Head>
        <main className="min-h-screen  bg-theme-background-light ">
          <Component {...pageProps} />
          <Analytics />
        </main>
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
