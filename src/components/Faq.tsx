export function Faq({ data }: { data: Faq }) {
  return (
    <li className="m-4 bg-theme-header p-2">
      <div className="text-xl font-bold">{data.question}</div>
      <div>{data.answer}</div>
    </li>
  );
}
