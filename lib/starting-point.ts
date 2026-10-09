export type Answers = { person: string; topic: string; existing: string };
export const initialAnswers: Answers = { person: "", topic: "", existing: "" };
export const questions = [
  { key: "person", title: "Who are you thinking about?", options: [
    { value: "self", label: "Myself" }, { value: "other", label: "Someone else" },
    { value: "unsure", label: "I'm not sure yet" }, { value: "skip", label: "Prefer to skip" },
  ] },
  { key: "topic", title: "What would you like to understand first?", options: [
    { value: "costs", label: "Costs and budgeting" }, { value: "basics", label: "What coverage can help with" },
    { value: "steps", label: "How a policy works" }, { value: "unsure", label: "I'm not sure yet" },
  ] },
  { key: "existing", title: "Is there already life insurance in place?", options: [
    { value: "yes", label: "Yes" }, { value: "no", label: "No" },
    { value: "unsure", label: "I'm not sure" }, { value: "skip", label: "Prefer to skip" },
  ] },
] as const;

const topics = {
  costs: { title: "Start with the costs you want to plan for", text: "Ask funeral providers for current, itemized prices. Compare the services you actually want, then list savings and any existing benefits separately. An insurance premium is a payment to keep a policy in force, not the price of a funeral.", href: "/guides/final-expense-costs-georgia", label: "Understand costs in Georgia" },
  basics: { title: "Start with what the coverage does", text: "Final expense is a common name for life insurance intended to help with funeral costs and other final bills. A payable benefit goes to the named beneficiary under the policy's terms. It is not the same as buying funeral services in advance.", href: "/guides/how-final-expense-works", label: "Understand the coverage" },
  steps: { title: "Start with the steps of a policy", text: "You apply, the insurer reviews the application, and you decide whether the offered terms fit your needs. If coverage begins, you maintain the required payments. Later, a beneficiary submits a claim. Approval and payment depend on the actual policy and review.", href: "/guides/how-final-expense-works", label: "See how a policy works" },
  unsure: { title: "Start with one practical question", text: "What would you want help paying for? Write down the arrangements or bills that matter to you, then list resources already available. You can learn about insurance alongside other ways to plan; you do not need to choose a policy today.", href: "/guides/faq", label: "Explore common questions" },
};

export function startingPoint(answers: Answers) {
  const topic = topics[answers.topic as keyof typeof topics] || topics.unsure;
  const person = answers.person === "other"
    ? "If you are helping someone else, ask about their wishes and include them in decisions where possible. You can help gather documents without deciding for them."
    : answers.person === "self"
      ? "For your own plan, write down your wishes and tell someone you trust where to find the important documents."
      : "A conversation with someone you trust can help clarify whose needs and wishes you want to plan for.";
  const existing = answers.existing === "yes"
    ? "Before adding or replacing insurance, understand the coverage already in place: whether it is active, its benefit amount, who receives it, and how long it lasts. Do not cancel it simply to explore another option. Ask the insurer or a licensed agent about the actual terms."
    : answers.existing === "no"
      ? "No existing life insurance does not automatically mean you need a new policy. Compare savings, other resources, and your needs first. If you explore insurance, ask about ongoing premiums, eligibility and any initial benefit limits."
      : "First, check whether a policy already exists. Look for policy documents or statements and ask the insurer to explain the coverage. Keep confirmed resources separate from things you have not verified yet.";
  return { ...topic, person, existing,
    secondLink: answers.existing === "yes"
      ? { href: "/guides/term-vs-final-expense", label: "Compare policy types before making a change" }
      : { href: "/guides/does-medicare-cover-funeral-costs", label: "Understand Medicare and funeral funding" },
  };
}
