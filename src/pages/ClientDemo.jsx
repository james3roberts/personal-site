import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    name: "Starter Site",

    path: "/clientDemo/landing",

    summary: "Perfect for simple, one-person operations.",
    price: "$300–$500",
    details: `This single-page layout is perfect for small 
    businesses that need a clean, simple web presence. 
    Whether you're a one-person crew or a side hustle looking
    to grow, a landing page gives customers a quick overview
    of who you are, what you do, and how to reach you. It's fast 
    to build, easy to maintain, and affordable — plus it's a big 
    step up from just having a Facebook page. A custom domain and SEO 
    setup make it easier for new customers to find you on Google.`,
    anchor: "landing",
  },
  {
    name: "Business Site",
    path: "/clientDemo/basic",
    summary: "Best for businesses offering multiple services.",
    price: "$600–$1,000",
    details: `This option is ideal for small-to-medium companies 
    offering more than one service or needing room to grow. You’ll 
    get separate pages for things like services, contact, and 
    testimonials — which builds trust and improves how search 
    engines rank your site. It’s still a lightweight build, but 
    it gives you more space to explain what you do and how you do it. 
    This level strikes a balance between keeping costs low and showing 
    customers you're serious.`,
    anchor: "basic",
  },
  {
    name: "Pro Site",
    path: "/clientDemo/prolevel",
    summary: "For teams ready to grow or look more professional.",
    price: "$1,200–$2,000+",
    details: `Designed for growing companies or established teams, 
    this full-featured site gives you room to showcase everything you offer. 
    Think multiple services, team bios, job listings, quote request forms, 
    before-and-after galleries, or even blog content for SEO. It’s ideal for 
    businesses who want to dominate local search results and win the trust of 
    bigger clients. It takes more time to build, but the investment pays off by 
    bringing in more leads and making your business look polished and professional.`,
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
                  See pricing for this option →
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
