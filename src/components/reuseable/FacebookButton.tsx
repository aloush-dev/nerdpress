import Link from "next/link";
import { PiFacebookLogo } from "react-icons/pi";
import WebsiteConfig from "../../WebsiteConfig";

export function FacebookButton({
  colour = "black",
  size = "0",
  padding = "p-0",
}: {
  colour?: string;
  size?: string;
  padding?: string;
}) {
  return (
    <div className={`text-${colour} text-${size} ${padding} `}>
      <Link target="_blank" href={WebsiteConfig.socialLinks.facebook}>
        <PiFacebookLogo />
      </Link>
    </div>
  );
}
