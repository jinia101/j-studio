import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, message } = body;

    // ─── Validate fields ───
    if (!name || !email || !message) {
      return Response.json(
        { error: "all fields are required" },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "invalid email format" },
        { status: 400 }
      );
    }

    // ─── Check env vars ───
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return Response.json(
        { error: "email service is not configured" },
        { status: 500 }
      );
    }

    // ─── Create transporter ───
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // ─── Send notification email to you ───
    await transporter.sendMail({
      from: `"J-Studio Portfolio" <${gmailUser}>`,
      to: "jiniasingha10@gmail.com",
      replyTo: email,
      subject: `[j-studio] new inquiry from ${name}`,
      text: [
        `name: ${name}`,
        `email: ${email}`,
        ``,
        `message:`,
        message,
        ``,
        `---`,
        `sent via j-studio portfolio contact form`,
      ].join("\n"),
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 4px;">
          <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 16px 0; text-transform: lowercase; border-bottom: 1px solid #e0e0e0; padding-bottom: 12px;">
            📨 new portfolio inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #666; width: 80px; vertical-align: top;">name:</td>
              <td style="padding: 8px 12px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #666; vertical-align: top;">email:</td>
              <td style="padding: 8px 12px;"><a href="mailto:${escapeHtml(email)}" style="color: #222;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #666; vertical-align: top;">message:</td>
              <td style="padding: 8px 12px; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <p style="margin: 16px 0 0 0; font-size: 12px; color: #999; text-align: center;">
            sent via j-studio portfolio contact form
          </p>
        </div>
      `,
    });

    // ─── Send confirmation email to sender ───
    await transporter.sendMail({
      from: `"Jinia Singha" <${gmailUser}>`,
      to: email,
      subject: `re: your inquiry — received!`,
      text: [
        `hi ${name},`,
        ``,
        `thank you for reaching out through my portfolio. i've received your message and will respond as soon as possible.`,
        ``,
        `— jinia singha`,
        `https://jiniasingha.in`,
      ].join("\n"),
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa; border: 1px solid #e0e0e0; border-radius: 4px;">
          <p style="margin: 0 0 12px 0; font-size: 14px;">hi ${escapeHtml(name)},</p>
          <p style="margin: 0 0 12px 0; font-size: 14px;">
            thank you for reaching out through my portfolio. i've received your message and will respond as soon as possible.
          </p>
          <p style="margin: 16px 0 0 0; font-size: 14px;">
            — jinia singha<br/>
            <a href="https://jiniasingha.in" style="color: #222; font-size: 13px;">jiniasingha.in</a>
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "failed to send message. please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
