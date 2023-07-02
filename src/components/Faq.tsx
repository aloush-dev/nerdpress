export function Faq({
  data,
}: {
  data: {
    id: number;
    userId: string;
    question: string;
    answer: string;
    displayPosition: number;
  };
}) {
  return (
    <li className="m-4 bg-theme-header p-2">
      <div className="text-xl font-bold">{data.question}</div>
      <div>{data.answer}</div>
    </li>
  );
}
