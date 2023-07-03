import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/reuseable/Button";
import { Heading } from "~/components/reuseable/Heading";
import { Input } from "~/components/reuseable/Input";
import { api } from "~/utils/api";

export default function Profile() {
  const session = useSession();
  const user = session.data?.user;
  const updateProfile = api.userProfile.updateProfile.useMutation({
    onSuccess: () => {
      return;
    },
  });

  const handleUpdate = () => {
    updateProfile.mutate({
      name: userName,
    });
  };
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user?.name) {
      setUserName(user?.name);
    }
  }, [user]);

  if (session.status !== "authenticated") return null;

  return (
    <>
      <Heading text="Profile" />
      Hey {user?.name}
      <div className="mx-auto flex flex-col justify-center">
        <Input
          placeholder="Your Name"
          customClass=""
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <Button text="Update" onClick={handleUpdate} />
        <Button
          onClick={() => {
            void signOut();
          }}
          text="Sign Out"
        />
      </div>
    </>
  );
}
