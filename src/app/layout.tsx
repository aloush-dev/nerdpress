import { Footer } from "~/app/components/layout/Footer";
import { Header } from "~/app/components/layout/Header";
import { headers } from "next/headers";
import "../styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "../providers/providers";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const websiteData = await api.config.getConfig.query();

  return {
    title: websiteData?.websiteName,
    description: websiteData?.websiteSubTitle,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getTheme();

  if (!theme) return null;
  return (
    <html lang="en">
      <body style={{ backgroundColor: theme.background?.hex }}>
        <TRPCReactProvider headers={headers()}>
          <Providers>
            <Header />
            <div className="min-h-screen-view">{children}</div>
            <Footer />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
