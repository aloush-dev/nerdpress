import Link from "next/link";
import { Pacifico } from "next/font/google";
import { InstaButton } from "./reuseable/InstaButton";
import { FacebookButton } from "./reuseable/FacebookButton";
import WebsiteConfig from "../WebsiteConfig";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  return (
    <div className="bg-theme-footer text-theme-text-primary">
      <div className="flex flex-col text-center">
        <div className={`${pacifico.className} p-6 text-4xl `}>
          {WebsiteConfig.siteName}
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col font-bold underline">
            <Link href={`/`}>Home</Link>
            <Link href={`/about`}>About Me</Link>
            <Link href={`/services`}>Services</Link>
            <Link href={`/faqs`}>FAQs</Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            {WebsiteConfig.socialLinks.instagram ? (
              <InstaButton
                colour="theme-text-primary"
                size="2xl"
                padding="p-2"
              />
            ) : (
              ""
            )}
            {WebsiteConfig.socialLinks.facebook ? (
              <FacebookButton
                colour="theme-text-primary"
                size="2xl"
                padding="p-2"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="p-2">
          © {new Date().getFullYear()}, {WebsiteConfig.siteName} | All Rights
          Reserved
        </div>
      </div>
    </div>
  );
}
