import Image from "next/image";
import HeroImage from "../../public/siteIntroImage.jpeg";
import WebsiteConfig from "../WebsiteConfig";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="border-8 border-white ">
        <Image alt="homepage image" src={HeroImage} height={0} width={0} />
      </div>
      <p className="p-6 text-theme-text-primary-dark">
        {WebsiteConfig.siteIntroText}
      </p>
    </div>
  );
}
