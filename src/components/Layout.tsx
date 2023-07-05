import React, { type PropsWithChildren } from "react";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      )}
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};
export default Layout;
