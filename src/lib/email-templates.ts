export const welcomeEmailTemplate = (data: {
  firstName: string;
  downloadLink: string;
  merchCode: string;
}) => {
  const { firstName, downloadLink, merchCode } = data;
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; padding: 32px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background: #111827; border-radius: 16px; overflow: hidden;">
            <tr>
              <td style="padding: 32px; text-align: center;">
                <h1 style="margin: 0 0 16px; font-size: 28px; color: #38bdf8;">Welcome, ${firstName}!</h1>
                <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
                  Thanks for joining the Inner Circle Crew! You now get first listens, early ticket alerts, and backstage stories.
                </p>
                <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
                  🎁 Your welcome gift: <a href="${downloadLink}" style="color: #38bdf8;">Download "Shaky Ground (Live at The Brickyard)"</a>
                </p>
                <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
                  🎫 Use code <strong>${merchCode}</strong> for 10% off your first merch order.
                </p>
                <p style="margin: 0; font-size: 14px; color: #cbd5f5;">Expect 2–3 high-value messages per month. Zero spam, all groove.<br/><br/>Talk soon,<br/>The James Pitts Band Crew</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};

export const contactFormEmailTemplate = (data: {
  name: string;
  email: string;
  message: string;
  topic?: string;
}) => {
  const { name, email, message, topic } = data;
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background: #f9fafb; color: #111827; padding: 32px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0;">
            <tr>
              <td style="padding: 24px;">
                <h2 style="margin: 0 0 16px; font-size: 22px; color: #1d4ed8;">New fan message!</h2>
                <p style="margin: 0 0 12px; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 12px; font-size: 16px;"><strong>Email:</strong> ${email}</p>
                ${topic ? `<p style="margin:0 0 12px; font-size: 16px;"><strong>Topic:</strong> ${topic}</p>` : ""}
                <p style="margin: 0 0 8px; font-size: 16px;"><strong>Message:</strong></p>
                <p style="margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-line;">${message}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
};
