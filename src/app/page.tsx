import { ContactHero } from "~/app/components/contact/ContactHero";
import { Hero } from "~/app/components/layout/Hero";
import { LatestBlogPosts } from "~/app/components/blog/LatestBlogPosts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <LatestBlogPosts />
      <ContactHero />
    </div>
  );
}
