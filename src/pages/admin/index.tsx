import { signIn, signOut, useSession } from "next-auth/react";
import { NewFaq } from "~/components/NewFaq";
import { NewService } from "~/components/NewService";
import { NewBlogPost } from "~/components/blog/NewBlogPost";
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

  //if (!user.admin) return <p>Access Denied</p>;

  return (
    <>
      <Heading text="Admin Panel" />

      <div className="bg-theme-green text-center text-theme-text-light">
        New Blog Post
        <NewBlogPost />
      </div>

      <div>
        New Service
        <NewService />
      </div>

      <div>
        New Faq
        <NewFaq />
      </div>

      <div>
        {user != null ? (
          <Button
            onClick={() => {
              void signOut();
            }}
            text="Sign Out"
          />
        ) : (
          <Button
            onClick={() => {
              void signIn();
            }}
            text="Sign In"
          />
        )}
      </div>
    </>
  );
}
