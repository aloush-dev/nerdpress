import { signIn, signOut, useSession } from "next-auth/react";
import AdminOnly from "~/components/reuseable/AdminOnly";
import { AdminPanelButtons } from "~/components/reuseable/AdminPanelButtons";
import { Button } from "~/components/reuseable/Button";
import { Heading } from "~/components/reuseable/Heading";

export default function AdminPanel() {
  const session = useSession();
  const user = session.data?.user;

  if (!user)
    return (
      <div className="flex justify-center p-6">
        <Button
          onClick={() => {
            void signIn();
          }}
          text="Sign In"
        />
      </div>
    );

  return (
    <div className="flex flex-col justify-center md:max-w-4xl">
      <AdminOnly>
        <Heading text="Admin Panel" />

        <AdminPanelButtons />

        <div className="flex justify-center p-8">
          {user != null ? (
            <Button
              onClick={() => {
                void signOut();
              }}
              text="Sign Out"
            />
          ) : (
            ""
          )}
        </div>
      </AdminOnly>
    </div>
  );
}
