import ConfigPage from "~/app/components/admin/ConfigPage";
import { PageSelector } from "../components/admin/PageSelector";
import { SocialLinks } from "../components/admin/SocialLinks";
import { api } from "~/trpc/server";

export default async function AdminPanel() {
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  const theme = await api.config.getTheme.query({ name: websiteData.theme });

  return (
    <div className="md:grid md:grid-cols-3 md: mt-4">
      <ConfigPage customClassName="col-span-1" websiteData={websiteData} themeData={theme} />
      <PageSelector customClassName="col-span-1" websiteData={websiteData} themeData={theme} />
      <SocialLinks
        customClassName="col-span-1"
        websiteData={websiteData}
        themeData={theme}
      />
    </div>
  );
}
