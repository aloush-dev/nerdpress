import { api } from "~/trpc/server";
import { Heading } from "../components/reuseable/Heading";
import { getTheme, returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";
import { FaqItem } from "../components/faq/FaqItem";

export type Faq = {
  id: number;
  userId: string;
  question: string;
  answer: string;
  displayPosition: number;
};

async function FaqsPage() {
  const data = await api.faqs.getAll.query();
  const navLinks = await api.config.getNavBarLinks.query();
  const sortedData = data
    .slice()
    .sort((a, b) => a.displayPosition - b.displayPosition);

  const found = returnNotFound("faqs", navLinks);
  const { theme } = await getTheme();

  if (!theme) return null;

  if (found) return <NotFound />;

  return (
    <>
      <Heading padding="p-4" text="Frequently Asked Questions" />
      <div>
        {sortedData?.map((faq) => {
          return <FaqItem key={faq.id} data={faq} theme={theme} />;
        })}
      </div>
    </>
  );
}

export default FaqsPage;
