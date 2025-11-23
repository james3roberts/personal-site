import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const tiers = [
  {
    name: "Starter Site",
    path: "/clientDemo/landing",
    summary: "A clean, simple single-page site for one-person or small operations.",
    price: "$300–$500",
    details: [
      "Who you are, what you offer, and how to contact you",
      "Custom domain setup",
      "Basic SEO setup",
      "Mobile-friendly layout",
      "Quick load times for customers",
    ],
    anchor: "landing",
    popular: false,
  },
  {
    name: "Business Site",
    path: "/clientDemo/basic",
    summary: "Great for businesses offering multiple services or needing more pages.",
    price: "$750–$1,200",
    details: [
      "3–5 fully built pages: Services, About, Contact, Testimonials",
      "Service descriptions with images",
      "Quote request or job intake form",
      "Improved SEO setup",
      "Google Business Profile integration",
    ],
    anchor: "basic",
    popular: true, // Most popular badge
  },
  {
    name: "Pro Site",
    path: "/clientDemo/prolevel",
    summary: "A full-featured site built for growing teams and higher traffic.",
    price: "Starts at $1,500",
    details: [
      "5+ pages with advanced layout options",
      "Galleries, service pages, FAQs, team bios",
      "Blog or update section for SEO",
      "Advanced forms or scheduling tools",
      "Optional automation or customer interaction tools",
    ],
    anchor: "prolevel",
    popular: false,
  },
];

export default function ClientDemo() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Client Demos</h1>

      {tiers.map((tier, index) => (
        <div
          key={tier.name}
          className="bg-white shadow-md rounded-lg mb-6 overflow-hidden border group cursor-pointer transition-all hover:shadow-lg hover:bg-gray-50"
        >
          {/* Header */}
          <div
            className="w-full text-left px-6 py-4 flex justify-between items-center"
            onClick={() => toggle(index)} // Mobile tap
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  {tier.name}
                  {tier.popular && (
                    <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </h2>
                <p className="text-gray-600">{tier.summary}</p>
                <p className="text-gray-800 font-semibold mt-2">{tier.price}</p>
              </div>
            </div>
            <span
              className={`text-xl transform transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>

          {/* Hover / Tap Details with fade + slide */}
          <div
            className={`px-6 border-t text-gray-700 overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-[500px] opacity-100 translate-y-0 py-4"
                : "max-h-0 opacity-0 -translate-y-4 py-0"
            }`}
          >
            {/* Screenshot placeholder (commented out for now) */}
            {/*
            <div className="mb-4">
              <img
                src={`/images/${tier.anchor}-demo.png`}
                alt={`${tier.name} screenshot`}
                className="w-full rounded shadow"
              />
            </div>
            */}
            <ul className="list-disc list-inside mb-4">
              {tier.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <button
                onClick={() => navigate(tier.path)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Demo
              </button>
              <a
                href={`/prices#${tier.anchor}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View pricing for this tier →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
