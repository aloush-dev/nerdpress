import Link from "next/link";
import { PiFacebookLogo } from "react-icons/pi";

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
      <Link
        target="_blank"
        href="https://www.facebook.com/people/Reconnect-Reiki/100089819217632/"
      >
        <PiFacebookLogo />
      </Link>
    </div>
  );
}
