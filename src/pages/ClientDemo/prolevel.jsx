import { useNavigate } from "react-router-dom";
import { FaStar, FaHardHat, FaUsers, FaTools, FaAward, FaChevronRight } from "react-icons/fa";

export default function ProLevel() {
  const navigate = useNavigate();

  return (
    <>
      {/* Back Button */}
      <div className="bg-gray-900 py-3 px-4 border-b border-gray-700 sticky top-0 z-50">
        <button
          onClick={() => navigate("/clientDemo")}
          className="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition"
        >
          ← Back to All Demos
        </button>
        <span className="ml-4 text-sm text-gray-400">
          Demo: Pro Site (Starts at $1,500)
        </span>
      </div>

      {/* ACTUAL PRO DEMO SITE */}
      <div className="bg-white">
        
        {/* Advanced Navigation */}
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 sticky top-14 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaHardHat className="text-yellow-400 text-2xl" />
              <div className="text-2xl font-bold">Elevation Builders</div>
            </div>
            <div className="hidden lg:flex space-x-8 text-sm font-medium">
              <a href="#services" className="hover:text-yellow-400 transition">Services</a>
              <a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a>
              <a href="#team" className="hover:text-yellow-400 transition">Our Team</a>
              <a href="#process" className="hover:text-yellow-400 transition">Our Process</a>
              <a href="#testimonials" className="hover:text-yellow-400 transition">Reviews</a>
              <a href="#blog" className="hover:text-yellow-400 transition">Blog</a>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </div>
            <a 
              href="tel:719-555-0299" 
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              (719) 555-0299
            </a>
          </div>
        </nav>

        {/* Premium Hero Section */}
        <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  Award-Winning Construction
                </div>
                <h1 className="text-6xl font-bold mb-6 leading-tight">
                  Building Colorado's Finest Custom Homes
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  From luxury remodels to ground-up builds, we bring 25 years of 
                  craftsmanship and innovation to every project in the Pikes Peak region.
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
                    Start Your Project
                  </a>
                  <a href="#portfolio" className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition">
                    View Portfolio
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-gray-700/50 backdrop-blur p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
                      <div className="text-sm text-gray-300">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">25</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">$50M+</div>
                      <div className="text-sm text-gray-300">Total Value Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                      <div className="text-sm text-gray-300">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Services Section - Advanced Layout */}
        <section id="services" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive construction solutions for residential and commercial projects
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Home Building",
                  desc: "Ground-up construction of luxury custom homes designed to your exact specifications",
                  features: ["Architectural planning", "Premium materials", "Energy-efficient design"],
                  icon: "🏠"
                },
                {
                  title: "Major Renovations",
                  desc: "Complete home transformations including kitchen, bath, and whole-house remodels",
                  features: ["3D design mockups", "Project management", "Licensed contractors"],
                  icon: "🔨"
                },
                {
                  title: "Commercial Build-Outs",
                  desc: "Professional office and retail space construction and renovation services",
                  features: ["Code compliance", "ADA accessibility", "Fast turnaround"],
                  icon: "🏢"
                },
                {
                  title: "Basement Finishing",
                  desc: "Transform unfinished basements into functional living spaces with full permits",
                  features: ["Egress windows", "Full bathrooms", "Home theaters"],
                  icon: "🛋️"
                },
                {
                  title: "Exterior Services",
                  desc: "Roofing, siding, decks, and outdoor living spaces built to last Colorado weather",
                  features: ["Impact-resistant materials", "Warranty included", "Licensed roofers"],
                  icon: "🏗️"
                },
                {
                  title: "Design Consultation",
                  desc: "Professional design services and construction planning for DIY or contractor projects",
                  features: ["Permit-ready drawings", "Material sourcing", "Budget planning"],
                  icon: "📐"
                },
              ].map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <FaChevronRight className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="text-yellow-600 font-semibold hover:underline flex items-center gap-2">
                    Learn More <FaChevronRight />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section id="portfolio" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Recent Projects</h2>
              <p className="text-xl text-gray-600">See the quality and craftsmanship we bring to every build</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Luxury Kitchen Remodel - Broadmoor", type: "Residential", value: "$85K" },
                { title: "Custom Mountain Home - Woodland Park", type: "New Construction", value: "$1.2M" },
                { title: "Office Build-Out - Downtown", type: "Commercial", value: "$150K" },
                { title: "Master Suite Addition - Old North End", type: "Addition", value: "$120K" },
                { title: "Full Basement Finish - Briargate", type: "Residential", value: "$65K" },
                { title: "Exterior Renovation - Manitou Springs", type: "Exterior", value: "$95K" },
              ].map((project, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className="bg-gradient-to-br from-gray-400 to-gray-600 h-80 flex items-end p-6 relative">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                    <div className="relative z-10 text-white">
                      <div className="text-xs font-bold bg-yellow-400 text-gray-900 inline-block px-3 py-1 rounded-full mb-2">
                        {project.type}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-200">Project Value: {project.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="#contact" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition">
                View Full Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-400">Experienced professionals dedicated to your project's success</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Mike Johnson", role: "Owner & Master Builder", exp: "30 years" },
                { name: "Sarah Chen", role: "Project Manager", exp: "15 years" },
                { name: "David Martinez", role: "Lead Carpenter", exp: "20 years" },
                { name: "Lisa Thompson", role: "Interior Designer", exp: "12 years" },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="bg-gray-700 w-48 h-48 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaUsers className="text-6xl text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-400 font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.exp} experience</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">From concept to completion, we make building easy</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Consultation", desc: "Free in-home consultation and project assessment" },
                { step: "2", title: "Design", desc: "3D renderings and detailed plans for your approval" },
                { step: "3", title: "Permit", desc: "We handle all permits and inspections" },
                { step: "4", title: "Build", desc: "Professional construction with daily updates" },
                { step: "5", title: "Warranty", desc: "5-year warranty on all workmanship" },
              ].map((phase, i) => (
                <div key={i} className="text-center relative">
                  <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Client Reviews</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  name: "Robert & Jennifer M.", 
                  project: "Kitchen Remodel",
                  text: "Elevation Builders transformed our outdated kitchen into a stunning modern space. The attention to detail and professionalism was outstanding. Worth every penny!",
                  rating: 5
                },
                {
                  name: "Mark Thompson",
                  project: "Custom Home Build",
                  text: "Built our dream home from the ground up. Mike and his team were incredible - on time, on budget, and the quality is exceptional. Highly recommend!",
                  rating: 5
                },
                {
                  name: "Sarah Chen",
                  project: "Basement Finish",
                  text: "Turned our dark unfinished basement into a beautiful living space with a full bathroom and home theater. Process was smooth and results exceeded expectations.",
                  rating: 5
                },
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.project}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-block bg-white px-8 py-4 rounded-lg shadow">
                <div className="flex items-center gap-4">
                  <FaAward className="text-yellow-400 text-3xl" />
                  <div className="text-left">
                    <div className="font-bold text-2xl">4.9/5.0</div>
                    <div className="text-sm text-gray-600">Average Rating (120+ Reviews)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Latest Updates</h2>
              <p className="text-xl text-gray-600">Tips, trends, and insights from our team</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "5 Kitchen Trends for 2025",
                  date: "Dec 15, 2024",
                  excerpt: "Discover the hottest kitchen design trends taking Colorado Springs by storm this year..."
                },
                {
                  title: "Planning Your Basement Finish",
                  date: "Dec 8, 2024",
                  excerpt: "Everything you need to know about permits, egress windows, and maximizing your space..."
                },
                {
                  title: "Choosing the Right Contractor",
                  date: "Nov 30, 2024",
                  excerpt: "10 questions to ask before hiring a construction company for your next project..."
                },
              ].map((post, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-48"></div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href="#" className="text-yellow-600 font-semibold hover:underline flex items-center gap-2">
                      Read More <FaChevronRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-4 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-12 text-gray-300">
              Let's discuss your vision and how we can bring it to life. Free consultations and estimates.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Call Us</h3>
                <a href="tel:719-555-0299" className="text-3xl font-bold text-yellow-400 hover:text-yellow-300">
                  (719) 555-0299
                </a>
                <p className="text-sm text-gray-400 mt-2">Mon-Fri 7AM-6PM</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Email Us</h3>
                <a href="mailto:info@elevationbuilders.com" className="text-xl text-yellow-400 hover:text-yellow-300 break-all">
                  info@elevationbuilders.com
                </a>
                <p className="text-sm text-gray-400 mt-2">24-hour response time</p>
              </div>
            </div>
            
            <form className="bg-white text-gray-900 p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Your Free Consultation</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name *" className="p-4 border-2 rounded-lg" required />
                <input type="text" placeholder="Last Name *" className="p-4 border-2 rounded-lg" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input type="tel" placeholder="Phone *" className="p-4 border-2 rounded-lg" required />
                <input type="email" placeholder="Email *" className="p-4 border-2 rounded-lg" required />
              </div>
              <select className="w-full p-4 border-2 rounded-lg mb-4" required>
                <option>Select Project Type</option>
                <option>Custom Home Build</option>
                <option>Major Renovation</option>
                <option>Kitchen Remodel</option>
                <option>Bathroom Remodel</option>
                <option>Basement Finish</option>
                <option>Exterior Work</option>
                <option>Commercial Project</option>
                <option>Design Consultation</option>
              </select>
              <textarea placeholder="Tell us about your project..." className="w-full p-4 border-2 rounded-lg h-32 mb-4"></textarea>
              <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
                Get Your Free Consultation
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting, you agree to be contacted about your project. We respect your privacy.
              </p>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FaHardHat className="text-yellow-400 text-2xl" />
                  <div className="text-xl font-bold">Elevation Builders</div>
                </div>
                <p className="text-gray-400 text-sm">
                  Colorado's premier custom home builder and remodeling contractor since 1999.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-yellow-400">Custom Homes</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Renovations</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Commercial</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Design</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Our Team</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Portfolio</a></li>
                  <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>(719) 555-0299</li>
                  <li>info@elevationbuilders.com</li>
                  <li>123 Main St, Colorado Springs, CO 80903</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              <p>&copy; 2025 Elevation Builders | Licensed #CO-12345 | Bonded & Insured | Colorado Springs, CO</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}