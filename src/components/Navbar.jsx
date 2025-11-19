import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-white bg-blue-600 px-4 py-2 rounded"
      : "text-blue-900 hover:text-white hover:bg-blue-500 px-4 py-2 rounded";

  const navLinks = (
    <div className="flex flex-wrap gap-4">
      <Link to="/" className={linkClass("/")}>Home</Link>
      <Link to="/about" className={linkClass("/about")}>About</Link>
      <Link to="/clientDemo" className={linkClass("/clientDemo")}>Client Demo</Link>
      <Link to="/prices" className={linkClass("/prices")}>Prices</Link>
      <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
      <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
    </div>
  );

  return (
    // ⭐ Sticky navbar added here
    <nav className="sticky top-0 z-50 bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <div className="text-2xl font-bold text-blue-700">DKS</div>
          <div className="text-xs font-bold text-blue-700 -mt-1">DUMB KIDS SOCIETY</div>  {/* example */}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-blue-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col items-start gap-3">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
}
