import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import Layout from "~/components/Layout";

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
        {/* <Header /> */}
        <main className="flex min-h-screen w-full flex-col bg-theme-background-light">
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
