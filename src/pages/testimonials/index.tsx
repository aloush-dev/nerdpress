import { NewTestimonial } from "~/components/NewTestimonial";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Testimonials() {
  const { data } = api.testimonials.getApprovedTestimonials.useQuery();
  return (
    <>
      <Heading text="Testimonials" />
      <NewTestimonial />

      <ul className="mb-8 grid gap-8 lg:grid-cols-2">
        {data
          ?.slice()
          .slice()
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((testimonial) => {
            return (
              <li
                className="relative m-4 flex h-full flex-col bg-theme-background-container p-6 pb-20 text-theme-text-light"
                key={testimonial.id}
              >
                <div>{testimonial.content}</div>
                <div className="absolute bottom-0 right-0 m-4 mt-8 w-fit bg-theme-accent p-2 text-xl font-bold text-white">
                  {testimonial.postedBy}
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
