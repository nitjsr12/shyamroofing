import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
};

function clean(input: string, maxLen: number) {
  return input.trim().replace(/\s+/g, " ").slice(0, maxLen);
}

function isValidEmail(email: string) {
  // Simple email validation: enough for UI validation, not RFC-perfect.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(payload?.name ?? "", 80);
  const phone = clean(payload?.phone ?? "", 20);
  const email = clean(payload?.email ?? "", 120).toLowerCase();
  const message = clean(payload?.message ?? "", 1200);
  const service = clean(payload?.service ?? "", 80);

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please enter a detailed message (min 10 chars)." }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    email,
    message,
    service: service || undefined,
    createdAt: new Date().toISOString(),
    source: "shyam-roofing-website",
  };

  // Option 1: Use an external webhook (Zapier/Make/Google Sheets/etc.)
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Webhook failed. Please try again." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  }

  // Option 2 (default): store leads locally for now.
  // In production, prefer CONTACT_WEBHOOK_URL so leads are persisted reliably.
  const leadsDir = path.join(process.cwd(), "data");
  const leadsFile = path.join(leadsDir, "leads.jsonl");
  try {
    await fs.mkdir(leadsDir, { recursive: true });
    await fs.appendFile(leadsFile, `${JSON.stringify(lead)}\n`, "utf8");
  } catch {
    // If persistence is not available, still respond success so the user isn't blocked.
    // Operators can inspect server logs for debugging.
    console.error("[contact] Failed writing lead to file. Lead:", lead);
  }

  return NextResponse.json({ ok: true });
}

