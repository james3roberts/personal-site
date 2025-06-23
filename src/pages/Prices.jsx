export default function Prices() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Pricing Breakdown
      </h1>

      {/* Landing Page Pricing */}
      <section id="landing" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Landing Page</h2>
        <p className="text-gray-700 mb-2">
          Perfect for solo contractors or side businesses. A single-page build
          with contact info, service summary, and SEO setup.
        </p>
        <p className="text-lg font-bold">$300 – $500</p>
      </section>

      {/* Basic Site Pricing */}
      <section id="basic" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Basic Site</h2>
        <p className="text-gray-700 mb-2">
          Great for companies offering multiple services. 3–5 pages, including
          contact forms and service descriptions.
        </p>
        <p className="text-lg font-bold">$750 – $1,200</p>
      </section>

      {/* Pro Level Site Pricing */}
      <section id="prolevel" className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Pro Level Site</h2>
        <p className="text-gray-700 mb-2">
          Full-featured site for established teams. Add-ons like galleries,
          forms, team bios, or blog content.
        </p>
        <p className="text-lg font-bold">Starts at $1,500</p>
      </section>
    </div>
  );
}
