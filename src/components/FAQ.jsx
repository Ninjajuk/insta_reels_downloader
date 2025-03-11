import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How to download Instagram videos using SnapInsta?",
      answer: "Simply paste the Instagram video URL into the input box and click 'Download Now'.",
    },
    {
      question: "Is SnapInsta free to use?",
      answer: "Yes! SnapInsta is completely free and does not require registration.",
    },
    {
      question: "Can I download private Instagram videos?",
      answer: "No, SnapInsta only allows downloading public videos as per Instagram's policies.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-8 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold  text-center">Frequently Asked Questions</h2>
      <div className="mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full text-left p-4 flex justify-between items-center "
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && <p className="p-4 text-gray-400">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
