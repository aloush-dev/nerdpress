import Image from "next/image";
import HeroImage from "../../../public/homeheroimage.jpeg";
import { api } from "~/trpc/server";

export async function Hero() {
  const websiteData = await api.config.getConfig.query();

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-theme-text-2">
      <h2 className="p-8 text-center text-4xl font-black ">
        Hello and welcome to {websiteData?.websiteName}.
      </h2>
      <div className="border-8 border-white ">
        <Image alt="homepage image" src={HeroImage} height={0} width={0} />
      </div>
      <p className="p-6">
        I’m so glad you’ve found my little space, here on the internet. Dive in
        and learn more about Reiki, and book a treatment with me. I look forward
        to welcoming you to Reconnect Reiki.
      </p>
    </div>
  );
}
