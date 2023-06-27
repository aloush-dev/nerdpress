export function Button({ text }: { text: string }) {
  return (
    <>
      <button className="bg-[#8b635c] p-4 text-xl font-bold text-white">
        {text}
      </button>
    </>
  );
}
