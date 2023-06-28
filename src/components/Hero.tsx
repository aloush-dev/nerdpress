import Image from "next/image";
import HeroImage from "../../public/salt-lamp.jpg";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <Image
        alt="homepage image"
        src={HeroImage}
        height={400}
        width={0}
      />
      <p className="p-6">
        Quia modi perspiciatis sed dignissimos impedit doloribus numquam. Quos
        qui laborum autem voluptates similique ducimus laudantium. Asperiores et
        rerum ea ipsum voluptatibus perspiciatis. Quibusdam dolore quas
        similique rerum. Dolores quae quas consequuntur.
      </p>
    </div>
  );
}
