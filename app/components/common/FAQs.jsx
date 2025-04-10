import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-[#E9D5FF] border-gray-300 rounded-2xl overflow-hidden shadow-lg transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-100 transition-colors duration-300"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <ChevronDown size={20} className="text-gray-600" />
        </motion.div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: "auto" }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: "auto" }}
          className="px-6 py-4 bg-gray-50 text-gray-700"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How do I become a partner with talentid.app?",
      answer:
        "You can contact our sales team through our website or email us at partners@talentid.app. We'd be happy to discuss your needs and how we can partner for success.",
    },
    {
      question: "Can we use talentid.app for internal recruitment as well as external hiring?",
      answer:
        "Absolutely! Talentid.app is a versatile platform that can be used for both internal and external recruitment. You can track applications and collaborate with hiring managers effectively.",
    },
    {
      question: "Do I need to pay anything to join the partner program?",
      answer: "No joining fee! It’s absolutely free.",
    },
    {
      question: "What kind of marketing materials can I expect to receive as a partner?",
      answer:
        "As a partner, you'll have access to a variety of marketing materials, including joint press releases, social media content, and branded collateral. These materials will help you promote your partnership and reach a wider audience.",
    },
  ];

  return (
    <div className=" bg-[#E9D5FF] max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

function FAQs() {
  return (
    <div className="bg-[#E9D5FF] min-h-screen flex items-center justify-center px-4">
      <FAQ />
    </div>
  );
}

export default FAQs;
