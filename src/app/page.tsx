import { ContactHero } from "~/app/components/contact/ContactHero";
import { Hero } from "~/app/components/Hero";
import { LatestBlogPosts } from "~/app/components/blog/LatestBlogPosts";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <LatestBlogPosts />
      <ContactHero />
    </div>
  );
}
