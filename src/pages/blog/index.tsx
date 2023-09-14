import Link from "next/link";
import { api } from "~/utils/api";
import { slugify } from "~/utils/utils";

export default function Blog() {
  const { data, isLoading } = api.post.getAll.useQuery();

  if (isLoading || !data) <p>Loading.....</p>;
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
