import { ContactForm } from "~/components/ContactForm";
import { Hero } from "~/components/Hero";
import { LatestBlogPosts } from "~/components/blog/LatestBlogPosts";
import { FacebookButton } from "~/components/reuseable/FacebookButton";
import { InstaButton } from "~/components/reuseable/InstaButton";

export default function Home() {
  return (
    <div className="flex flex-col text-theme-text-2">
      <h2 className="p-8 text-center text-4xl font-black">
        Hello and welcome to Reconnect Reiki.
      </h2>
      <Hero />
      <LatestBlogPosts />
      <div className="flex justify-center">
        <InstaButton colour="[#8b635c]" size="4xl" />
        <FacebookButton colour="[#8b635c]" size="4xl" />
      </div>
      <ContactForm />
    </div>
  );
}
