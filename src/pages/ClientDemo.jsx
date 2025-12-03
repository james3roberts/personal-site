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
    popular: true,
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
          onMouseEnter={() => setOpenIndex(index)}   // desktop hover open
          onMouseLeave={() => setOpenIndex(null)}    // desktop hover close
        >
          {/* Header */}
          <div
            className="w-full text-left px-6 py-4 flex justify-between items-center"
            onClick={() => toggle(index)} // mobile click/tap
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              <div>
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  {tier.name}
                  {tier.popular && (
                    <span className="bg-yellow-400 text-white text-xs font-bold
