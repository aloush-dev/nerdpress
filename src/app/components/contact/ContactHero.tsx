import { Heading } from "../reuseable/Heading";
import { FacebookButton } from "~/app/components/reuseable/FacebookButton";
import { InstaButton } from "~/app/components/reuseable/InstaButton";
import { ContactForm } from "./ContactForm";

export function ContactHero() {
  return (
    <div className="w-full md:max-w-4xl">
      <Heading text="Contact Me" />
      <div className="flex justify-center">
        <InstaButton colour="[#8b635c]" size="4xl" padding="p-4" />
        <FacebookButton colour="[#8b635c]" size="4xl" padding="p-4" />
      </div>
      <ContactForm />
    </div>
  );
}
