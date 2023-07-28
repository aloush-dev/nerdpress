export function Faq({ data }: { data: Faq }) {
  return (
    <li className="m-4 bg-theme-header p-4 ">
      <div className="pb-4 text-xl font-bold">{data.question}</div>
      <div className="">{data.answer}</div>
    </li>
  );
}
