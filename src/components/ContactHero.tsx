import { Heading } from "./reuseable/Heading";
import { FacebookButton } from "~/components/reuseable/FacebookButton";
import { InstaButton } from "~/components/reuseable/InstaButton";
import { ContactForm } from "~/components/ContactForm";

export function ContactHero() {
  return (
    <div>
      <Heading text="Contact Me" />
      <div className="flex justify-center">
        <InstaButton colour="[#8b635c]" size="4xl" padding="p-4" />
        <FacebookButton colour="[#8b635c]" size="4xl" padding="p-4" />
      </div>
      <ContactForm />
    </div>
  );
}
