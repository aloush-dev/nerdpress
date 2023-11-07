import { ContactHero } from "~/components/contact/ContactHero";
import { Hero } from "~/components/Hero";
import { LatestBlogPosts } from "~/components/blog/LatestBlogPosts";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <LatestBlogPosts />
      <ContactHero />
    </div>
  );
}
