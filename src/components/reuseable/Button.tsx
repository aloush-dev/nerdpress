export function Button({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#8b635c] p-4 text-xl font-bold text-white"
      >
        {text}
      </button>
    </>
  );
}
