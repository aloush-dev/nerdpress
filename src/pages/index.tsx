import { ContactHero } from "~/components/ContactHero";
import { Hero } from "~/components/Hero";
import { LatestBlogPosts } from "~/components/blog/LatestBlogPosts";

export default function Home() {
  return (
    <div className="container flex flex-col text-theme-text-2">
      <h2 className="p-8 text-center text-4xl font-black">
        Hello and welcome to Reconnect Reiki.
      </h2>
      <Hero />
      <LatestBlogPosts />
      <ContactHero />
    </div>
  );
}
