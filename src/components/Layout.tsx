import React, { type PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  gaTrackingId: string;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};
export default Layout;
