// src/pages/Privacy.jsx
import React from "react";

/**
 * Paste this file into: src/pages/Privacy.jsx
 * Edit: replace BUSINESS_EMAIL and BUSINESS_URL below.
 */

const BUSINESS_EMAIL = "you@yourdomain.com"; // <-- replace this
const BUSINESS_URL = "https://yourdomain.com"; // <-- replace this
const LAST_UPDATED = "November 29, 2025";

export default function Privacy() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: {LAST_UPDATED}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">
          DKS Works ("we", "us", "our") respects your privacy. This Privacy Policy describes
          what information we collect, how we use it, and your options. By using {BUSINESS_URL} or
          contacting us, you agree to this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <div className="text-gray-700 space-y-2">
          <p>
            <strong>Information you provide:</strong> When you contact us or request a quote we may
            collect your name, email, phone number, business details, and any other information
            you choose to send.
          </p>
          <p>
            <strong>Automatic information:</strong> We may use analytics tools to collect technical
            data such as pages visited, device type, browser, and approximate location (city-level).
            This data helps improve the site and is not personally identifying on its own.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>To respond to quote requests and messages.</li>
          <li>To provide the services you request (website builds, setup, maintenance).</li>
          <li>To improve the website and user experience using analytics.</li>
          <li>To maintain records for business and accounting purposes.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Storage & Third Parties</h2>
        <p className="text-gray-700">
          Form submissions may be sent to our business email and may be stored in third-party
          providers (for example: Formspree, Netlify forms, Airtable, or a future CRM). We choose
          providers that follow standard security practices. We do not sell your personal data to
          advertisers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookies & Tracking</h2>
        <p className="text-gray-700">
          We may use cookies or similar technologies for analytics and site functionality. You can
          disable cookies in your browser, but some site features may not work as expected.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sharing & Legal</h2>
        <p className="text-gray-700">
          We only share data when necessary to provide services (with hosting or form providers),
          when required by law, or to prevent fraud. We will never sell your personal data to
          third-party marketers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Choices</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Request copies of your data or ask us to delete it — email {BUSINESS_EMAIL}.</li>
          <li>Disable cookies in your browser to limit tracking.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Children</h2>
        <p className="text-gray-700">This site is not intended for children under 13. We do not knowingly collect information from children.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Policy Changes</h2>
        <p className="text-gray-700">
          We may update this policy periodically. Check the "Last updated" date at the top to see
          when changes were last made.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">
          Questions or requests about this policy: <a className="text-blue-600" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>
        </p>
      </section>
    </div>
  );
}
