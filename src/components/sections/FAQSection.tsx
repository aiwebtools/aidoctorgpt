
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

const FAQSection = () => {
  const faqItems = [
    {
      question: "Is Doctor GPT a replacement for a real doctor?",
      answer: "Doctor GPT is designed to be a supplementary healthcare tool, not a replacement for professional medical care. While it provides valuable information and guidance, it's important to consult with a licensed healthcare provider for serious or persistent medical issues."
    },
    {
      question: "How accurate are the diagnoses?",
      answer: "Doctor GPT utilizes advanced AI trained on extensive medical literature to provide informed suggestions. However, like any diagnostic tool, it isn't 100% accurate. The app provides potential diagnoses and recommends further medical evaluation when appropriate."
    },
    {
      question: "Is my medical information secure?",
      answer: "Yes, we take your privacy seriously. All your medical information is encrypted and securely stored. We adhere to HIPAA compliance standards and never share your personal health information with third parties without your explicit consent."
    },
    {
      question: "Can I upload images of my condition?",
      answer: "Yes, Doctor GPT allows you to upload images of visible conditions like rashes, injuries, or other symptoms. The AI analyzes these images to assist in providing more accurate diagnostic suggestions."
    },
    {
      question: "What types of conditions can Doctor GPT help with?",
      answer: "Doctor GPT can provide information and guidance on a wide range of common medical conditions, from minor ailments like colds and allergies to more complex issues. However, for emergency situations or serious health concerns, always seek immediate professional medical attention."
    },
    {
      question: "How does the holistic treatment recommendation work?",
      answer: "In addition to conventional medical treatments, Doctor GPT suggests evidence-based holistic approaches when appropriate, including lifestyle modifications, dietary changes, stress management techniques, and natural remedies that may complement traditional treatments."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-medical-100 text-medical-700 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-medical-500 mr-2"></span>
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Get answers to common questions about Doctor GPT's capabilities, accuracy, and safety features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white shadow-soft rounded-xl">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                <AccordionTrigger className="px-4 text-neutral-700 hover:text-medical-600 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-neutral-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
