import { useRouter } from "next/router";
import { api } from "~/utils/api";

export default function SingleBlogPost() {
  const { asPath } = useRouter();
  // const cleanPath = asPath.split("#")[0].split("?")[0];
  // const { data } = api.post.getPostById.useQuery({ postId: cleanPath });


  return <h1>Hello</h1>;
}
