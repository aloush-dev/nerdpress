import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Reconnect Reiki</title>
        <meta name="description" content="whatever you want" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen w-full flex-col bg-theme-light-bg">
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
