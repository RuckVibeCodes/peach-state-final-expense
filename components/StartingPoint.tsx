"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { initialAnswers, questions, startingPoint, type Answers } from "@/lib/starting-point";

export default function StartingPoint() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ ...initialAnswers });
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);
  const lastNavigation = useRef(0);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  const question = questions[step];
  const result = startingPoint(answers);
  function goTo(nextStep: number) {
    // Treat rapid double-clicks as one navigation, including when revisiting answered steps.
    const now = Date.now();
    if (now - lastNavigation.current < 350) {
      requestAnimationFrame(() => heading.current?.focus());
      return;
    }
    lastNavigation.current = now;
    setStep(nextStep);
  }
  function reset() {
    setAnswers({ ...initialAnswers });
    setStep(0);
    lastNavigation.current = 0;
    requestAnimationFrame(() => heading.current?.focus());
  }
  return <section className="starting-guide" aria-label="Your starting point"
    onPointerDownCapture={event => {
      if (Date.now() - lastNavigation.current < 350 && (event.target as HTMLElement).closest("button")) {
        event.preventDefault();
        requestAnimationFrame(() => heading.current?.focus());
      }
    }}>
    <div className="starting-progress">
      <p>{step < 3 ? `Question ${step + 1} of 3` : "Your starting point"}</p>
      <button type="button" className="text-link" onClick={reset}>Start over</button>
    </div>
    <ol className="starting-steps" aria-label="Guide progress">
      {["Who", "What matters", "Current coverage"].map((label, i) => <li key={label} aria-current={i === step ? "step" : undefined} className={i <= step ? "is-reached" : ""}><span aria-hidden="true">{i + 1}</span>{label}</li>)}
    </ol>
    {question ? <form onSubmit={event => { event.preventDefault(); if (answers[question.key]) goTo(step + 1); }}>
      <fieldset key={question.key}>
        <legend><h2 ref={heading} tabIndex={-1}>{question.title}</h2></legend>
        <div className="starting-options">{question.options.map(option => <label key={option.value} className="starting-option">
          <input type="radio" name={question.key} value={option.value}
            checked={answers[question.key] === option.value}
            onChange={() => setAnswers(current => ({ ...current, [question.key]: option.value }))} />
          <span>{option.label}</span>
        </label>)}</div>
      </fieldset>
      <div className="starting-actions">
        {step > 0 ? <button type="button" className="text-link" onClick={() => goTo(step - 1)}><span aria-hidden="true">&#8592;</span> Back</button> : <span />}
        <button type="submit" className="premium-button" disabled={!answers[question.key]}>{step === 2 ? "See my starting point" : "Continue"}<span aria-hidden="true">&#8594;</span></button>
      </div>
    </form> : <div className="starting-result">
      <h2 ref={heading} tabIndex={-1}>{result.title}</h2>
      <p>{result.text}</p>
      <p>{result.person}</p>
      <h3>{answers.existing === "yes" ? "Understand what you already have" : answers.existing === "no" ? "Consider the resources available" : "Check your current coverage"}</h3>
      <p>{result.existing}</p>
      <nav aria-label="Guides for your starting point" className="starting-reading">
        <Link href={result.href} className="text-link">{result.label}<span aria-hidden="true">&#8599;</span></Link>
        <Link href={result.secondLink.href} className="text-link">{result.secondLink.label}<span aria-hidden="true">&#8599;</span></Link>
      </nav>
      <div className="starting-contact"><h3>A next step, only when you are ready</h3>
        <Link href="/quote" className="premium-button">Request information <span aria-hidden="true">&#8599;</span></Link>
      </div>
      <button type="button" className="text-link" onClick={() => goTo(2)}><span aria-hidden="true">&#8592;</span> Back to my answers</button>
    </div>}
  </section>;
}
