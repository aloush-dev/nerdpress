import { NewBlogPost } from "~/app/components/blog/NewBlogPost";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";

export default async function AdminBlogPage() {
  const blogPosts = await api.post.getAll.query();
  // const websiteData = await api.config.getConfig.query();
  // if (!websiteData) return null;
  // const theme = await api.config.getTheme.query({ name: websiteData.theme });

  const { theme } = await getTheme();
  if (!theme) return null;

  return (
    <>
      {/* <NewBlogPost /> */}

      <ul>
        <li
          style={{ backgroundColor: theme.cardBackground?.hex }}
          className="m-2 mx-4 grid grid-cols-4 rounded-sm p-2 font-bold"
        >
          <div className="col-span-2">Title</div>
          <div className="col-span-1">Date Posted</div>
          <div className="col-span-1">Edit</div>
        </li>
        {blogPosts.map((post) => {
          return (
            <li
              style={{ backgroundColor: theme.cardBackground?.hex }}
              className="m-2 mx-4 grid grid-cols-4 items-center rounded-sm p-2"
              key={post.id}
            >
              <div className="col-span-2">{post.title}</div>
              <div className="col-span-1">{post.createdAt.toDateString()}</div>
              <button
                className="col-span-1 rounded-lg p-2 font-bold"
                style={{
                  backgroundColor: theme.tertiaryAccent?.hex,
                  color: theme.tertiaryText?.hex,
                }}
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
