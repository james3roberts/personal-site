import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    name: "Starter Site",
    path: "/clientDemo/landing",
    summary: "A clean, simple single-page site for one-person or small operations.",
    price: "$300–$500",
    details: `
      A streamlined single-page layout that gives customers exactly what they need:
      who you are, what you offer, and how to contact you. Perfect for solo operators
      or side businesses that need a real web presence instead of relying only on Facebook.
      Includes custom domain setup and basic SEO so new customers can find you on Google.
    `,
    anchor: "landing",
  },
  {
    name: "Business Site",
    path: "/clientDemo/basic",
    summary: "Great for businesses offering multiple services or needing more pages.",
    price: "$750–$1,200",
    details: `
      Ideal for small-to-medium companies with more than one service.
      Includes 3–5 pages such as Services, About, Contact, and Testimonials.
      This structure builds trust, improves search visibility, and gives your business
      room to grow. A strong balance of affordability and professionalism.
    `,
    anchor: "basic",
  },
  {
    name: "Pro Site",
    path: "/clientDemo/prolevel",
    summary: "A full-featured site built for growing teams and higher traffic.",
    price: "Starts at $1,500",
    details: `
      Designed for established businesses ready to level up. Add-ons may include
      galleries, team bios, job listings, quote-request forms, project portfolios,
      or blog content for SEO. This is the best option for companies wanting to
      dominate local search results and look polished to bigger clients.
    `,
    anchor: "prolevel",
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
          className="bg-white shadow-md rounded-lg mb-6 overflow-hidden border"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50"
          >
            <div>
              <h2 className="text-2xl font-semibold">{tier.name}</h2>
              <p className="text-gray-600">{tier.summary}</p>
              <p className="text-gray-800 font-semibold mt-2">{tier.price}</p>
            </div>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 border-t text-gray-700">
              <p className="mb-4">{tier.details}</p>
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
          )}
        </div>
      ))}
    </div>
  );
}
