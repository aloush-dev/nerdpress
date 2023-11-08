import { EmailTemplate } from "../../components/contact/EmailTemplate";
import { NextResponse } from "next/server";
import { type ReactElement } from "react";
import { Resend } from "resend";
import { env } from "~/env.mjs";
import { api } from "~/trpc/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const websiteData = await api.config.getConfig.query();

type reqProps = {
  body: {
    getReader(): any;
    name: string;
    email: string;
    message: string;
  };
};

export async function POST(req: reqProps) {
  const readData = async () => {
    let decodedData = "";
    const textDecoder = new TextDecoder("utf-8");
    const stream = await req.body.getReader();

    return new Promise<string>((resolve, reject) => {
      const onDataRead = ({
        done,
        value,
      }: {
        done: boolean;
        value: ArrayBuffer;
      }) => {
        if (done) {
          resolve(decodedData);
          return;
        }

        const decodedChunk = textDecoder.decode(value);
        decodedData += decodedChunk;

        stream.read().then(onDataRead).catch(reject);
      };

      stream.read().then(onDataRead).catch(reject);
    });
  };

  try {
    const decodedData = await readData();
    const parsedData = JSON.parse(decodedData);

    const data = await resend.emails.send({
      from: `ContactForm <${env.EMAIL_DOMAIN}>`,
      to: [`${env.EMAIL_DOMAIN}`],
      subject: websiteData?.websiteName + " - Contact Form Response",
      react: EmailTemplate({ parsedData }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
