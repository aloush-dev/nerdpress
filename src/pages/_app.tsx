import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Head from "next/head";
import Layout from "~/components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const gaTrackingId = process.env.GA_TRACKING_ID || "";

  return (
    <SessionProvider session={session}>
      <Layout gaTrackingId={gaTrackingId}>
        <Head>
          <title>Reconnect Reiki</title>
          <meta name="description" content="Reconnect Reiki by Caroline" />
          <link rel="icon" href="/rrfavicon.ico" />
        </Head>
        <div className="bg-theme-background-light">
        <main className="container flex min-h-screen w-full flex-col bg-theme-background-light md:mx-auto md:max-w-2xl">
          <Component {...pageProps} />
        </main>

        </div>
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
