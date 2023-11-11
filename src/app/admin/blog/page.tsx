import { NewBlogPost } from "~/app/components/blog/NewBlogPost";
import { api } from "~/trpc/server";

export default async function AdminBlogPage() {
  const blogPosts = await api.post.getAll.query();
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  const theme = await api.config.getTheme.query({ name: websiteData.theme });

  return (
    <>
      {/* <NewBlogPost /> */}

      <ul>
        <li
          style={{ backgroundColor: theme.cardBackground?.hex }}
          className="m-2 mx-4 grid grid-cols-3 rounded-sm p-2 font-bold"
        >
          <div>Title</div>
          <div>Date Posted</div>
          <div>Edit</div>
        </li>
        {blogPosts.map((post) => {
          return (
            <li
              style={{ backgroundColor: theme.cardBackground?.hex }}
              className="m-2 mx-4 grid grid-cols-3 items-center rounded-sm p-2"
              key={post.id}
            >
              <div>{post.title}</div>
              <div>{post.createdAt.toDateString()}</div>
              <button
                className="w-2/4 rounded-lg p-2"
                style={{ backgroundColor: theme.tertiaryAccent?.hex }}
              >
                edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
