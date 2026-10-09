// Central site configuration. The proposed domain is not purchased yet.
export const SITE_URL = "https://peachstatefinalexpense.com";

export const SITE_NAME = "Peach State Final Expense";

// Computed once at build time (safe for static prerendering).
export const CURRENT_YEAR = new Date().getFullYear();

export const PRELAUNCH_MODE = true;
export const PUBLIC_INTAKE_ENABLED = false;

// Fill these only after Matt approves launch details. Do not display a fake phone
// or address in the public UI.
export const PHONE_DISPLAY = "";
export const PHONE_TEL = "";
export const ADDRESS = null;

export const CONSENT_VERSION = "2026-10-09-draft-v1";
export const CONSENT_TEXT =
  "By checking this box and clicking submit, you agree to be contacted by Peach State Final Expense by call, text, and email about insurance quotes, including by automated means. Consent is not a condition of purchase. Msg & data rates may apply.";

export const FOOTER_DISCLOSURE =
  "Peach State Final Expense is an insurance lead service. Insurance products are sold by licensed agents. Site content is educational and is not a quote, an offer of insurance, or a promise of specific prices or approval.";

export const AREA_SERVED = [
  "Dacula, GA",
  "Lawrenceville, GA",
  "Buford, GA",
  "Duluth, GA",
  "Suwanee, GA",
  "Snellville, GA",
  "Winder, GA",
  "Auburn, GA",
  "Braselton, GA",
  "Hoschton, GA",
];

export function canonical(path: string): string {
  return `${SITE_URL}${path}`;
}
