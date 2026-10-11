import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

export async function POST(req: Request) {
  const data = await req.json();

  // Anti-spam : le champ caché "website" doit rester vide
  if (data.website) return NextResponse.json({ ok: true });

  const { name, phone, email, city, project, message } = data;
  if (!name || !phone || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.QUOTE_FROM || "onboarding@resend.dev",
      to: process.env.QUOTE_TO || site.email,
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "-"}`,
        `City: ${city || "-"}`,
        `Project: ${project}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
