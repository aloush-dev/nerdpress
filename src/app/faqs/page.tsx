import { api } from "~/trpc/server";
import { Heading } from "../components/reuseable/Heading";
import { Faq } from "../components/Faq";
import { returnNotFound } from "~/utils/utils";
import NotFound from "../components/NotFound";

async function FaqsPage() {
  const data = await api.faqs.getAll.query();
  const navLinks = await api.config.getNavBarLinks.query();
  const sortedData = data
  .slice()
  .sort((a, b) => a.displayPosition - b.displayPosition);

  const found = returnNotFound("faqs", navLinks);

  if (found) return <NotFound />;

  return (
    <>
      <Heading text="Frequently Asked Questions" />
      <ul className="grid lg:grid-cols-2">
        {sortedData?.map((faq) => {
          return <Faq key={faq.id} data={faq} />;
        })}
      </ul>
    </>
  );
}

export default FaqsPage;
