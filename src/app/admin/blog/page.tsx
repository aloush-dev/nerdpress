import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";
import { MdEdit } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";

export default async function AdminBlogPage() {
  const blogPosts = await api.post.getAll.query();

  const { theme } = await getTheme();
  if (!theme) return null;

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Link
          href="/admin/blog/new" 
          style={{
            backgroundColor: theme.tertiaryAccent?.hex,
            color: theme.tertiaryText?.hex,
          }}
          className="m-4 w-fit rounded-lg py-2 pl-4 font-bold"
        >
          <div className="flex items-center ">
            New Post
            <div className="pl-2 pr-4 text-2xl">
              <FiPlusCircle />
            </div>
          </div>
        </Link>
      </div>
      <ul className="w-full">
        <li
          style={{ backgroundColor: theme.cardBackground?.hex }}
          className="m-2 mx-4 grid grid-cols-5 rounded-sm p-2 font-bold"
        >
          <div className="col-span-3 mr-2 border-r-2">Title</div>
          <div className="col-span-1 mr-2 border-r-2">Date Posted</div>
          <div className="col-span-1 ml-auto ">Edit</div>
        </li>
        {blogPosts.map((post) => {
          return (
            <li
              style={{ backgroundColor: theme.cardBackground?.hex }}
              className="m-2 mx-4 grid grid-cols-5 items-center rounded-sm p-2"
              key={post.id}
            >
              <div className="col-span-3 mr-2 border-r-2">{post.title}</div>
              <div className="col-span-1 mr-2 border-r-2">
                {post.createdAt.toDateString()}
              </div>
              <button
                className="col-span-1 ml-auto flex w-fit items-center justify-center rounded-lg p-2 font-bold"
                style={{
                  backgroundColor: theme.tertiaryAccent?.hex,
                  color: theme.tertiaryText?.hex,
                }}
              >
                <MdEdit />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
