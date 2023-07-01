import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import nodemailer from "nodemailer";
import type { Transporter, SendMailOptions } from "nodemailer";

export const contactFormRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({ name: z.string(), email: z.string(), message: z.string() })
    )
    .mutation(async ({ input: { name, email, message } }) => {
      try {
        const transporter: Transporter = nodemailer.createTransport({
          service: "hotmail",
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        });

        const mailOptions: SendMailOptions = {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_FROM,
          subject: "Contact Form Homepage",
          text: `
                    Name: ${name}
                    Email: ${email}
                    Message: ${message}
                `,
        };

        await transporter.sendMail(mailOptions);

        return {
          success: true,
        };
      } catch (error) {
        console.error("Error sending email", error);
        return {
          success: false,
          error: "Failed to send email",
        };
      }
    }),
});
