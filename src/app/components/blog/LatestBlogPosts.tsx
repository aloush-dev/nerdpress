import Link from "next/link";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";
import { Heading } from "../reuseable/Heading";
import { slugify } from "~/utils/clientutils";

export async function LatestBlogPosts() {
  const data = await api.post.getAll.query();

  const { theme, websiteData } = await getTheme();

  if (!theme || !websiteData) return null;

  return (
    <div className="w-full bg-theme-header">
      <Heading
        padding="p-4"
        colour="theme-text-primary"
        text="Latest Blog Posts"
      />
      <ul className="grid justify-center md:grid-cols-3">
        {data
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .slice(0, 3)
          .map((post) => {
            return (
              <li
                style={{ backgroundColor: theme.secondaryAccent?.hex }}
                className="w-50 m-4
           p-4"
                key={post.id}
              >
                <Link href={`/blog/posts/${slugify(post.title)}`}>
                  <h3 className="pb-2 font-bold">{post.title}</h3>
                  <p className="text-sm">{post.createdAt.toDateString()}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
