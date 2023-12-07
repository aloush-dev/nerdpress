import Link from "next/link";
import { Pacifico } from "next/font/google";
import { InstaButton } from "../reuseable/InstaButton";
import { FacebookButton } from "../reuseable/FacebookButton";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export async function Footer() {
  const navLinks = await api.config.getNavBarLinks.query();

  const { theme, websiteData } = await getTheme();

  if (!theme || !websiteData) return null;

  return (
    <footer>
      <div
        className=""
        style={{
          backgroundColor: theme.footer?.hex,
        }}
      ></div>

      <div
        style={{
          backgroundColor: theme.footer?.hex,
          color: theme.footerText?.hex,
        }}
        className=" h-footer"
      >
        <div className="flex flex-col text-center">
          <div className={`${pacifico.className} p-6 text-4xl `}>
            {websiteData.websiteName}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <InstaButton colour="[#8b635c]" size="2xl" padding="p-2" />
              <FacebookButton colour="[#8b635c]" size="2xl" padding="p-2" />
            </div>

            {websiteData.footerLinks ? (
              <div className="flex items-center justify-center text-center font-bold underline">
                {navLinks.map((link) => {
                  let thisPage = link.name;
                  if (link.name === "home") {
                    thisPage = "";
                  }
                  return (
                    <Link
                      key={link.name}
                      className="px-2"
                      href={`/${thisPage}`}
                    >{`${link.name.charAt(0).toUpperCase()}${link.name.slice(
                      1
                    )}`}</Link>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="p-2">
            © {new Date().getFullYear()} {websiteData.websiteName} | All Rights
            Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
