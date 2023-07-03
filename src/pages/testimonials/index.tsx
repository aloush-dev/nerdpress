import { NewTestimonial } from "~/components/NewTestimonial";
import { Heading } from "~/components/reuseable/Heading";
import { api } from "~/utils/api";

export default function Testimonials() {
  const { data } = api.testimonials.getApprovedTestimonials.useQuery();
  return (
    <>
      <Heading text="Testimonials" />
      <NewTestimonial />

      <ul>
        {data?.map((testimonial) => {
          return (
            <li key={testimonial.id}>
              <div>{testimonial.content}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
