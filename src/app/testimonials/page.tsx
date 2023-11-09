import { NewTestimonial } from "~/app/components/NewTestimonial";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";
import NotFound from "../components/NotFound";
import { returnNotFound } from "~/utils/utils";

export default async function TestimonalPage() {
  const data = await api.testimonials.getApprovedTestimonials.query();
  const navLinks = await api.config.getNavBarLinks.query();

  const found = returnNotFound("testimonials", navLinks);

  if (found) return <NotFound />;

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
                className="relative m-4 flex h-full flex-col bg-[#83948e] p-6 pb-20 text-[#fbf2e4]"
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
