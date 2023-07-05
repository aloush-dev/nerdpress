import React, { type PropsWithChildren } from "react";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  gaTrackingId: string;
}

const Layout = ({ children, gaTrackingId }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      {gaTrackingId && <GoogleAnalytics GA_TRACKING_ID={gaTrackingId} />}
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};
export default Layout;
