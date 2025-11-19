export default function Prices() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Website Packages & Pricing
      </h1>

      {/* Intro */}
      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
        Every project starts with a conversation. These packages give you a clear idea of
        what to expect — no hidden fees, no surprise upgrades. Simple, professional
        websites built to help small businesses look sharp and get found online.
      </p>

      {/* Starter Site */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Starter Site</h2>
        <p className="text-gray-700 mb-4">
          Perfect for solo contractors, handymen, new small businesses, or anyone who
          needs a clean online presence fast.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>Single-page design</li>
          <li>Mobile-friendly layout</li>
          <li>Business info, services, contact info</li>
          <li>Simple SEO setup</li>
          <li>Google Business Profile integration (optional)</li>
        </ul>
        <p className="text-lg font-bold">$300 – $500</p>
      </section>

      {/* Business Site */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Business Site</h2>
        <p className="text-gray-700 mb-4">
          A more complete site for businesses offering multiple services or needing more
          pages to explain what they do.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>3–5 fully built pages</li>
          <li>Service descriptions, photos, and contact form</li>
          <li>Quote request form or job intake form</li>
          <li>Improved SEO setup</li>
          <li>Google Business Profile integration</li>
        </ul>
        <p className="text-lg font-bold">$750 – $1,200</p>
      </section>

      {/* Pro Site */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Pro Site</h2>
        <p className="text-gray-700 mb-4">
          A complete, customizable site for established businesses that need stronger
          branding or advanced features.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          <li>5+ pages</li>
          <li>Galleries, service pages, FAQs, team bios</li>
          <li>Blog or update section (optional)</li>
          <li>Advanced forms or scheduling tools</li>
          <li>Optional automation or customer interaction tools</li>
          <li>Stronger SEO setup</li>
        </ul>
        <p className="text-lg font-bold">Starts at $1,500</p>
      </section>

      {/* Add-ons */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Optional Add-Ons</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Logo cleanup or simple redesign — <strong>$50 – $150</strong></li>
          <li>Extra pages (beyond package) — <strong>$75 – $150 per page</strong></li>
          <li>Photo gallery setup — <strong>$75</strong></li>
          <li>Blog setup — <strong>$150</strong></li>
          <li>Additional forms — <strong>$50 – $100</strong></li>
          <li>Google Business Profile setup — <strong>$75</strong></li>
        </ul>
      </section>

      {/* Hosting / Domain */}
      <section className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Hosting & Domain Costs</h2>
        <p className="text-gray-700 mb-4">
          These are industry-standard costs paid directly to the provider — not marked up.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <strong>Domain Name:</strong> Usually{" "}
            <strong>$12 – $20 per year</strong>
          </li>
          <li>
            <strong>Hosting:</strong> Around <strong>$8 – $12 per month</strong>{" "}
            (depending on provider)
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          I set everything up for you and walk you through ownership so you’re always in
          full control.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
