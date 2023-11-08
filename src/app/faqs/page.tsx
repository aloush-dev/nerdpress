import { api } from "~/trpc/server";
import { Heading } from "../components/reuseable/Heading";
import { Faq } from "../components/Faq";

async function FaqsPage () {

    const data = await api.faqs.getAll.query();

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

export default FaqsPage