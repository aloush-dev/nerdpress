import { NewFaq } from "~/app/components/admin/NewFaq";
import { Heading } from "~/app/components/reuseable/Heading";
import InteractiveList from "~/app/components/reuseable/InteractiveList";
import { api } from "~/trpc/server";
import { getTheme } from "~/utils/utils";

export default async function AdminFaqsPage() {
  const data = await api.faqs.getAll.query();

  const { theme } = await getTheme();
  if (!theme) return null;
  return (
    <>
      <div
        style={{
          backgroundColor: theme.primaryAccent?.hex,
        }}
        className=" text-center "
      >
        <Heading text="New FAQ" colour="theme-text-1" />
        <NewFaq />

        <InteractiveList input={data} themeData={theme} />
      </div>
    </>
  );
}
