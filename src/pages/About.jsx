import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-center text-blue-600 font-semibold mb-2 text-lg">
        From Framing Houses to Framing Websites
      </p>
      <h1 className="text-4xl font-bold mb-8 text-center">
        About the Builder Behind the Websites
      </h1>

      <div className="text-gray-800 text-lg leading-relaxed space-y-6">
        <p>
          I spent over 25 years in construction, specializing in residential 
          framing and siding work. I understand long days, tight schedules, 
          demanding customers, and what it takes to keep a small business 
          running. After years of hands-on work, my body had limits — but my 
          drive to build didn't. So I switched from tools to technology.
        </p>

        <div className="my-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="font-semibold text-xl mb-2">Why This Matters to You</p>
          <p className="text-gray-700">
            I'm not going to confuse you with tech jargon or sell you features 
            you don't need. I speak your language because I've been in your shoes. 
            When you hire me, you're getting someone who understands what it's like 
            to run a small business — not just someone who codes.
          </p>
        </div>

        <p>
          To make that transition real, I earned a four-year Computer Science
          degree fully online while working full time in construction. 
          No shortcuts, no in-person help — just me, a laptop, and the 
          determination to learn how to solve problems with code after 
          12-hour workdays. That experience taught me more about discipline,
          troubleshooting, and persistence than any classroom ever could.
        </p>

        <p>
          Today, I use that blend of real-world trade experience and software
          training to build websites for the kinds of businesses I grew up
          around — the ones that keep towns running.
        </p>

        <p>
          Whether you're a contractor, a shop owner, an accountant, or any other
          small business, your website should make it easy for people to trust
          you. My goal is simple: create clean, modern websites that help you
          look professional, get found online, and bring in steady work.
        </p>

        <p>
          If you're ready to upgrade your online presence or get your business
          online for the first time, let's talk. No sales pressure, no confusing 
          tech speak — just an honest conversation about what you need and how 
          I can help.
        </p>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition font-semibold"
          >
            Get Your Free Quote
          </Link>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">📍 Based in Colorado Springs, CO</p>
          <p className="text-sm text-gray-500">
            Available for local and remote projects
          </p>
        </div>
      </div>
    </div>
  );
}