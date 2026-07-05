"use client";

import { useState } from "react";

export type AccordionItem = { question: string; answer: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);
  return <div className="accordion-list">{items.map((item, index) => (
    <article className={open === index ? "open" : ""} key={item.question}>
      <button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
        <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong><b>{open === index ? "−" : "+"}</b>
      </button>
      <div className="accordion-answer"><p>{item.answer}</p></div>
    </article>
  ))}</div>;
}
