// src/pages/Terms.jsx
import React from "react";

/**
 * Paste this file into: src/pages/Terms.jsx
 * Edit BUSINESS_NAME, BUSINESS_EMAIL, and BUSINESS_URL below.
 */

const BUSINESS_NAME = "DKS Works"; // <-- replace if needed
const BUSINESS_EMAIL = "you@yourdomain.com"; // <-- replace this
const BUSINESS_URL = "https://yourdomain.com"; // <-- replace this
const LAST_UPDATED = "November 29, 2025";

export default function Terms() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: {LAST_UPDATED}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Agreement</h2>
        <p className="text-gray-700">
          These Terms of Service ("Terms") govern the use of services provided by {BUSINESS_NAME}
          through {BUSINESS_URL}. By requesting services or using the site you accept these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Services & Quotes</h2>
        <p className="text-gray-700">
          We provide website design, development, hosting setup, and optional maintenance. Quotes
          provided on the site are estimates. Final price will be confirmed in writing (email or
          contract) before work begins.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>
        <p className="text-gray-700">
          Standard payment schedule:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>50% upfront to begin the project</li>
          <li>25% at the halfway point</li>
          <li>25% on completion before final delivery</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Payment methods accepted: credit card, PayPal, or bank transfer (arrangements may vary).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Client Responsibilities</h2>
        <p className="text-gray-700">
          Clients must provide timely content, images, and approvals. Delays in client-provided
          content may result in adjusted timelines or additional fees.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ownership & Deliverables</h2>
        <p className="text-gray-700">
          Upon final payment, clients receive ownership of the delivered website files and content,
          except for third-party licenses (fonts, plugins) which remain governed by their own terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Maintenance & Support</h2>
        <p className="text-gray-700">
          Ongoing maintenance services are optional and billed separately. Maintenance plans may
          include backups, updates, and monitoring as described on the pricing page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="text-gray-700">
          To the fullest extent permitted by law, {BUSINESS_NAME} will not be liable for indirect,
          incidental, or consequential damages arising from the use or inability to use services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Termination</h2>
        <p className="text-gray-700">
          Either party may terminate services according to the terms agreed in writing. Any work
          already performed will be billed proportionally.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
        <p className="text-gray-700">
          These Terms are governed by the laws of the jurisdiction where {BUSINESS_NAME} operates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">
          For questions about these Terms, email <a className="text-blue-600" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a>.
        </p>
      </section>
    </div>
  );
}
