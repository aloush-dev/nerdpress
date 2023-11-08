import Link from "next/link";
import { api } from "../../trpc/server";
import { slugify } from "~/utils/utils";
export const dynamic = "force-dynamic"

export default async function Blog() {
  const data = await api.post.getAll.query();

  if (!data) <p>No posts to show</p>;
  return (
    <>
      <ul className="grid lg:grid-cols-4">
        {data
          ?.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((post) => {
            return (
              <li
                className="w-50 m-4 bg-[#e3cda0]
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
    </>
  );
}
