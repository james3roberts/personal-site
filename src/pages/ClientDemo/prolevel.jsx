import { useNavigate } from "react-router-dom";

export default function ProLevel() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/clientDemo")}
        className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← Back to Demos
      </button>

      {/* Fake Navbar */}
      <nav className="flex justify-center space-x-6 text-blue-600 underline text-sm mb-8">
        <a href="#consulting">Consulting</a>
        <a href="#framing">Framing</a>
        <a href="#contact">Contact</a>
        <a href="#home"> More...</a>
      </nav>

      {/* Hero / Intro */}
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          NextGen Construction Solutions
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Designed for growing teams and established companies, this
          full-featured site gives you space to show off your expertise,
          highlight your team, and attract higher-value leads. More pages,
          better SEO, and smarter structure means more conversions and more
          calls from real customers.
        </p>
      </header>

      {/* Consulting Section */}
      <section id="consulting">
        <h2 className="text-3xl font-semibold mb-4">
          Design & Consultation Services
        </h2>
        <p className="text-gray-700">
          We offer walkthroughs and design support to help you plan, permit, and
          execute your own basement finish, remodel, or addition. You decide
          what you want to handle — we’ll help with everything else.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Permit-ready drawings</li>
          <li>Scope & cost planning</li>
          <li>Construction coaching</li>
        </ul>
      </section>

      {/* Framing Section */}
      <section id="framing">
        <h2 className="text-3xl font-semibold mb-4">Framing & Construction</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Basement Finishes{" "}
            <span className="italic">(with its own dedicated page)</span>
          </li>
          <li>
            Kitchen & Bath Remodels{" "}
            <span className="italic">(with its own dedicated page)</span>
          </li>
          <li>
            Decks, Roofing, Windows, Siding{" "}
            <span className="italic">(each service has space to shine)</span>
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          This level is meant to grow with you — whether you’re showcasing a
          crew, building trust with client testimonials, or posting project
          updates.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-4">
          Ready to talk about what you need or how a website can support your
          business? Let’s start a conversation.
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:contact@nextgenbuilds.com"
            className="underline text-blue-600"
          >
            contact@nextgenbuilds.com
          </a>
        </p>
        <p className="text-gray-700">Phone: (555) 987-6543</p>
      </section>
    </div>
  );
}
