import { AboutMe } from "~/components/AboutMe";
import { Heading } from "~/components/reuseable/Heading";

export default function About() {
  return (
    <>
      <Heading text="About Me" />
      <AboutMe />;
    </>
  );
}
