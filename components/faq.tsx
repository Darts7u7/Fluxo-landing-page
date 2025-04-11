"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's driving data to right for me?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "How does our pricing work?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "What if I change my mind?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "Do you offer any discounted plans?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "Does Venture offer plans to nonprofits and NGOs?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "How can I manage my bills?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
  {
    question: "Can I change my plan?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!",
  },
]

export function FAQ() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
