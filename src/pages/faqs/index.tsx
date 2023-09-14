import { Faq } from "~/components/Faq";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Faqs() {
  const { data } = api.faqs.getAll.useQuery();

  return (
    <>
      <Heading text="Frequently Asked Questions" />
      <ul className="grid lg:grid-cols-2">
        {data?.map((faq) => {
          return <Faq key={faq.id} data={faq} />;
        })}
      </ul>
    </>
  );
}
