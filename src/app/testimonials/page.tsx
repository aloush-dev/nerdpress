import { NewTestimonial } from "~/app/components/NewTestimonial";
import { Heading } from "~/app/components/reuseable/Heading";
import { api } from "~/trpc/server";
import NotFound from "../components/NotFound";
import { returnNotFound } from "~/utils/utils";

export default async function TestimonalPage() {
  const data = await api.testimonials.getApprovedTestimonials.query();
  const navLinks = await api.config.getNavBarLinks.query();
  const websiteData = await api.config.getConfig.query();
  if (!websiteData) return null;
  const theme = await api.config.getTheme.query({ name: websiteData.theme });

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
                style={{ backgroundColor: theme.secondaryAccent?.hex }}
                className="relative m-4 flex h-full flex-col  p-6 pb-20 "
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
