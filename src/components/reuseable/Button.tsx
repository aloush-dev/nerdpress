import Link from "next/link";

export function Button({
  text,
  onClick,
  href,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-center bg-theme-accent p-4 text-xl font-bold text-white">
      {href ? (
        <Link href={`${href}`}>{text}</Link>
      ) : (
        <button onClick={onClick}>{text}</button>
      )}
    </div>
  );
}
