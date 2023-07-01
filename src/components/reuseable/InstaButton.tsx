import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";

export function InstaButton({
  colour="black",
  size="0",
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
        href="https://www.instagram.com/reconnectreiki2023/"
      >
        <PiInstagramLogo />
      </Link>
    </div>
  );
}
