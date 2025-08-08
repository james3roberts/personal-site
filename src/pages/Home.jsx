import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="p-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DKS Works</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          I build clean, modern websites for small business owners who want
          personal service and don’t have time to do it themselves.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Let’s Work Together
        </a>
      </div>

      {/* What I Do Section */}
      <section className="mt-16 w-full max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Starter Site</h3>
            <p className="text-gray-600">
              For business owners who just need to get online and look legit.
              Simple, fast, and affordable.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Client Demos
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Business Site</h3>
            <p className="text-gray-600">
              A stronger web presence with more sections and services. Perfect
              for growing businesses that want to stand out.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Client Demos
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Pro Site</h3>
            <p className="text-gray-600">
              A complete site tailored to your business, built to scale. Ideal
              for companies ready to invest in automation, SEO, or client
              interaction.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              View Client Demos
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mt-20 w-full max-w-4xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Meet the Builder Behind the Code
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          I spent 30 years building houses — now I build websites and tools that
          help small businesses and tradespeople succeed. After earning a CS
          degree online while working full-time, I combined my construction
          experience with code to solve real-world problems. Let’s build
          something that works for <span className="font-semibold">you</span>.
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Learn More About My Story
        </a>
      </section>
    </>
  );
}
