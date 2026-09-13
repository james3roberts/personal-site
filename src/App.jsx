import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ClientDemo from "./pages/ClientDemo";
import Landing from "./pages/ClientDemo/landing"; // lowercase matches filename
import Basic from "./pages/ClientDemo/basic"; // lowercase matches filename
import ProLevel from "./pages/ClientDemo/prolevel"; // lowercase matches filename

import Privacy from "./pages/Privacy"; // matches exact casing
import Terms from "./pages/TermsPages"; // matches exact casing

import Prices from "./pages/Prices";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="p-4 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clientDemo" element={<ClientDemo />} />
          <Route path="/clientDemo/landing" element={<Landing />} />
          <Route path="/clientDemo/basic" element={<Basic />} />
          <Route path="/clientDemo/prolevel" element={<ProLevel />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
