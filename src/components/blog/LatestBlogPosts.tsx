import Link from "next/link";
import { api } from "~/utils/api";
import { slugify } from "~/utils/utils";
import { Heading } from "../reuseable/Heading";

export function LatestBlogPosts() {
  const { data } = api.post.getAll.useQuery();

  return (
    <>
      <Heading text="Latest Blog Posts" />
      <ul>
        {data?.map((post) => (
          <li
            className="w-40 p-4 m-4
           bg-[#e3cda0]"
            key={post.id}
          >
            <Link href={`/blog/posts/${slugify(post.title)}`}>
              <h3>{post.title}</h3>
              <p>{post.createdAt.toDateString()}</p>
              <p>{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
