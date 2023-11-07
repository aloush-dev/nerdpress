import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import type { Metadata } from "next";
import { headers } from "next/headers";
import "../styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { Providers } from "./provider";
import { api } from "~/trpc/server";

let websiteData = await api.config.getConfig.query();

if (!websiteData) {
  websiteData = {
    id: 1,
    websiteName: "",
    websiteSubTitle: "",
    backgroundColour: "#FFFFFF",
    headerColour: "#000000",
    footerColour: "#000000",
    textColour: "#333333",
    instagramLink: "",
    facebookLink: "",
    footerLinks: false,
  };
}

export const metadata: Metadata = {
  title: `${websiteData.websiteName}`,
  description: `${websiteData.websiteSubTitle as string}`,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

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

            {children}

            <Footer />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
