import { EmailTemplate } from "../../components/contact/EmailTemplate";
import { type NextRequest, NextResponse } from "next/server";
import { type ReactElement } from "react";
import { Resend } from "resend";
import { env } from "~/env.mjs";
import { api } from "~/trpc/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const websiteData = await api.config.getConfig.query();
  const readData = async () => {
    let decodedData = "";
    const textDecoder = new TextDecoder("utf-8");
    const reader = req.body?.getReader();

    return new Promise<string>((resolve, reject) => {
      const onDataRead = (result: ReadableStreamReadResult<Uint8Array>) => {
        if (result.done) {
          resolve(decodedData);
          return;
        }

        if (result.value !== undefined) {
          const decodedChunk = textDecoder.decode(result.value);
          decodedData += decodedChunk;

          reader?.read().then(onDataRead).catch(reject);
        } else {
          resolve(decodedData);
        }
      };

      reader?.read().then(onDataRead).catch(reject);
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
