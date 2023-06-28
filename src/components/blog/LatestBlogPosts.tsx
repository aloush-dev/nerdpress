import Link from "next/link";
import { api } from "~/utils/api";
import { slugify } from "~/utils/utils";
import { Heading } from "../reuseable/Heading";

export function LatestBlogPosts() {
  const { data } = api.post.getAll.useQuery();

  return (
    <div className="bg-[#83948e] text-[#fbf2e4]">
      <Heading text="Latest Blog Posts" />
      <ul className="flex flex-wrap justify-center">
        {data?.map((post) => (
          <li
            className="m-4 w-40 bg-[#e3cda0]
           p-4"
            key={post.id}
          >
            <Link href={`/blog/posts/${slugify(post.title)}`}>
              <h3 className="pb-2 font-bold">{post.title}</h3>
              <p className="text-sm">{post.createdAt.toDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
