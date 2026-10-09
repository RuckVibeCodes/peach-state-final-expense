import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { CONSENT_TEXT, CONSENT_VERSION, PUBLIC_INTAKE_ENABLED } from "@/lib/site";

const STORAGE_DIR = process.env.LEAD_STORAGE_DIR || path.join(process.cwd(), "data");
const LEADS_FILE = path.join(STORAGE_DIR, "leads.jsonl");

const AGE_RANGES = ["50-59", "60-69", "70-79", "80-85"];
const CONTACT_METHODS = ["Phone call", "Text message", "Email"];
const ALLOW_SYNTHETIC_LEADS =
  process.env.ALLOW_SYNTHETIC_LEADS === "true" && !process.env.VERCEL;

interface QuotePayload {
  fullName?: string;
  phone?: string;
  email?: string;
  ageRange?: string;
  cityZip?: string;
  contactMethod?: string;
  tcpaConsent?: boolean;
  syntheticPreview?: boolean;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  // Reject hosted intake before reading a request body or contact details.
  if (!ALLOW_SYNTHETIC_LEADS) {
    return NextResponse.json({ error: "Contact requests are unavailable in this demo." }, { status: 403 });
  }
  let body: QuotePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const errors: Record<string, string> = {};

  if (!body || typeof body !== "object" || Object.entries(body).some(([key, value]) => typeof value !== (["tcpaConsent", "syntheticPreview"].includes(key) ? "boolean" : "string"))) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const fullName = (typeof body.fullName === "string" ? body.fullName : "").trim();
  if (fullName.length < 2) errors.fullName = "Please enter your full name.";

  const phoneDigits = (body.phone || "").replace(/\D/g, "");
  if (phoneDigits.length < 10) errors.phone = "Please enter a valid 10-digit phone number.";

  const email = (body.email || "").trim();
  if (email && !isValidEmail(email)) errors.email = "Please enter a valid email address.";

  if (!body.ageRange || !AGE_RANGES.includes(body.ageRange))
    errors.ageRange = "Please select your age range.";

  const cityZip = (body.cityZip || "").trim();
  if (cityZip.length < 2) errors.cityZip = "Please enter your city or ZIP code.";

  if (!body.contactMethod || !CONTACT_METHODS.includes(body.contactMethod))
    errors.contactMethod = "Please choose how you'd like us to reach you.";

  // Consent is recorded for the local synthetic test, not certified as compliant.
  if (body.tcpaConsent !== true)
    errors.tcpaConsent = "Please check the consent box so we can contact you.";
  if (!PUBLIC_INTAKE_ENABLED && (body.syntheticPreview !== true || request.headers.get("x-synthetic-lead") !== "true"))
    errors.syntheticPreview = "This local preview only accepts synthetic test requests.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const lead = {
    timestamp: new Date().toISOString(),
    fullName,
    phone: phoneDigits,
    email: email || null,
    ageRange: body.ageRange,
    cityZip,
    contactMethod: body.contactMethod,
    consent: {
      affirmativeChoice: true,
      text: CONSENT_TEXT,
      version: CONSENT_VERSION,
    },
    publicIntakeEnabled: PUBLIC_INTAKE_ENABLED,
    syntheticPreview: !PUBLIC_INTAKE_ENABLED,
    source: {
      path: "/quote",
      site: "peachstatefinalexpense.com",
      userAgent: request.headers.get("user-agent") || null,
    },
  };

  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8");
  } catch {
    return NextResponse.json(
      { error: "We couldn't save your request. Please try again later." },
      { status: 500 }
    );
  }

  // ---------------------------------------------------------------------------
  // WIRE UP ALERTS HERE (V2):
  // After durable storage and after public intake is enabled, send Matt an
  // instant notification so he can follow up fast. Options:
  //   - SMS via Twilio: POST to api.twilio.com with the lead summary.
  //   - Email via Resend/Postmark: send the lead details to Matt's inbox.
  // Keep credentials in environment variables (e.g. TWILIO_ACCOUNT_SID),
  // never hard-code them. This V1 stores the lead only.
  // ---------------------------------------------------------------------------

  return NextResponse.json({ ok: true, stored: true });
}
