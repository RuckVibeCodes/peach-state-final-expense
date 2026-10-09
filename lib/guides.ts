export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const guides: Guide[] = [
  {
    slug: "final-expense-costs-georgia",
    title: "What Does Final Expense Insurance Cost in Georgia?",
    description:
      "A plain-English breakdown of final expense insurance costs in Georgia — what drives the price, typical monthly ranges by age, and how to keep premiums affordable.",
    intro: [
      "The first question almost every Georgia senior asks is also the most reasonable one: what is this going to cost me every month? The honest answer is that it depends on four things — your age, your health, whether you use tobacco, and how much coverage you choose.",
      "This guide walks through each of those factors with realistic numbers, so you can judge for yourself what fits your budget before you ever talk to anyone.",
    ],
    sections: [
      {
        heading: "The four things that set your price",
        paragraphs: [
          "Age is the biggest factor. A 55-year-old pays substantially less than a 75-year-old for the same $10,000 policy — sometimes half as much. That's simply because the insurer expects to collect premiums for longer. Every birthday raises the price, which is why buying sooner rather than later saves real money.",
          "Health comes next, but it's gentler than most people fear. Final expense uses simplified underwriting — a short list of health questions, no exam. Well-managed conditions like high blood pressure, high cholesterol, or type 2 diabetes generally don't prevent approval or even raise the price much. What raises prices are serious recent events: heart attack, stroke, cancer, or lung disease in the last couple of years.",
          "Tobacco use is the third factor, and it's a big one. Smokers typically pay 30% to 50% more than non-smokers. The good news: if you quit, many insurers will re-rate you as a non-smoker after 12 months tobacco-free.",
          "Finally, the coverage amount. More coverage costs more — roughly proportionally. A $20,000 policy costs about twice a $10,000 policy at the same age and health class.",
        ],
      },
      {
        heading: "Typical monthly ranges (so you can sanity-check any quote)",
        paragraphs: [
          "Nobody can quote you precisely without your details, and you should be skeptical of any website that claims to. But realistic ballparks help you spot a bad deal. For a non-smoker in reasonably good health, $10,000 of final expense coverage often lands in these neighborhoods:",
        ],
        list: [
          "Age 55–60: roughly $30–$55 per month",
          "Age 65–70: roughly $50–$90 per month",
          "Age 70–75: roughly $70–$120 per month",
          "Age 75–80: roughly $100–$170 per month",
          "Age 80–85: roughly $150–$250 per month",
        ],
      },
      {
        heading: "What these ranges assume — read this part",
        paragraphs: [
          "Those are illustrative ranges for simplified-issue policies, not promises. Your actual premium could be lower or higher. Guaranteed-issue policies (no health questions) run higher. Excellent health at 65 could beat the range; serious health issues could exceed it.",
          "Anyone who gives you an exact price without asking your age, health history, and tobacco use is guessing — or selling. A legitimate quote takes about 15 minutes of questions first.",
        ],
      },
      {
        heading: "How Georgia seniors keep premiums affordable",
        paragraphs: [
          "Buy the coverage you need, not the coverage you're sold. If a $10,000 policy covers the funeral you'd want, you don't need $25,000. Match the policy to the actual cost — that's the entire philosophy of final expense insurance.",
          "Consider your tobacco status honestly and ask about re-rating if you quit. And if budget is tight, remember that a smaller policy you keep is infinitely better than a bigger policy you let lapse. $7,500 of paid-up coverage beats $15,000 of cancelled coverage every time.",
        ],
      },
      {
        heading: "Watch out for these pricing tricks",
        paragraphs: [
          "Some policies are priced low for the first few years and then increase — that's term insurance dressed up, not true final expense whole life. Always confirm the premium is guaranteed level for life, in writing.",
          "Also beware of 'accidental death' policies marketed like life insurance. They only pay if you die by accident — which is not how most of us go. A real final expense policy pays regardless of cause of death (after any initial waiting period on guaranteed-issue plans).",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do final expense quotes vary so much between companies?",
        a: "Each insurer prices risk differently — one may be lenient about diabetes while another penalizes it. That's why comparing two or three options matters. An independent agent can run your profile past multiple companies instead of quoting just one.",
      },
      {
        q: "Will my premium ever go up?",
        a: "On a true final expense whole life policy, no — level premiums are guaranteed for life as long as you pay on time. If a quote mentions increasing premiums, you're likely looking at a term product, not final expense whole life.",
      },
      {
        q: "Is there a policy with no monthly payment at all?",
        a: "Some insurers offer single-premium or limited-pay options (e.g., pay for 10 years, covered for life). These require a larger upfront commitment but eliminate the monthly bill. Ask about them if a lump sum works better for your situation.",
      },
    ],
    metaTitle: "Final Expense Insurance Costs in Georgia (2026 Guide) | Peach State Final Expense",
    metaDescription:
      "What does final expense insurance cost in Georgia? Realistic monthly ranges by age, what drives your price, and how to avoid overpaying. Plain-English guide.",
  },
  {
    slug: "how-final-expense-works",
    title: "How Final Expense Insurance Works (Start to Finish)",
    description:
      "From application to claim payout: exactly how final expense insurance works, who it's for, and what your family can expect — explained in plain English.",
    intro: [
      "Final expense insurance sounds simple — and it mostly is — but nobody ever sits you down and explains the whole lifecycle: how you apply, what happens while you pay, and what your family actually does when the time comes.",
      "This guide walks through all of it, step by step, so there are no surprises for you or the people you love.",
    ],
    sections: [
      {
        heading: "Step 1: The application (about 20 minutes)",
        paragraphs: [
          "You apply by phone or online. You'll provide basic information — name, date of birth, address, Social Security number — and answer health questions. Typical questions cover heart conditions, stroke, cancer, lung disease, diabetes, and hospitalizations, usually with a two-to-five-year lookback.",
          "There is no medical exam. No blood draw, no urine sample, no nurse visiting your home. For most applicants, the phone interview is the entire medical part of the process.",
        ],
      },
      {
        heading: "Step 2: Underwriting and approval (days, not weeks)",
        paragraphs: [
          "The insurer reviews your answers, usually checks prescription history and the Medical Information Bureau (with your permission), and issues a decision — typically within 2 to 5 business days. Many applicants are approved; some with significant health issues may be offered a graded or guaranteed-issue policy instead.",
          "Once approved, you choose your beneficiary (or beneficiaries), set up monthly bank-draft payments, and receive the policy documents. Coverage generally starts on the first paid premium date.",
        ],
      },
      {
        heading: "Step 3: The paying years (set it and forget it)",
        paragraphs: [
          "Each month, the premium drafts from your bank account. The amount never changes. The coverage never decreases. You don't need to do anything else — no annual checkups, no re-qualifying, no paperwork. The insurer cannot cancel your policy because you got older or sicker.",
          "If money gets tight, call the insurer before missing payments. There's typically a 30-day grace period, and letting a policy lapse means losing everything you paid in — so it's worth a conversation first.",
        ],
      },
      {
        heading: "Step 4: When the time comes — how your family files a claim",
        paragraphs: [
          "Your beneficiary (or a family member helping them) contacts the insurance company and requests claim forms. They'll need a certified death certificate — the funeral home usually orders these as part of their services, so ask for several copies.",
          "The beneficiary completes the short claim form, attaches the death certificate, and submits everything by mail or online upload. Most final expense claims are paid within 24 to 72 hours of the insurer receiving complete paperwork. The money arrives as a check or direct deposit, and your family uses it for the funeral and any other needs.",
        ],
      },
      {
        heading: "What the benefit can be used for",
        paragraphs: [
          "Anything. The death benefit is paid in cash with no restrictions. Most families use it for the funeral home, cemetery, and headstone first, then final medical bills, small debts, or legal costs. If there's money left over, it stays with the beneficiary — no accounting required.",
          "This flexibility is the point. A pre-paid funeral plan locks money to one funeral home; a final expense policy trusts your family to handle things their way.",
        ],
      },
      {
        heading: "The two-year contestability period, honestly explained",
        paragraphs: [
          "During the first two years, an insurer can investigate a claim and deny it if the application contained material misstatements — for example, hiding a recent cancer diagnosis. This is why answering the health questions truthfully matters so much.",
          "After two years, the policy is generally incontestable. And note: this applies to misrepresentation, not to dying of a disclosed condition. If you truthfully reported your heart condition and pass from it in year one, the policy pays.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take for my family to receive the money?",
        a: "Once the insurer has the completed claim form and death certificate, most final expense benefits are paid within 1–3 business days. The biggest delays usually come from waiting on the death certificate itself, which is why funeral homes order several certified copies.",
      },
      {
        q: "What if I outlive the policy?",
        a: "You can't. Final expense is whole life insurance — it has no expiration date. As long as premiums are paid, the coverage lasts your entire life, whether that's to 80 or 105.",
      },
      {
        q: "Can I borrow against my policy?",
        a: "Final expense policies do build a small cash value over time, and most allow policy loans against it. Borrowing reduces the death benefit until repaid, so it's best treated as an emergency option rather than a feature.",
      },
    ],
    metaTitle: "How Final Expense Insurance Works: A Complete Guide | Peach State Final Expense",
    metaDescription:
      "How does final expense insurance work? Application, approval, premiums, and exactly how your family files a claim — explained step by step in plain English.",
  },
  {
    slug: "term-vs-final-expense",
    title: "Term Life vs. Final Expense Insurance: Which Do You Actually Need?",
    description:
      "Term life and final expense insurance solve different problems. Here's an honest comparison for Georgia seniors deciding which — if either — fits their situation.",
    intro: [
      "If you shopped for life insurance in your 30s or 40s, you probably bought term: cheap, big coverage, expires after 20 or 30 years. Now you're 65 or 70, the term is expiring (or expired), and someone is suggesting final expense insurance instead.",
      "They're different tools for different jobs. This guide compares them honestly so you buy the right one — or confidently buy neither.",
    ],
    sections: [
      {
        heading: "What term life is actually for",
        paragraphs: [
          "Term life exists to replace income. When you were 35 with a mortgage and kids, a $500,000 20-year term policy meant your family could keep the house and maintain their lifestyle if you died. It was cheap because the odds of a healthy 35-year-old dying within 20 years are low.",
          "The tradeoff was always the expiration date. Term is rented coverage — when the term ends, the coverage ends, and everything you paid is gone. That was fine when the plan was 'I'll be self-insured by 55.'",
        ],
      },
      {
        heading: "What final expense is actually for",
        paragraphs: [
          "Final expense exists to pay for your funeral. That's it — that's the job. Coverage amounts of $5,000 to $25,000 map to actual funeral costs, not to income replacement. It's whole life insurance, so it never expires, and the premiums never increase.",
          "It's more expensive per thousand dollars of coverage than term was — because at 70, the insurer knows a claim is a matter of when, not if. But it will actually be there when your family needs it, which is the entire point.",
        ],
      },
      {
        heading: "Side-by-side comparison",
        paragraphs: [
          "Here's the honest breakdown:",
        ],
        list: [
          "Purpose: Term replaces income for dependents; final expense pays funeral and end-of-life costs.",
          "Coverage amounts: Term is typically $100,000–$1,000,000+; final expense is $5,000–$25,000.",
          "Duration: Term expires after 10–30 years; final expense (whole life) lasts your entire life.",
          "Premiums: Term starts cheap but skyrockets if renewed at older ages; final expense costs more per dollar but the premium is locked forever.",
          "Medical exam: Term usually requires one; final expense usually doesn't.",
          "Best ages: Term for 25–55; final expense for 50–85.",
        ],
      },
      {
        heading: "When term still makes sense after 60",
        paragraphs: [
          "There are legitimate cases. If you're 62, still working, with a spouse depending on your income for another decade, a 10- or 15-year term policy can be the right bridge — and it's cheaper than final expense for the same death benefit.",
          "Some seniors also keep a small term policy to cover a specific debt with an end date, like remaining mortgage years. The key question is always: does the need have an expiration date? If yes, term. If the need is 'my funeral, whenever that happens,' final expense.",
        ],
      },
      {
        heading: "The mistake to avoid",
        paragraphs: [
          "The most expensive mistake we see: letting a term policy expire at 65, assuming you're 'done with insurance,' then trying to buy coverage at 75 after a health scare. By then, term is prohibitively expensive and final expense costs more than it would have a decade earlier.",
          "If your term is expiring in the next few years, that's the moment to decide — not after. A free quote now costs nothing and tells you exactly where you stand.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I have both term and final expense insurance?",
        a: "Absolutely. Many people carry a term policy for income protection during working years and add final expense coverage that continues after the term expires. They serve different purposes and don't conflict.",
      },
      {
        q: "My term policy is expiring next year. What should I do?",
        a: "First, check whether it's convertible — many term policies let you convert to permanent coverage without new health questions, though the price reflects your current age. If conversion isn't attractive, get final expense quotes now rather than waiting until after expiration.",
      },
      {
        q: "Is final expense just expensive term insurance?",
        a: "No — it's whole life insurance, a fundamentally different product. Term expires; whole life doesn't. The higher cost per dollar reflects lifetime coverage and the older age of applicants, not a markup on the same thing.",
      },
    ],
    metaTitle: "Term Life vs Final Expense Insurance: Honest Comparison | Peach State Final Expense",
    metaDescription:
      "Term vs final expense insurance for seniors: what each is actually for, honest cost comparison, and which one fits your situation. Plain-English guide.",
  },
  {
    slug: "faq",
    title: "Final Expense Insurance FAQ — Straight Answers",
    description:
      "Straight answers to the most common final expense insurance questions: costs, qualifications, how claims work, and what to watch out for.",
    intro: [
      "These are the questions Georgia seniors ask us most often about final expense insurance — answered the way we'd answer them across a kitchen table. No jargon, no sales pitch.",
    ],
    sections: [
      {
        heading: "What should I check before choosing a policy?",
        paragraphs: [
          "Ask a licensed agent to walk through the actual policy, not just a monthly price. Compare the coverage amount, payment schedule, exclusions, and any period when only a limited benefit is payable. Ask which amounts are guaranteed and which are illustrations. A lower initial payment does not necessarily mean the same protection. Keep the written documents so you and your family can review them without pressure.",
          "Before replacing existing coverage, check its benefits and ask how a new policy would differ. Do not cancel a policy simply because you requested information elsewhere. Discuss affordability over time, who will receive the benefit, and where your family will find the insurer's contact information. This prelaunch website cannot provide an actual quote or approve an application; eligibility and policy terms must be confirmed with a licensed agent and the insurer.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is final expense insurance?",
        a: "It's a small whole life insurance policy — typically $5,000 to $25,000 — designed to cover funeral costs, burial or cremation, and other end-of-life expenses. It's sometimes called burial insurance. Unlike term life, it never expires as long as you pay the premiums.",
      },
      {
        q: "How much does final expense insurance cost?",
        a: "It depends on your age, health, tobacco use, and coverage amount. As a rough illustration, a healthy 65-year-old non-smoker might pay $50–$90/month for $10,000 of coverage, while the same coverage at 80 could run $150–$250/month. Your exact price requires a personalized quote.",
      },
      {
        q: "Do I need a medical exam?",
        a: "For most final expense policies, no. You answer health questions over the phone — usually about major conditions in the last 2–5 years. Common managed conditions like high blood pressure or cholesterol generally don't prevent approval.",
      },
      {
        q: "What if I have serious health problems?",
        a: "Some policies do not require health questions, but availability, eligible ages, and other requirements vary by insurer. These policies may cost more and limit the benefit for certain deaths during an initial period. Ask for the written benefit schedule. This site does not promise eligibility or approval.",
      },
      {
        q: "Will my premium go up as I get older?",
        a: "No — on a true final expense whole life policy, your premium is guaranteed level for life. If someone quotes you a policy with increasing premiums, it's not standard final expense whole life.",
      },
      {
        q: "How fast does the benefit pay out?",
        a: "Timing varies by insurer and the circumstances of the claim. Beneficiaries may need a claim form, death certificate, and additional documentation. A claim can require further review. Do not assume insurance proceeds will be available for an immediate funeral deposit; ask the insurer about its process and plan for that possibility.",
      },
      {
        q: "Is the death benefit taxable?",
        a: "In most cases, life insurance death benefits are received income-tax-free. This is general information, not tax advice — consult a tax professional about your situation.",
      },
      {
        q: "Can I be turned down?",
        a: "Yes, eligibility depends on the product and insurer. Policies with health questions can decline an application. Products described as guaranteed issue still have eligibility requirements, availability limits, and policy terms. A licensed agent can explain possible options, but this educational site cannot guarantee acceptance.",
      },
      {
        q: "What's the difference between final expense insurance and pre-paying a funeral home?",
        a: "Pre-paying locks your money to one funeral home. Final expense insurance pays cash to your beneficiary, who can use any funeral home, anywhere. The policy also moves with you if you relocate; a pre-paid plan doesn't.",
      },
      {
        q: "How do I know how much coverage I need?",
        a: "Start with the farewell you'd want: direct cremation ($1,500–$3,000), cremation with service ($3,000–$6,000), or traditional burial ($7,000–$12,000+ in Georgia). Add a cushion for final medical bills or small debts. Most families land between $10,000 and $15,000.",
      },
      {
        q: "Can I name my grandchildren as beneficiaries?",
        a: "Yes — you can name anyone as a beneficiary, split the benefit among multiple people, and change beneficiaries later if you wish.",
      },
      {
        q: "What happens if I stop paying?",
        a: "There's typically a 30-day grace period. If the policy lapses, coverage ends and premiums paid are generally not refunded (though any cash value may be available). If money gets tight, call the insurer before missing a payment — options often exist.",
      },
    ],
    metaTitle: "Final Expense Insurance FAQ | Straight Answers | Peach State Final Expense",
    metaDescription:
      "Final expense insurance FAQ: costs, qualifications, medical exams, how fast benefits pay, and more — answered plainly for Georgia seniors and families.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guideSlugs = guides.map((g) => g.slug);
