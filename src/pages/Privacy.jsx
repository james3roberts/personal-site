const BUSINESS_NAME = "JRC";
const BUSINESS_EMAIL = "jimrobertsconstruction3@gmail.com";
const BUSINESS_URL = "https://jrcwebsite.netlify.app/";
const LAST_UPDATED = "September 13, 2026";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy JRC | Colorado Springs Web Design";
  }, []);
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="text-sm text-gray-600 mb-6">Last updated: {LAST_UPDATED}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">
          {BUSINESS_NAME} ("we", "us", or "our") respects your privacy. This
          Privacy Policy explains what information we may collect through our
          website and contact forms, how we use that information, and the
          choices available to you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>

        <div className="text-gray-700 space-y-2">
          <p>
            <strong>Information you provide:</strong> When you contact us or
            request a quote, you may provide information such as your name,
            email address, phone number, business information, project details,
            and any other information you choose to send.
          </p>

          <p>
            <strong>Website information:</strong> We may collect basic technical
            information about how visitors use the website, such as pages
            visited, device type, browser type, and general usage information.
            This information may be collected through analytics or similar
            technologies when those services are enabled.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>To respond to questions, messages, and quote requests.</li>
          <li>
            To communicate with you about requested website services or
            projects.
          </li>
          <li>To provide and maintain services you purchase from us.</li>
          <li>To improve our website and user experience.</li>
          <li>To maintain reasonable business and accounting records.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Forms, Hosting, and Third Parties
        </h2>

        <p className="text-gray-700">
          Information submitted through our website may be processed or stored
          by third-party services used to operate the website, deliver form
          submissions, provide hosting, or provide analytics. These services may
          include our hosting provider, form-processing services, email
          providers, analytics providers, or other services we add in the
          future.
        </p>

        <p className="text-gray-700 mt-2">
          We do not sell your personal information to third-party marketers.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookies & Analytics</h2>

        <p className="text-gray-700">
          We may use cookies or similar technologies for website functionality,
          analytics, and understanding how visitors use the site. If analytics
          or other tracking services are enabled, additional information about
          those services and available choices will be provided through our
          cookie settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sharing Information</h2>

        <p className="text-gray-700">
          We may share information with service providers that help us operate
          the website or provide services to you. We may also disclose
          information when required by law, to protect our rights, or to help
          prevent fraud or abuse.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Choices</h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            You may contact us to request access to or deletion of personal
            information we have collected from you, subject to applicable law.
          </li>
          <li>
            You may manage available cookie or analytics preferences through our
            Cookie Settings when those controls are enabled.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Children</h2>

        <p className="text-gray-700">
          Our website is not directed toward children under 13, and we do not
          knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Policy Changes</h2>

        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. The "Last
          updated" date at the top of this page will be updated when material
          changes are made.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>

        <p className="text-gray-700">
          Questions or privacy requests can be sent to{" "}
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
