import Image from "next/image";
import HeroImage from "../../public/thehealingroom.jpeg";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
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
