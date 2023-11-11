export function Heading({
  text,
  colour = "theme-text-2",
  padding = "p-0",
}: {
  text: string;
  colour?: string;
  padding?: string;
}) {
  return (
    <>
      <h2
        className={`${padding} text-center text-4xl font-black text-${colour} `}
      >
        {text}
      </h2>
    </>
  );
}
