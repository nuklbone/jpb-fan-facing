import { Resend } from "resend";
import { env } from "@/lib/env";

export const resend = new Resend(env.resendApiKey);

export async function sendEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  const { to, subject, html, from } = options;

  const response = await resend.emails.send({
    from: from ?? env.resendFromEmail,
    to,
    subject,
    html,
  });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.data;
}
