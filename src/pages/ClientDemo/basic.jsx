import { useNavigate } from "react-router-dom";

export default function Basic() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/clientDemo")}
        className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← Back to Demos
      </button>

      {/* Fake Navbar */}
      <nav className="flex justify-center space-x-6 text-blue-600 underline text-sm mb-8">
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Header / Hero Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          Solid Ground Plumbing and HVAC
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This demo represents a typical basic website. Ideal for small to
          mid-size companies offering multiple services, with space to grow and
          connect with customers.
        </p>
      </header>

      {/* Services Section */}
      <section id="services">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Drain Cleaning</li>
          <li>Emergency Plumbing</li>
          <li>Pipe Repair & Replacement</li>
          <li>HVAC System Tune-Ups</li>
          <li>Furnace Repair</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
        <p className="text-gray-700 mb-4">
          A few examples of past projects (real images would be here).
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 h-32 rounded">Before Image</div>
          <div className="bg-gray-300 h-32 rounded">After Image</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">We’d love to hear from you!</p>
        <form className="space-y-4 max-w-md">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <textarea
            className="w-full p-2 border rounded"
            placeholder="How can we help?"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
