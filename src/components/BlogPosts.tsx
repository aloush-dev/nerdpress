import Link from "next/link";
import { api } from "~/utils/api";
import { slugify } from "~/utils/utils";

export function BlogPosts() {
  const { data } = api.post.getAll.useQuery();

  return (
    <>
      <h2 className="p-8 text-4xl font-black">Latest Blog Posts</h2>
      <ul className="border">
        {data?.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/posts/${slugify(post.title)}`}>
              <h3>{post.title}</h3>
              <p>{post.id}</p>
              <p>{post.createdAt.toDateString()}</p>
              <p>{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
