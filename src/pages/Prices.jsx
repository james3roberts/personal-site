// export default function Prices() {
//   return (
//     <div className="p-8 max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Website Packages & Pricing
//       </h1>

//       {/* Intro */}
//       <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
//         Every project starts with a conversation. These packages give you a clear idea of
//         what to expect — no hidden fees, no surprise upgrades. Simple, professional
//         websites built to help small businesses look sharp and get found online.
//       </p>

//       {/* Starter Site */}
//       <section className="mb-12 p-6 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-semibold mb-2">Starter Site</h2>
//         <p className="text-gray-700 mb-4">
//           Perfect for solo contractors, handymen, new small businesses, or anyone who
//           needs a clean online presence fast.
//         </p>
//         <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
//           <li>Single-page design</li>
//           <li>Mobile-friendly layout</li>
//           <li>Business info, services, contact info</li>
//           <li>Simple SEO setup</li>
//           <li>Google Business Profile integration (optional)</li>
//         </ul>
//         <p className="text-lg font-bold">$300 – $500</p>
//       </section>

//       {/* Business Site */}
//       <section className="mb-12 p-6 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-semibold mb-2">Business Site</h2>
//         <p className="text-gray-700 mb-4">
//           A more complete site for businesses offering multiple services or needing more
//           pages to explain what they do.
//         </p>
//         <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
//           <li>3–5 fully built pages</li>
//           <li>Service descriptions, photos, and contact form</li>
//           <li>Quote request form or job intake form</li>
//           <li>Improved SEO setup</li>
//           <li>Google Business Profile integration</li>
//         </ul>
//         <p className="text-lg font-bold">$750 – $1,200</p>
//       </section>

//       {/* Pro Site */}
//       <section className="mb-12 p-6 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-semibold mb-2">Pro Site</h2>
//         <p className="text-gray-700 mb-4">
//           A complete, customizable site for established businesses that need stronger
//           branding or advanced features.
//         </p>
//         <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
//           <li>5+ pages</li>
//           <li>Galleries, service pages, FAQs, team bios</li>
//           <li>Blog or update section (optional)</li>
//           <li>Advanced forms or scheduling tools</li>
//           <li>Optional automation or customer interaction tools</li>
//           <li>Stronger SEO setup</li>
//         </ul>
//         <p className="text-lg font-bold">Starts at $1,500</p>
//       </section>

//       {/* Add-ons */}
//       <section className="mb-12 p-6 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-semibold mb-4">Optional Add-Ons</h2>
//         <ul className="list-disc list-inside text-gray-600 space-y-2">
//           <li>Logo cleanup or simple redesign — <strong>$50 – $150</strong></li>
//           <li>Extra pages (beyond package) — <strong>$75 – $150 per page</strong></li>
//           <li>Photo gallery setup — <strong>$75</strong></li>
//           <li>Blog setup — <strong>$150</strong></li>
//           <li>Additional forms — <strong>$50 – $100</strong></li>
//           <li>Google Business Profile setup — <strong>$75</strong></li>
//         </ul>
//       </section>

//       {/* Hosting / Domain */}
//       <section className="mb-12 p-6 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-semibold mb-4">Hosting & Domain Costs</h2>
//         <p className="text-gray-700 mb-4">
//           These are industry-standard costs paid directly to the provider — not marked up.
//         </p>
//         <ul className="list-disc list-inside text-gray-600 space-y-2">
//           <li>
//             <strong>Domain Name:</strong> Usually{" "}
//             <strong>$12 – $20 per year</strong>
//           </li>
//           <li>
//             <strong>Hosting:</strong> Around <strong>$8 – $12 per month</strong>{" "}
//             (depending on provider)
//           </li>
//         </ul>
//         <p className="text-gray-700 mt-3">
//           I set everything up for you and walk you through ownership so you’re always in
//           full control.
//         </p>
//       </section>

