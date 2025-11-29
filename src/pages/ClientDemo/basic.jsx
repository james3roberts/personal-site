import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Basic() {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className="bg-gray-100 py-3 px-4 border-b sticky top-0 z-50">
        <button
          onClick={() => navigate("/clientDemo")}
          className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition"
        >
          ← Back to All Demos
        </button>
        <span className="ml-4 text-sm text-gray-600">
          Demo: Business Site ($750-$1,200)
        </span>
      </div>

      {/* ACTUAL DEMO SITE */}
      <div className="bg-white">
        
        {/* Navigation */}
        <nav className="bg-gray-900 text-white py-4 sticky top-14 z-40">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Rocky Mountain Plumbing</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="hover:text-blue-400">Services</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#testimonials" className="hover:text-blue-400">Reviews</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
            <a href="tel:719-555-0199" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              (719) 555-0199
            </a>
          </div>
        </nav>

        {/* Hero */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Expert Plumbing Services</h1>
            <p className="text-xl mb-8">Serving Colorado Springs for Over 15 Years</p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Get Free Estimate
              </a>
              <a href="tel:719-555-0199" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
                Call Now
              </a>
            </div>
          </div>
        </header>

        {/* Services */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Emergency Plumbing", desc: "24/7 emergency repairs for burst pipes, leaks, and more", icon: "🚨" },
                { title: "Drain Cleaning", desc: "Professional drain and sewer line cleaning services", icon: "🚿" },
                { title: "Water Heater Repair", desc: "Installation and repair of all water heater types", icon: "🔥" },
                { title: "Pipe Replacement", desc: "Complete pipe repair and replacement services", icon: "🔧" },
                { title: "Fixture Installation", desc: "Sinks, toilets, faucets, and more", icon: "🚽" },
                { title: "Inspection & Maintenance", desc: "Preventive maintenance to avoid costly repairs", icon: "✓" },
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Rocky Mountain Plumbing</h2>
            <p className="text-lg text-gray-700 mb-6">
              Family-owned and operated since 2009, we've built our reputation on honest work,
              fair pricing, and treating every customer like family. Our licensed plumbers have
              over 50 years of combined experience serving homeowners and businesses throughout
              the Pikes Peak region.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700">Happy Customers</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700">Years in Business</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", text: "Fast, professional, and reasonably priced. Fixed our burst pipe within an hour of calling. Highly recommend!", rating: 5 },
                { name: "Mike T.", text: "Been using them for years. Always on time, always honest about what needs to be done. Great company.", rating: 5 },
                { name: "Jennifer R.", text: "Replaced our water heater last week. Great service from quote to completion. Very happy with the work!", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-semibold">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-blue-700 text-white py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Request Your Free Estimate</h2>
            <form className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <input type="text" placeholder="Name *" className="w-full p-3 border rounded" required />
                <input type="tel" placeholder="Phone *" className="w-full p-3 border rounded" required />
                <input type="email" placeholder="Email *" className="w-full p-3 border rounded" required />
                <select className="w-full p-3 border rounded" required>
                  <option>Select Service Needed</option>
                  <option>Emergency Repair</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater</option>
                  <option>Pipe Replacement</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your project" className="w-full p-3 border rounded h-24"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Get Free Estimate
                </button>
              </div>
            </form>
            <div className="text-center mt-8">
              <p className="text-lg mb-2">Or call us directly:</p>
              <a href="tel:719-555-0199" className="text-3xl font-bold hover:underline">(719) 555-0199</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4 text-center">
          <p>&copy; 2025 Rocky Mountain Plumbing | Licensed #CO-12345 | Insured | Colorado Springs, CO</p>
        </footer>

      </div>
    </>
  );
}