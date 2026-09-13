const BUSINESS_NAME = "JRC";
const BUSINESS_EMAIL = "jimrobertsconstruction3@gmail.com";
const BUSINESS_URL = "https://jrcwebsite.netlify.app/";
const LAST_UPDATED = "September 13, 2026";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms JRC | Colorado Springs Web Design";
  }, []);
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <p className="text-sm text-gray-600 mb-6">Last updated: {LAST_UPDATED}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Agreement</h2>

        <p className="text-gray-700">
          These Terms of Service ("Terms") describe the general terms that apply
          to services provided by {BUSINESS_NAME}. By requesting or purchasing
          services from us, you agree to the terms that apply to your project.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Services & Quotes</h2>

        <p className="text-gray-700">
          JRC provides website design, development, setup, and optional website
          maintenance services. Prices displayed on our website are intended to
          provide clear starting points and estimates based on the options
          selected. Final pricing and project scope will be confirmed in writing
          before work begins.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Payment Terms</h2>

        <p className="text-gray-700">
          Payment requirements, deposits, milestones, recurring maintenance
          charges, and other payment terms will be agreed upon in writing before
          the project begins. Work may require a deposit before development
          starts.
        </p>

        <p className="text-gray-700 mt-2">
          Recurring Website Care services are billed separately according to the
          plan selected and the terms agreed upon with the client.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Client Responsibilities</h2>

        <p className="text-gray-700">
          Clients are responsible for providing accurate business information,
          content, images, approvals, and other materials needed to complete
          their project. Delays in receiving required materials or approvals may
          affect the project timeline.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ownership & Deliverables</h2>

        <p className="text-gray-700">
          Ownership and use of website files, content, graphics, and other
          deliverables will be determined by the project agreement. Third-party
          software, services, fonts, plugins, images, and other licensed
          materials remain subject to their respective licenses and terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Maintenance & Support</h2>

        <p className="text-gray-700">
          Website Care and other ongoing maintenance services are optional
          unless otherwise agreed in writing. The services included in a
          maintenance plan will be based on the plan selected and may include
          updates, backups, monitoring, minor changes, and other support as
          described on the pricing page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>

        <p className="text-gray-700">
          Websites may rely on third-party services such as hosting providers,
          domain registrars, form services, analytics platforms, payment
          processors, or other software. These services may have their own
          terms, fees, availability, and privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>

        <p className="text-gray-700">
          To the fullest extent permitted by applicable law, {BUSINESS_NAME}
          will not be liable for indirect, incidental, special, or consequential
          damages arising from services or the use or inability to use a
          website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Termination</h2>

        <p className="text-gray-700">
          Either party may terminate a project or ongoing service according to
          the terms agreed upon in writing. Any payment obligations for work
          already completed or services already provided remain due according to
          the applicable agreement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>

        <p className="text-gray-700">
          These Terms are governed by the laws applicable in the State of
          Colorado, unless otherwise required by applicable law or agreed upon
          in writing.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>

        <p className="text-gray-700">
          Questions about these Terms can be sent to{" "}
          <a
            className="text-blue-600 hover:underline"
            href={`mailto:${BUSINESS_EMAIL}`}
          >
            {BUSINESS_EMAIL}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
