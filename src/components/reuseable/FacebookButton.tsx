import Link from "next/link";
import { PiFacebookLogo } from "react-icons/pi";

export function FacebookButton({
  colour,
  size,
}: {
  colour: string;
  size: string;
}) {
  return (
    <div className={`text-${colour} text-${size} p-4`}>
      <Link
        target="_blank"
        href="https://www.facebook.com/people/Reconnect-Reiki/100089819217632/"
      >
        <PiFacebookLogo />
      </Link>
    </div>
  );
}
