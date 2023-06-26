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
    <div className=" w-75 border-b-8 border-theme-header p-6 ">
      <h3>{title.toUpperCase()}</h3>
      <p>£{price}</p>
      <p>{description}</p>
    </div>
  );
}
