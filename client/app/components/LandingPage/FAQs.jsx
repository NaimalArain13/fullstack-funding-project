import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How Can I Make a Donation?",
    answer: "You can make a donation by clicking the Donate button and selecting your preferred payment method.",
  },
  {
    question: "Is My Donation Tax-Deductible?",
    answer: "Yes, donations are tax-deductible. You will receive a receipt for your contribution.",
  },
  {
    question: "Can I Donate In Honor or Memory of Someone?",
    answer: "Absolutely, you can dedicate your donation in honor or memory of someone special.",
  },
  {
    question: "How Will My Donation Be Used?",
    answer: "Your donation will be used to fund projects and initiatives that create real impact.",
  },
  {
    question: "Can I Set Up a Recurring Donation?",
    answer: "Yes, you can set up a monthly donation to continue supporting our work.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span>
                {activeIndex === index ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
