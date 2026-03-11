import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Is Citrus Burn suitable for men and women?",
    a: "Yes, Citrus Burn is formulated for both men and women seeking natural metabolic support."
  },
  {
    q: "How long does it take to notice results with Citrus Burn?",
    a: "Results vary, but many users report noticing improved energy and appetite balance within a few weeks of consistent use."
  },
  {
    q: "Can Citrus Burn be taken daily?",
    a: "Yes, Citrus Burn is designed for daily use as part of a healthy routine."
  },
  {
    q: "Does Citrus Burn contain stimulants?",
    a: "No, Citrus Burn is stimulant-free and does not rely on artificial energy boosters."
  },
  {
    q: "Is Citrus Burn non-GMO?",
    a: "Yes, Citrus Burn is made with non-GMO ingredients."
  },
  {
    q: "Do I need to follow a strict diet with Citrus Burn?",
    a: "No strict diet is required, but a balanced diet and healthy lifestyle will enhance the benefits of Citrus Burn."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Citrus Burn FAQ: Your Most Common Questions Answered!</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 text-gray-700">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
