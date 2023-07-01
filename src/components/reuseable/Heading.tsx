export function Heading({
  text,
  colour = "theme-text-2",
}: {
  text: string;
  colour?: string;
}) {
  return (
    <>
      <h2 className={`p-8 text-center text-4xl font-black text-${colour} `}>
        {text}
      </h2>
    </>
  );
}
