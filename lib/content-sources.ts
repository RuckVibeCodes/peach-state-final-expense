export interface ContentSource {
  title: string;
  url: string;
}

export const SOURCE_ACCESS_DATE = "2026-10-08";
export const insuranceSources: ContentSource[] = [
  { title: "Georgia insurance commissioner: Life insurance", url: "https://oci.georgia.gov/insurance-resources/life" },
  { title: "NAIC: Life insurance buyer's guide (PDF)", url: "https://content.naic.org/sites/default/files/publication-lig-lp-consumer-life.pdf" },
  { title: "NAIC: Types of life insurance", url: "https://content.naic.org/insurance-topics/life-insurance" },
  { title: "LIC/LOMA: Final expense survey glossary (PDF; category definitions, not available products)", url: "https://www.loma.org/siteassets/lic/lic-surveys-and-benchmarks/licfinalexpensequestionnaire-2024sales---glossary.pdf" },
  { title: "Georgia: Life insurance replacement rules", url: "https://rules.sos.ga.gov/gac/120-2-24" },
];
export const underwritingSources: ContentSource[] = [
  { title: "NAIC: Historical simplified issue research (2017 PDF)", url: "https://content.naic.org/sites/default/files/inline-files/cmte_a_latf_exposure_simplified_issue_report.pdf" },
  { title: "Georgia: Life insurance solicitation rules and policy limitations", url: "https://rules.sos.ga.gov/gac/120-2-31" },
  { title: "NAIC: Claims and retained asset accounts", url: "https://content.naic.org/article/consumer-insight-retained-asset-accounts-and-life-insurance" },
];
export const funeralSources: ContentSource[] = [
  { title: "FTC: Choosing a funeral provider", url: "https://consumer.ftc.gov/articles/choosing-funeral-provider" },
  { title: "FTC: The Funeral Rule", url: "https://consumer.ftc.gov/articles/ftc-funeral-rule" },
  { title: "FTC: Planning your own funeral", url: "https://consumer.ftc.gov/articles/planning-your-own-funeral" },
];
export const beneficiarySources: ContentSource[] = [
  { title: "NAIC: What to know about life insurance beneficiaries", url: "https://content.naic.org/article/consumer-insight-what-know-about-life-insurance-beneficiaries" },
  { title: "IRS: Life insurance and disability insurance proceeds", url: "https://www.irs.gov/faqs/interest-dividends-other-types-of-income/life-insurance-disability-insurance-proceeds" },
];
