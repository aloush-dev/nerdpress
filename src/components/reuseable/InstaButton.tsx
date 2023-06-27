import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";

export function InstaButton({
  colour,
  size,
}: {
  colour: string;
  size: string;
}) {
  return (
    <div className={`text-${colour} text-${size} p-4`}>
      <Link href="https://www.instagram.com/reconnectreiki2023/">
        <PiInstagramLogo />
      </Link>
    </div>
  );
}
