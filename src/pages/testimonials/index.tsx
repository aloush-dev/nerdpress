import { NewTestimonial } from "~/components/NewTestimonial";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Testimonials() {
  const { data } = api.testimonials.getApprovedTestimonials.useQuery();
  return (
    <>
      <Heading text="Testimonials" />
      <NewTestimonial />

      <ul className="grid grid-cols-1 gap-10 p-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((testimonial) => {
          return (
            <li
              className="flex h-full flex-col bg-[#83948e] p-6 text-[#fbf2e4]"
              key={testimonial.id}
            >
              <div>{testimonial.content}</div>
              <div className="bg-theme-accent w-fit mt-8 p-2 text-white font-bold text-xl m-1">
                {testimonial.postedBy}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
