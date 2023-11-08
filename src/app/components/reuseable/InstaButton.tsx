import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";
import { api } from "~/trpc/server";

export async function InstaButton({
  colour = "black",
  size = "0",
  padding = "p-0",
}: {
  colour?: string;
  size?: string;
  padding?: string;
}) {
  const data = await api.config.getConfig.query();

  if (!data) return null;

  return (
    <div className={`text-${colour} text-${size} ${padding} `}>
      <Link target="_blank" href={data.instagramLink}>
        <PiInstagramLogo />
      </Link>
    </div>
  );
}
