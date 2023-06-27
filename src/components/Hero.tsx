import Image from "next/image";
import HeroImage from "../../public/crystals-table.jpg";

export function Hero() {
  return (
    <div className="">
      <Image
        alt="homepage image"
        src={HeroImage}
        height={0}
        width={500}
        style={{ width: '50%', paddingTop: '50%' }}
      />
    </div>
  );
}
