// import { Routes, Route } from "react-router-dom";

// // Main pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

// // Client demo pages
// import ClientDemo from "./pages/ClientDemo";
// import Landing from "./pages/ClientDemo/landing";
// import Basic from "./pages/ClientDemo/basic";
// import ProLevel from "./pages/ClientDemo/prolevel";

// // Pricing
// import Prices from "./pages/Prices";

// // Legal pages (FIXED imports)
// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";


// // Layout
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Navbar />

//       <main className="p-4 flex-grow">
//         <Routes>
//           {/* Main */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* Client Demo */}
//           <Route path="/clientDemo" element={<ClientDemo />} />
//           <Route path="/clientDemo/landing" element={<Landing />} />
//           <Route path="/clientDemo/basic" element={<Basic />} />
//           <Route path="/clientDemo/prolevel" element={<ProLevel />} />

//           {/* Prices */}
//           <Route path="/prices" element={<Prices />} />

//           {/* Legal (FIXED) */}
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/terms" element={<Terms />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ClientDemo from "./pages/ClientDemo";
import Landing from "./pages/ClientDemo/landing";   // lowercase matches filename
import Basic from "./pages/ClientDemo/basic";       // lowercase matches filename
import ProLevel from "./pages/ClientDemo/prolevel"; // lowercase matches filename

import Privacy from "./pages/Privacy"; // matches exact casing
import Terms from "./pages/TermsPages";     // matches exact casing

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
