import Link from "next/link";

export function Chip({
  text,
  onClick,
  href,
  chipSize = "small",
  disable,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  chipSize?: "small" | "medium" | "large";
  disable?: boolean;
}) {
  const chipSizes = {
    small:
      "flex items-center justify-center rounded-full bg-theme-accent p-2 px-4 text-md font-bold text-white",
    medium:
      "flex items-center justify-center rounded-full bg-theme-accent p-4 px-4 text-xl font-bold text-white",
    large:
      "flex items-center justify-center rounded-full bg-theme-accent p-8 px-4 text-xl font-bold text-white",
  };
  return (
    <div className={chipSizes[chipSize]}>
      {href ? (
        <Link href={`${href}`}>{text}</Link>
      ) : (
        <button disabled={disable} onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
}
