import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function Footer() {
  return (
    <div className="bg-[#83948e] text-[#fbf2e4]">
      <div className="flex flex-col text-center">
        <div className={`${pacifico.className} p-6 text-4xl `}>Reconnect Reiki</div>
        <div className="flex flex-col font-bold underline">
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About Me</Link>
          <Link href={`/services`}>Services</Link>
          <Link href={`/faqs`}>FAQs</Link>
        </div>

        <div className="p-2">
          © {new Date().getFullYear()}, Reconnect Reiki | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
