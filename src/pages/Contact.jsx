import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  
  const searchParams = new URLSearchParams(location.search);
  const packageType = searchParams.get("package");
  const addons = searchParams.get("addons") ? searchParams.get("addons").split(",") : [];
  const maintenance = searchParams.get("maintenance");
  const min = searchParams.get("min");
  const max = searchParams.get("max");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (packageType) {
      let msg = `I am interested in the following package:\n\n`;
      msg += `Package: ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}\n`;
      if (addons.length) {
        msg += `Add-Ons: ${addons.map(a => a.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())).join(", ")}\n`;
      }
      if (maintenance) {
        msg += `Maintenance: ${maintenance.charAt(0).toUpperCase() + maintenance.slice(1)}\n`;
      }
      msg += `Estimated Total: $${Number(min).toLocaleString()} – $${Number(max).toLocaleString()}\n\n`;
      msg += `Additional details:`;
      setMessage(msg);
    }
  }, [packageType, addons, maintenance, min, max]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/myzjneza", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        // Scroll to top to see success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      alert("Something went wrong. Please try emailing me directly at jim@dksworks.com");
    }
  };

  // Show success message after submission
  if (submitted) {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-4 text-green-800">Message Sent!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Thanks for reaching out! I'll get back to you within 24 hours.
          </p>
          <p className="text-gray-600 mb-6">
            Need faster response? Call me directly:{" "}
            <a href="tel:719-555-0123" className="text-blue-600 font-bold hover:underline">
              (719) 555-0123
            </a>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Let's Talk About Your Project</h1>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form below and I'll get back to you within 24 hours
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="(719) 555-0123"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
            What type of project do you need? *
          </label>
          <select
            id="project"
            name="project"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select project type...</option>
            <option value="starter">Starter Site ($300-$500)</option>
            <option value="business">Business Site ($750-$1,200)</option>
            <option value="pro">Pro Site ($1,500+)</option>
            <option value="not-sure">Not Sure Yet</option>
            <option value="maintenance">Website Maintenance/Updates</option>
            <option value="question">Just Have a Question</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Tell me about your project *
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            required
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What do you need help with? Any specific features or timeline?"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
        >
          Send Message
        </button>

        <p className="text-xs text-center text-gray-500">
          I typically respond within 24 hours. Need faster? Call{" "}
          <a href="tel:719-555-0123" className="text-blue-600 hover:underline">
            (719) 555-0123
          </a>
        </p>
      </form>

      {/* Alternative Contact Methods */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-center">Other Ways to Reach Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold mb-2">Call or Text</h3>
            <a href="tel:719-555-0123" className="text-blue-600 text-lg hover:underline">
              (719) 555-0123
            </a>
            <p className="text-sm text-gray-600 mt-1">Mon-Fri 8AM-6PM</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl mb-2">✉️</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:jim@dksworks.com" className="text-blue-600 text-lg hover:underline break-all">
              jim@dksworks.com
            </a>
            <p className="text-sm text-gray-600 mt-1">24-hour response</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            📍 Based in Colorado Springs, CO<br />
            <span className="text-sm">Available for local and remote projects</span>
          </p>
        </div>
      </div>
    </div>
  );
}