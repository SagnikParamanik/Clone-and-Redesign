import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'How do I know if therapy is right for me?',
      answer: 'Therapy can benefit anyone navigating difficult emotions, relationships, life transitions, or personal growth. If you are feeling stuck, overwhelmed, or simply want support, therapy can help. I offer a free 15-minute consultation to discuss your needs and see if we are a good fit.'
    },
    {
      question: 'What can I expect in the first session?',
      answer: 'The first session is an opportunity for us to get to know each other. We will discuss what brings you to therapy, your goals, and your history. I will explain my approach and answer any questions you have. This session helps us determine how we can work together effectively.'
    },
    {
      question: 'How long does therapy typically last?',
      answer: 'The duration varies based on your goals and needs. Some clients benefit from short-term therapy (8-12 sessions) focused on specific issues, while others prefer ongoing support. We will regularly review your progress and adjust our plan together.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'I am an out-of-network provider, which means I do not bill insurance directly. However, I can provide you with a superbill (detailed receipt) that you can submit to your insurance for potential reimbursement. Many clients find this offers more privacy and flexibility.'
    },
    {
      question: 'Do you offer telehealth sessions?',
      answer: 'Yes! I offer both in-person sessions at my San Francisco office and secure video telehealth sessions. Telehealth is a convenient option for those with busy schedules, mobility concerns, or who live outside the immediate area.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'I require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be charged the full session fee. I understand life happens, and we can discuss exceptions on a case-by-case basis.'
    },
    {
      question: 'Is everything I share confidential?',
      answer: 'Yes, confidentiality is a cornerstone of therapy. Everything you share is protected by law and professional ethics, with rare exceptions (such as imminent danger to yourself or others, child/elder abuse, or court order). We will discuss confidentiality in detail during our first session.'
    },
    {
      question: 'What are your fees?',
      answer: 'Individual therapy sessions (50 minutes) are $200. I offer a limited number of sliding scale slots for those experiencing financial hardship. Please contact me to discuss options and determine what works for your situation.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Your Questions Answered
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about starting therapy with Dr. Reynolds.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-sage-50 rounded-2xl px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-sage-700 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-sage-50 rounded-3xl">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            I am happy to address any concerns during a free 15-minute consultation.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
