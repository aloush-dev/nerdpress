export function Service(title: string, price: number, description: string) {
  return (
    <>
      <h3>{title}</h3>
      <p>£{price}</p>
      <p>{description}</p>
    </>
  );
}
