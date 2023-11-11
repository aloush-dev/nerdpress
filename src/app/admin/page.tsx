import ConfigPage from "~/app/components/admin/ConfigPage";
import { PageSelector } from "../components/admin/PageSelector";
import { SocialLinks } from "../components/admin/SocialLinks";
import { api } from "~/trpc/server";

export default async function AdminPanel() {
  const data = await api.config.getConfig.query();

  if(!data) return null

  return (
    <div className="flex flex-col items-center justify-center">
      <ConfigPage websiteData={data} />
      <PageSelector />
      <SocialLinks websiteData={data} />
    </div>
  );
}
