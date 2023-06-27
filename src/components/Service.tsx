import { useSession } from "next-auth/react";

export function Service({
  title,
  price,
  description,
}: {
  title: string;
  price: number;
  description: string;
}) {
  const session = useSession();

  console.log(session.data?.user.admin);

  return (
    <div className="w-80 bg-[#83948e] p-6 text-[#fbf2e4]">
      <h3>{title.toUpperCase()}</h3>
      <p>£{price}</p>
      <p>{description}</p>
    </div>
  );
}
