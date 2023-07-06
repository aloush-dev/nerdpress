import Link from "next/link";

export function Button({
  text,
  onClick,
  href,
  padding = "p-4",
  disable,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  padding?: string;
  disable?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-theme-accent ${padding} text-xl font-bold text-white`}
    >
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
