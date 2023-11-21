import Link from "next/link";
import { api } from "../../trpc/server";
import { getTheme, returnNotFound } from "~/utils/utils";
import { slugify } from "~/utils/clientutils";
import NotFound from "../components/NotFound";
export const dynamic = "force-dynamic";

export default async function Blog() {
  const data = await api.post.getAll.query();
  const navLinks = await api.config.getNavBarLinks.query();
  const { theme } = await getTheme();

  const found = returnNotFound("blog", navLinks);

  if (found) return <NotFound />;

  if (!theme) return null;
  if (!data) <p>No posts to show</p>;
  return (
    <>
      <ul className="grid lg:grid-cols-4">
        {data
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((post) => {
            return (
              <li
                style={{ backgroundColor: theme.secondaryAccent?.hex }}
                className="w-50 m-4 p-4"
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
    </>
  );
}
