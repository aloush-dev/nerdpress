import { type FunctionComponent } from "react";

interface EmailTemplateProps {
  parsedData: {
    name: string;
    email: string;
    message: string;
  };
}

export const EmailTemplate: FunctionComponent<Readonly<EmailTemplateProps>> = ({
  parsedData,
}) => {
  return (
    <div>
      <h1>Email From, {parsedData.name}!</h1>
      <h2>{parsedData.email}</h2>
      <p>{parsedData.message}</p>
    </div>
  );
};
