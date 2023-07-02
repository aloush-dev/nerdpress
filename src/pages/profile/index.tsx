import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "~/components/reuseable/Button";
import { Heading } from "~/components/reuseable/Heading";
import { Input } from "~/components/reuseable/Input";

export default function Profile() {
  const session = useSession();
  const user = session.data?.user;

  const [userName, setUserName] = useState("");

  if (!user) return null;
  return (
    <>
      <Heading text="Profile" />
      <div className="mx-auto flex flex-col justify-center">
        <Input
          placeholder="Your Name"
          customClass=""
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <Button text="Update" />
      </div>
    </>
  );
}