//       {/* CTA */}
//       <div className="text-center mt-16">
//         <a
//           href="/contact"
//           className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
//         >
//           Get a Free Quote
//         </a>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function Prices() {
  const [packageType, setPackageType] = useState("");
  const [addons, setAddons] = useState([]);
  const [maintenance, setMaintenance] = useState("");

  // ------- PRICE TABLES -------
  const packagePrices = {
    starter: [300, 500],
    business: [750, 1200],
    pro: [1500, 1500], // fixed minimum price
  };

  const addonPrices = {
    logo: [50, 150],
    extraPages: [75, 150],
    gallery: [75, 75],
    blog: [150, 150],
    forms: [50, 100],
    gmb: [75, 75],
  };

  const maintenancePrices = {
    basic: 20,
    priority: 50,
    full: 100,
  };

  // ------- PRICE CALCULATION -------
  const calculateTotal = () => {
    let min = 0;
    let max = 0;

    if (packageType) {
      min += packagePrices[packageType][0];
      max += packagePrices[packageType][1];
    }

    addons.forEach((addon) => {
      min += addonPrices[addon][0];
      max += addonPrices[addon][1];
    });

    if (maintenance) {
      min += maintenancePrices[maintenance];
      max += maintenancePrices[maintenance];
    }

    return { min, max };
  };

  const { min, max } = calculateTotal();

  // Handle addon checkbox toggling
  const toggleAddon = (addon) => {
    setAddons((prev) =>
      prev.includes(addon)
        ? prev.filter((a) => a !== addon)
        : [...prev, addon]
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Website Packages & Pricing
      </h1>

      {/* PACKAGES */}
      <div className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Choose Your Package</h2>

        <div className="space-y-3">
          <label className="block">
            <input
              type="radio"
              name="package"
              value="starter"
              onChange={() => setPackageType("starter")}
            />{" "}
            Starter Site ($300 – $500)
          </label>

          <label className="block">
            <input
              type="radio"
              name="package"
              value="business"
              onChange={() => setPackageType("business")}
            />{" "}
            Business Site ($750 – $1,200)
          </label>

          <label className="block">
            <input
              type="radio"
              name="package"
              value="pro"
              onChange={() => setPackageType("pro")}
            />{" "}
            Pro Site (Starts at $1,500)
          </label>
        </div>
      </div>

      {/* ADDONS */}
      <div className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Optional Add-Ons</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.keys(addonPrices).map((key) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={addons.includes(key)}
                onChange={() => toggleAddon(key)}
              />
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (s) => s.toUpperCase())}
              {" — "}
              ${addonPrices[key][0]} – ${addonPrices[key][1]}
            </label>
          ))}
        </div>
      </div>

      {/* MAINTENANCE */}
      <div className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Maintenance & Support (Monthly)
        </h2>

        <label className="block">
          <input
            type="radio"
            name="maintenance"
            value="basic"
            onChange={() => setMaintenance("basic")}
          />{" "}
          Basic — $20/mo
        </label>

        <label className="block">
          <input
            type="radio"
            name="maintenance"
            value="priority"
            onChange={() => setMaintenance("priority")}
          />{" "}
          Priority — $50/mo
        </label>

        <label className="block">
          <input
            type="radio"
            name="maintenance"
            value="full"
            onChange={() => setMaintenance("full")}
          />{" "}
          Full Management — $100/mo
        </label>

        <label className="block mt-2">
          <input
            type="radio"
            name="maintenance"
            value=""
            onChange={() => setMaintenance("")}
          />{" "}
          No monthly support
        </label>
      </div>

      {/* TOTAL */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold mb-3">Estimated Total</h2>

        {min > 0 ? (
          <p className="text-xl">
            <strong>
              ${min.toLocaleString()} – ${max.toLocaleString()}
            </strong>
          </p>
        ) : (
          <p className="text-gray-500">Choose a package to see pricing</p>
        )}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href={`/contact?package=${packageType}&addons=${addons.join(
            ","
          )}&maintenance=${maintenance}&min=${min}&max=${max}`}
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
