import { Footer } from "~/app/components/layout/Footer";
import { Header } from "~/app/components/layout/Header";
import { headers } from "next/headers";
import "../styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./provider";
import { api } from "~/trpc/server";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const websiteData = await api.config.getConfig.query();

  return {
    title: websiteData?.websiteName,
    description: websiteData?.websiteSubTitle,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col bg-theme-background-light ">
        <TRPCReactProvider headers={headers()}>
          <Providers>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
