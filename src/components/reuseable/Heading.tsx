export function Heading({ text }: { text: string }) {
  return (
    <>
      <h2 className={`p-8 text-center text-4xl font-black `}>{text}</h2>
    </>
  );
}
