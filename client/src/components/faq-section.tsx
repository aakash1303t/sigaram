import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What is the Montessori method?",
      answer: "The Montessori method is an educational approach developed by Dr. Maria Montessori that emphasizes independence, hands-on learning, and respect for a child's natural psychological development. Children learn at their own pace in a carefully prepared environment with specially designed materials."
    },
    {
      question: "What age groups do you accept?",
      answer: "We offer programs for children from 18 months to 12 years old. Our programs include Toddler (18 months - 3 years), Primary (3 - 6 years), and Elementary (6 - 12 years). Each program is specifically designed to meet the developmental needs of that age group."
    },
    {
      question: "What are your school timings?",
      answer: "Our regular school hours are from 9:00 AM to 7:00 PM, Monday through Friday."
    },
    {
      question: "Do you provide meals and snacks?",
      answer: "Yes, we provide nutritious vegetarian snacks twice a day. Parents can choose to send lunch from home or opt for our healthy lunch program featuring fresh, locally-sourced ingredients. We accommodate all dietary restrictions and allergies."
    },
    {
      question: "How do I enroll my child?",
      answer: "The enrollment process begins with scheduling a school tour. After the tour, you'll fill out an application form and attend a parent orientation. We then schedule a trial day for your child. Admission is confirmed upon completion of all paperwork and payment of admission fees."
    },
    {
      question: "Are your teachers Montessori certified?",
      answer: "Yes, all our lead teachers are AMI (Association Montessori Internationale) or AMS (American Montessori Society) certified. Our team participates in ongoing professional development to stay current with best practices in Montessori education."
    },
    {
      question: "What makes Sigaram Montessori different?",
      answer: "Beyond authentic Montessori education, we offer a warm, nurturing environment with a low student-teacher ratio, beautiful learning spaces, and a strong parent-school partnership. Our curriculum also includes cultural activities, outdoor education, and arts integration to provide a well-rounded experience."
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-20 bg-white" 
      ref={ref}
      data-testid="faq-section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="faq-subtitle">
            Find answers to common questions about our school
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary rounded-2xl px-6 border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
