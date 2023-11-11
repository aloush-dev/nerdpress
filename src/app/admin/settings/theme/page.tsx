// import ThemeCreator from "~/app/components/admin/ThemeCreator";
import { api } from "~/trpc/server";

export default async function SettingsThemePage() {
  const colours = await api.config.getColours.query();
  return (
    <>
      <p>Settings Theme Page</p>
      {/* <ThemeCreator colours={colours} /> */}
    </>
  );
}
