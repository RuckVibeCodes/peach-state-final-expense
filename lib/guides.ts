import { insuranceSources, funeralSources, beneficiarySources, underwritingSources, type ContentSource } from "./content-sources";
import { medicareGuide } from "./medicare-guide";

export interface GuideSection { heading: string; paragraphs: string[]; list?: string[]; links?: { href: string; label: string }[]; detail?: { summary: string; paragraphs: string[] }; }
export interface Guide {
  slug: string; title: string; description: string; intro: string[];
  sections: GuideSection[]; faqs: { q: string; a: string }[];
  sources: ContentSource[]; metaTitle: string; metaDescription: string;
  image?: { src: string; width: number; height: number; alt: string };
}

export const guides: Guide[] = [
  medicareGuide,
  {
    slug: "final-expense-costs-georgia",
    title: "Understanding Final Expense Insurance Costs in Georgia",
    description: "What affects premiums, how to research funeral costs, and how to compare coverage with a budget you can maintain.",
    intro: [
      "A monthly insurance payment and a funeral budget are two different numbers. The premium is what you pay to keep a policy in force. The death benefit is the amount potentially payable under its terms. Funeral expenses are what providers charge for the arrangements your family selects. Start by separating those questions rather than assuming one advertised payment answers all three.",
      "An insurance quote depends on a specific product and the insurer's eligibility and rating process. Compare that quote with current funeral prices for the arrangements you want.",
    ],
    sections: [
      { heading: "What goes into an insurance quote?", paragraphs: [
        "Age, health information, tobacco use, the benefit amount, and the specific product can affect price and availability. Do not treat a neighbor's payment as your rate. Ask which answers are relevant, whether a quote is preliminary, and what could change after underwriting. A useful comparison identifies the insurer, product, payment schedule, eligibility assumptions, and date, not simply a monthly number.",
        "For example, write the same desired benefit at the top of two comparison sheets. Then record the premium and benefit restrictions separately. If one option has a limited initial benefit and another does not, they are not identical coverage even if the advertised amounts match. This is a comparison method, not a statement that a particular policy is available to you.",
      ] },
      { heading: "Check the payment schedule, not just the first payment", paragraphs: [
        "Ask whether payments stay level, can change, or stop after a defined period. Check which provisions are guaranteed in the contract. Some permanent policies build cash value, but early values may be small and are not the same as the death benefit. Do not assume every product described as burial or final expense has identical premiums, values, or benefits.",
        "Put the proposed payment into your real household budget alongside housing, food, prescriptions, transportation, and an allowance for unexpected expenses. Would it still be manageable in a difficult month? A larger benefit is not automatically better if maintaining it would strain essential spending. Ask about smaller amounts or other approaches without being rushed into a purchase.",
      ] },
      { heading: "Build a funeral estimate from actual price lists", paragraphs: [
        "For local research, obtain dated, itemized information from providers you would actually consider. The FTC explains price-list and telephone-information rights under the Funeral Rule. Compare complete arrangements, not one prominent package price. Save the provider name, location, date, included items, and separately charged items so another family member can understand your estimate later.",
        "A practical worksheet has separate lines for the funeral provider, cemetery arrangements, transportation, optional gathering, and other selected items. Mark each figure as quoted, estimated, or not yet known. Ask providers what is excluded and what could change. A national survey or an old advertisement should not silently become a current Dacula or Lawrenceville price.",
      ] },
      { heading: "Compare burial and cremation without assumptions", paragraphs: [
        "Consider the specific services wanted with either choice. Cremation can be accompanied by a viewing, a memorial, burial of remains, or other arrangements; burial can also involve different service choices. Ask for an itemized total for your chosen scenario. Labels alone do not tell you whether two proposals include comparable merchandise, services, or cemetery charges.",
        "Keep preferences and prices on the same sheet. If one relative is comparing a direct arrangement and another is imagining a larger gathering, clarify that difference before debating the total. You can record a preferred plan and a simpler alternative without promising that insurance will pay every expense. The goal is a shared understanding, not a universal recommendation for one kind of farewell.",
      ] },
      { heading: "Translate the estimate into a coverage discussion", paragraphs: [
        "List any existing insurance, savings intended for this purpose, and prepaid arrangements before considering additional coverage. Illustrative amounts such as $5,000, $10,000, or $25,000 are discussion points, not assurances of availability or enough money for a particular funeral. Ask a licensed agent to help distinguish a current need from coverage you already have.",
        "Also think about timing. A payable insurance claim is not an immediate cash account. Your family may need documents and the insurer may need to review the claim. Do not plan on an insurance payment meeting a deposit deadline. Discuss how the family would manage an immediate expense separately from the amount a policy might eventually pay.",
      ] },
      { heading: "A short checklist before deciding", paragraphs: [
        "Keep a written comparison of premiums, benefit amounts, exclusions, initial benefit limits, cash values if relevant, and the consequences of missed payments. Ask about anything unclear. If you already have coverage, compare it carefully before changing it. Requesting information or a new quote is not a reason to cancel an existing policy.",
        "Revisit your planning after a change in needs, finances, or family circumstances. Keep the estimate's source dates visible rather than presenting an old total as current. There is no single correct benefit for every Georgia household. A decision should connect documented costs, available resources, policy terms, and affordability, with room to decide not to buy additional insurance.",
      ] },
    ],
    faqs: [
      { q: "Can an advertised monthly price tell me my cost?", a: "Not by itself. A quote needs a specific product, date, eligibility assumptions and payment schedule. Your circumstances and the policy's benefits affect the comparison." },
      { q: "Does a low premium mean a better deal?", a: "Not by itself. Compare the full payment schedule and benefits, including any initial limitations. Ask what the policy does and does not provide before choosing on price alone." },
    ],
    sources: [...insuranceSources, ...funeralSources],
    metaTitle: "Final Expense Insurance Costs in Georgia",
    metaDescription: "Understand rating factors, research funeral prices, and compare final expense coverage with an affordable budget.",
  },
  {
    slug: "how-final-expense-works",
    title: "How Final Expense Insurance Works",
    description: "Life insurance can help with funeral costs and other final bills. Here is what happens from choosing coverage to making a claim.",
    intro: [
      "Final expense insurance is life insurance intended to help with funeral costs and other final bills. It is often a smaller whole life policy. If a covered person dies while the policy is in force, the named beneficiary can make a claim for a benefit under its terms.",
      "It is not a prepaid funeral. The policy does not book a service or automatically direct how your family spends the money. Discuss your wishes and compare the resources you already have before buying anything.",
    ],
    sections: [
      { heading: "1. Decide what you want help paying for", paragraphs: [
        "List your wishes, get itemized funeral prices, and check savings and existing insurance. A small benefit for final bills is different from replacing years of income for a dependent. You may find that your current resources are enough.",
        "For example, a family planning a small gathering should compare prices for that gathering, not assume it needs an advertised package or benefit amount. Coverage examples of $5,000 to $25,000 are not a quote or a promise that a policy is available.",
      ], links: [{ href: "/guides/final-expense-costs-georgia", label: "Compare costs and resources" }] },
      { heading: "2. Apply and review the offer", paragraphs: [
        "An insurer may ask health questions and check other eligibility information. No medical exam does not mean automatic approval. Answer accurately, ask about unclear questions, and read the application before signing.",
        "Compare the premium, benefit, payment schedule and limits in the actual offer. A licensed agent can explain its terms. You can decide not to buy; do not cancel existing insurance just to explore another option.",
      ], detail: { summary: "More about application types", paragraphs: [
        "Simplified issue usually means fewer underwriting steps, often health questions without an exam. Guaranteed-issue products may omit health questions but still have age, residence and availability requirements. Neither label tells you every condition of a particular contract.",
        "Term covers a defined period. Permanent coverage is intended for longer protection while the policy stays in force. Compare that duration with your purpose, not just the marketing name.",
      ] } },
      { heading: "3. Check when the full benefit applies", paragraphs: [
        "Some policies limit benefits for certain deaths during an initial period. Ask what would be paid during that period, when the limit ends, and which exclusions remain. The rules differ by policy; there is no universal waiting period or refund formula.",
      ], detail: { summary: "Benefit limits and claim review are different", paragraphs: [
        "A benefit limit describes the coverage you bought. A contestability provision can allow an insurer to examine application statements under the contract and applicable rules. An accurate application is important, but does not remove exclusions or guarantee every claim will be paid.",
      ] } },
      { heading: "4. Keep payments and family details current", paragraphs: [
        "The premium is the payment needed to keep coverage in force. Check when it is due, whether it can change, and what happens if a payment is missed. If payments become difficult, ask the insurer about your options before coverage lapses.",
        "Name a beneficiary and consider a backup. Tell them where the policy and insurer contact details are stored. Review these details after family changes.",
      ], detail: { summary: "Cash value and minor beneficiaries", paragraphs: [
        "Some permanent policies build cash value. It is different from the death benefit, and early values may be small. Loans or unpaid obligations can affect values or the amount payable.",
        "Do not assume an insurer can pay a minor child directly. Ask the insurer and an appropriate legal adviser how money would be managed. Tax, trust and estate questions need advice for your circumstances.",
      ] } },
      { heading: "5. A beneficiary makes a claim", paragraphs: [
        "The beneficiary contacts the insurer for instructions. It may require a claim form, death certificate and other information. Payment depends on the policy and claim review. Do not assume it will arrive before a funeral provider requests payment.",
        "Keep funeral preferences with your family planning documents. If you also have a prepaid funeral contract, check its services, cancellation and transfer terms separately. Insurance and prepaid arrangements do different jobs.",
      ] },
    ],
    faqs: [
      { q: "Is no medical exam the same as guaranteed approval?", a: "No. A product can omit an exam and still use health questions or other eligibility requirements. Ask about the actual application process and benefit restrictions." },
      { q: "Can my family use the benefit for something other than a funeral?", a: "A payable benefit to a beneficiary is not necessarily a prepaid purchase of funeral services. Check beneficiary designations, assignments, and policy terms. Discuss your wishes rather than assuming a policy directs every spending decision." },
    ],
    sources: [...insuranceSources, ...underwritingSources, ...beneficiarySources, funeralSources[2]],
    metaTitle: "How Final Expense Insurance Works",
    metaDescription: "Learn about final expense applications, premiums, initial benefit limits, beneficiaries and claims.",
  },
  {
    slug: "term-vs-final-expense",
    title: "Term Life vs. Final Expense Insurance",
    description: "Compare purpose, duration, benefits, and limitations before deciding whether to keep, add, or change life insurance.",
    intro: [
      "Term life and final expense are not interchangeable descriptions. Term identifies a type of coverage with a defined duration. Final expense describes a purpose and is often marketed as smaller whole life coverage. A useful comparison begins with the actual contracts and the need you want to address, not a claim that one product is best for everyone after a certain birthday.",
      "Georgia's insurance commissioner distinguishes term from cash-value insurance and encourages careful comparison of current coverage before replacing it. Compare your current contract and needs with a licensed agent before changing coverage.",
    ],
    sections: [
      { heading: "Purpose: what needs protection?", paragraphs: [
        "Think in terms of obligations rather than labels. Income support for a dependent, a remaining mortgage, a planned gift, and a contribution toward final bills can involve different amounts and time horizons. Write each need down separately. A funeral-planning concern does not mean every other obligation has disappeared, and retirement does not create the same insurance need for every household.",
        "For a hypothetical household with a debt expected to end, a defined coverage period may be relevant. For a household focused on expenses whenever death occurs, longer-duration protection may be relevant. These examples illustrate the questions to ask, not suitable products or guaranteed outcomes. Existing savings and policies should be included before calculating any additional need.",
      ] },
      { heading: "Duration: compare what actually continues", paragraphs: [
        "Term insurance pays a covered death benefit during its specified period. Renewal or conversion rights, if any, are defined by the policy. Whole life is intended for lifetime protection with its payment and other conditions met. Read the duration, renewal provisions, maturity provisions if applicable, and payment obligations rather than relying on a slogan about renting or owning insurance.",
        "If a term is approaching its end, ask the current insurer what happens next and whether any deadline applies to an option you have. Get answers while there is time to compare, but do not interpret that as a command to replace the policy. Missing a contract deadline and buying a different product under pressure are both avoidable reasons to slow down and read.",
      ] },
      { heading: "Benefits and cost are different comparisons", paragraphs: [
        "Term generally has lower premiums in early years than permanent insurance, but that broad distinction is not a personalized price comparison. A monthly payment for a smaller benefit cannot be fairly compared with a payment for a much larger one without explaining the difference. Compare the same purpose, benefit amount, duration, eligibility assumptions, and payment schedule where possible.",
        "A useful side-by-side sheet also records exclusions and any initial benefit limitations. If one contract provides limited benefits for certain deaths early on, that difference matters even when the eventual face amounts are identical. Ask which provisions are guaranteed. An illustration, a marketing description, and the issued contract have different roles; do not treat a projected value as a promise.",
      ] },
      { heading: "Underwriting is not a simple age rule", paragraphs: [
        "Product applications differ. Some use medical information or examinations; others use fewer health questions, and some omit health questions subject to other eligibility conditions. Neither term nor final expense tells you the complete underwriting process by itself. Age limits, residence requirements, offered amounts, and application decisions vary.",
        "Before applying, ask what the insurer needs to know and how an initial quote could change. Answer the questions accurately and keep a copy of the application. If health has changed since an existing policy was issued, that can be an important reason to compare cautiously rather than assuming new insurance will have the same price or terms.",
      ] },
      { heading: "Do not ignore cash values or payment consequences", paragraphs: [
        "Most term policies do not build cash value. Whole life may build cash value, which is different from the death benefit and can be modest in early years. Ask for the policy's values and surrender provisions if relevant. Loans or withdrawals can affect protection. Do not describe cash value as free spending money or assume all premiums are recoverable when coverage ends.",
        "Affordability should be tested over time, not just on the first payment date. Consider the premium under the actual schedule and what happens if you cannot maintain it. Ask the insurer which options exist under your current contract before surrendering it. A smaller additional obligation may still be unaffordable; no amount should be treated as harmless because it sounds small.",
      ] },
      { heading: "Keeping, adding, or replacing coverage", paragraphs: [
        "Existing coverage may already address the need, or different policies may serve complementary purposes. Adding insurance still means reviewing total premiums, benefits, and any applicable insurer limits. More policies are not automatically better. Compare an existing contract with a proposed one in writing, including any values or protections you would give up and any new restrictions you would accept.",
        "Do not cancel current insurance simply because you requested a new quote or submitted an application. Georgia and NAIC guidance emphasize careful replacement comparisons. A new policy can have different eligibility, premiums, and initial provisions. Ask an appropriately qualified adviser about consequences that are unclear.",
      ] },
      { heading: "Leave the conversation with clear answers", paragraphs: [
        "Before deciding, summarize the purpose, duration, payable benefits, limits, premium schedule, and options under existing coverage in your own words. If you cannot explain an important term, ask again. Keep documents and insurer contact details accessible to your beneficiaries. Taking time to understand a proposal is part of planning; it is not a reason to accept a deadline invented by a sales message.",
      ] },
    ],
    faqs: [
      { q: "Must I replace term insurance with final expense after retirement?", a: "No. Review what you have and what needs remain. There is no universal retirement-age rule requiring a switch. Ask about existing contract options and compare before changing anything." },
      { q: "Can I keep two kinds of coverage?", a: "Potentially, if the products are available and suitable for your circumstances. Discuss the total cost and purpose of each; this is not a recommendation to hold multiple policies." },
    ],
    sources: insuranceSources,
    metaTitle: "Term Life vs. Final Expense Insurance",
    metaDescription: "Compare term and final expense purpose, duration, costs, underwriting and replacement risks. Keep existing coverage in the discussion.",
  },
  {
    slug: "faq",
    title: "Final Expense Insurance FAQ",
    description: "Clear answers about costs, eligibility, benefits, claims, and planning for your family.",
    intro: [
      "Final expense policies differ in price, eligibility and benefits. Compare the actual contract with what you need and the resources you already have.",
    ],
    sections: [
      { heading: "What should I check before choosing a policy?", paragraphs: [
        "Ask a licensed agent to explain the actual contract, not just its advertised monthly payment. Compare the benefit amount, premium schedule, exclusions, and any initial period when a limited benefit applies. Identify which values are guaranteed and which are illustrations. Save the written proposal and your questions so you can review the explanation without having to remember every detail.",
        "Before considering replacement, put existing coverage beside the proposal. Ask what you would lose, what you would gain, and whether existing options might meet the need. Do not cancel coverage just because you requested information elsewhere. A useful decision connects a documented need, resources you already have, and payments you can maintain, rather than pressure to buy a particular amount today.",
      ] },
    ],
    faqs: [
      { q: "What is final expense insurance?", a: "It is a description often used for smaller whole life insurance intended to help with funeral expenses and final bills. Illustrative amounts of $5,000 to $25,000 are not recommendations or promises of availability. Read the actual policy type and terms: the marketing name alone does not establish how premiums or benefits work. A beneficiary receives a payable benefit subject to that contract." },
      { q: "How much does it cost?", a: "Age, health information, tobacco use, coverage amount, and the product can influence price and eligibility. A meaningful quote identifies the actual product, assumptions, date, and payment schedule. Compare benefit limitations too; two identical face amounts can provide different initial protection." },
      { q: "Does no medical exam mean no health questions?", a: "Not necessarily. Simplified underwriting can include health questions and other review without an exam. Products that omit health questions may still have age, residence, or other requirements and limits on benefits. Ask exactly what the application requires. Do not hide a condition or guess at an answer; ask for clarification and read the completed application before signing." },
      { q: "What if I have serious health problems?", a: "Discuss actual available options with a licensed agent rather than assuming acceptance or rejection from a diagnosis alone. Different insurers and products use different requirements. Some products described as guaranteed issue omit health questions but can include initial benefit limitations and other eligibility conditions." },
      { q: "Are premiums always fixed for life?", a: "Check the specific contract. A level-premium policy has a defined payment schedule, but not every permanent product has identical payments or guarantees. Ask whether premiums or benefits can change and what could affect them. Cash values, loans, and missed payments also deserve explanation. Do not rely on a general phrase about whole life as a substitute for those written provisions." },
      { q: "How quickly is a claim paid?", a: "Timing depends on the insurer, documents, policy, and any review needed. A beneficiary may need a claim form, death certificate, and additional information. Do not assume funds will be available for an immediate funeral deposit. Keep the insurer's contact information and policy location accessible, and ask about the claim process before it is needed." },
      { q: "Does it pay for every cause of death?", a: "No blanket statement is appropriate. Read exclusions, initial benefit limits, and contestability provisions. A truthful application is important but does not erase all policy conditions. Ask what would be payable in the situations you are concerned about, including during any initial limited-benefit period. The issued contract and applicable rules determine the result, not the term final expense." },
      { q: "Is a death benefit taxable?", a: "The IRS says life insurance proceeds received because of the insured person's death generally are not included in gross income, but exceptions and interest can matter. Tax treatment depends on the situation. Ask a qualified tax professional about the actual ownership, beneficiary, payment arrangement, and other relevant facts rather than treating this general explanation as personal tax advice." },
      { q: "How does insurance differ from a prepaid funeral plan?", a: "A prepaid plan purchases arrangements under a particular contract; life insurance provides benefits under a policy. Check included services, price provisions, cancellation, refunds, transfer rights, and assignments. The FTC notes that some prepaid plans can transfer, sometimes with a cost. Do not assume all plans bind you permanently to one funeral home or that insurance fixes the price of funeral services." },
      { q: "Can I name grandchildren as beneficiaries?", a: "Ask about the actual designation and whether a grandchild is a minor. Do not assume an insurer will pay a child directly. An insurer and appropriate legal adviser can explain how proceeds would be managed and whether a trust or other arrangement is suitable. Keep designations current after changes in family circumstances." },
      { q: "How much coverage should I consider?", a: "Start with dated, itemized funeral estimates, any other intended expenses, existing insurance, and resources set aside for the purpose. Do not translate an unsourced average into a recommended benefit. Compare affordability over time and review any gaps with a licensed agent. A larger amount is not automatically appropriate, and a policy is not an assurance that every expense or immediate payment deadline will be covered." },
      { q: "What if I cannot keep paying?", a: "Contact the insurer about your contract before missing payments. Grace periods, lapse consequences, surrender values, and other options depend on its provisions and applicable rules. Do not assume every premium is refunded or that every policy has usable cash value. Review alternatives carefully before replacing or canceling existing coverage, especially if health or finances have changed since it was issued." },
      { q: "What can I do without buying insurance?", a: "Write down your preferences, research itemized prices, organize existing policy information, and discuss where documents are kept. Separate the question of insurance from the question of making wishes understandable. Planning can include deciding that existing resources are sufficient. Keep estimates dated and revisit the information when needs change; no purchase is required to have a useful family conversation." },
    ],
    sources: [...insuranceSources, ...underwritingSources, ...funeralSources, ...beneficiarySources],
    metaTitle: "Final Expense Insurance FAQ",
    metaDescription: "Answers about final expense costs, health questions, benefit limits, claims, prepaid plans and minor beneficiaries, with primary-source references.",
  },
];

export function getGuide(slug: string): Guide | undefined { return guides.find(guide => guide.slug === slug); }
export const guideSlugs = guides.map(guide => guide.slug);
