import { NewFaq } from "~/app/components/admin/NewFaq";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";

export default async function AdminFaqsPage() {
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  const theme = await api.config.getTheme.query({ name: websiteData.theme });
  return (
    <>
      <div
        style={{
          backgroundColor: theme.primaryAccent?.hex,
          color: theme.primaryText?.hex,
        }}
        className=" text-center "
      >
        <Heading text="New FAQ" colour="theme-text-1" />
        <NewFaq />
      </div>
    </>
  );
}
