// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow p-6 text-gray-600 text-sm mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-3">

        {/* LOGO */}
        <Link to="/" className="flex flex-col items-center group select-none">
          <div className="text-xl font-bold text-blue-700 tracking-tight">
            DKS
          </div>
          <div
            className="
              text-[7px]        /* tiny text */
              font-semibold
              text-gray-900
              opacity-20       /* looks like a faint black line */
              group-hover:opacity-40
              transition
              tracking-widest
            "
          >
            DUMBKIDSSOCIETY
          </div>
        </Link>

        {/* LINKS */}
        <div className="flex space-x-4">
          <Link to="/privacy" className="hover:text-blue-700 transition">
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/terms" className="hover:text-blue-700 transition">
            Terms of Service
          </Link>
          <span className="text-gray-400">|</span>
          <button
            className="hover:text-blue-700 transition"
            onClick={() => {
              // This event triggers the cookie banner to re-open
              const event = new Event("openCookieSettings");
              window.dispatchEvent(event);
            }}
          >
            Cookie Settings
          </button>
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-xs mt-1">
          © {new Date().getFullYear()} DKS Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
