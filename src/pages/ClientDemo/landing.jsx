import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button - Fixed at top */}
      <div className="bg-gray-100 py-3 px-4 border-b">
        <button
          onClick={() => navigate("/clientDemo")}
          className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition"
        >
          ← Back to All Demos
        </button>
        <span className="ml-4 text-sm text-gray-600">
          Demo: Starter Site ($300-$500)
        </span>
      </div>

      {/* ACTUAL DEMO SITE STARTS HERE */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Peak Heating & Air</h1>
            <p className="text-xl mb-8">Colorado Springs' Trusted HVAC Experts Since 2010</p>
            <a 
              href="tel:719-555-0123" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Call (719) 555-0123
            </a>
          </div>
        </header>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-semibold mb-2">Heating Repair</h3>
                <p className="text-gray-600">Fast, reliable furnace and heating system repairs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">❄️</div>
                <h3 className="text-xl font-semibold mb-2">AC Installation</h3>
                <p className="text-gray-600">New air conditioning systems for Colorado homes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-600">Seasonal tune-ups to keep systems running smooth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Peak Heating?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully certified HVAC technicians</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold mb-2">24/7 Emergency</h3>
                <p className="text-gray-600">Available when you need us most</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprises</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Your Free Estimate</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-lg">
                <FaPhone className="text-blue-600" />
                <a href="tel:719-555-0123" className="text-blue-600 hover:underline">
                  (719) 555-0123
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:info@peakheating.com" className="text-blue-600 hover:underline">
                  info@peakheating.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-lg">
                <FaMapMarkerAlt className="text-blue-600" />
                <span className="text-gray-700">Serving Colorado Springs & Surrounding Areas</span>
              </div>
            </div>

            <form className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border rounded"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border rounded"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border rounded"
                />
                <select className="w-full p-3 border rounded">
                  <option>Select Service Needed</option>
                  <option>Heating Repair</option>
                  <option>AC Installation</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Request Free Estimate
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4 text-center">
          <p>&copy; 2025 Peak Heating & Air | Licensed & Insured | Colorado Springs, CO</p>
        </footer>

      </div>
    </>
  );
}