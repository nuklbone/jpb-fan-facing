import { Resend } from "resend";
import { env } from "@/lib/env";

// Initialize Resend only if API key exists (prevents build errors)
export const resend = env.resendApiKey ? new Resend(env.resendApiKey) : null;

export async function sendEmail(options: {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}) {
  if (!resend) {
    console.warn("Resend API key not configured. Email not sent.");
    return { id: "skipped" };
  }

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
