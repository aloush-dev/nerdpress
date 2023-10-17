import { ContactHero } from "~/components/ContactHero";
import { Hero } from "~/components/Hero";
import { LatestBlogPosts } from "~/components/blog/LatestBlogPosts";
import WebsiteConfig from "../WebsiteConfig";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h2 className="p-8 text-center text-4xl font-black text-theme-text-primary-dark">
        Hello and welcome to {WebsiteConfig.siteName}.
      </h2>
      <Hero />
      <div className="">
        <LatestBlogPosts />
        <ContactHero />
      </div>
    </div>
  );
}
