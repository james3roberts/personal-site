import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ClientDemo from "./pages/ClientDemo";
import Landing from "./pages/ClientDemo/landing";
import Basic from "./pages/ClientDemo/basic";
import ProLevel from "./pages/clientDemo/ProLevel";

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
          <Route path="/clientDemo/ProLevel" element={<ProLevel />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
