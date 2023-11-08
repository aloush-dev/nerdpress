import ConfigPage from "~/app/components/admin/ConfigPage";
import { PageSelector } from "../components/admin/PageSelector";

export default function AdminPanel() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ConfigPage />
      <PageSelector />
    </div>
  );
}
