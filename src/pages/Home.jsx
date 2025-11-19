import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="p-8 flex flex-col items-center text-center mt-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Websites Built for Real Small Businesses
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          Whether you're running a trade company, a local shop, or a small office,
          your business deserves a clean, modern website that helps customers
          trust you. I build fast, simple, and effective sites that make you look
          professional and easy to find online.
        </p>

        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Start Your Website
        </Link>
      </div>

      {/* What I Do Section */}
      <section className="mt-20 w-full max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Website Options</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Every business is different. Choose the style and size that fits your
          goals — whether you're just getting online or upgrading your current
          presence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Starter Site</h3>
            <p className="text-gray-600">
              A simple and clean one-page site that tells people who you are, what
              you do, and how to contact you. Perfect for new or small operations.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              See Examples
            </Link>
          </div>

          {/* Business */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Business Site</h3>
            <p className="text-gray-600">
              A multi-page website with room to show services, photos, business
              info, and more. A good fit for companies ready to build trust and
              stand out.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              See Examples
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">Pro Site</h3>
            <p className="text-gray-600">
              A full site with advanced features — such as scheduling, customer
              forms, or product listings. Great for businesses that want a strong,
              polished online presence.
            </p>
            <Link
              to="/clientDemo"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              See Examples
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mt-20 w-full max-w-4xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Why I Build Websites</h2>
        <p className="text-gray-700 text-lg mb-6">
          After decades in construction and hands-on work, I switched to software
          so I could help small business owners grow. I know what it’s like to run
          a business from the ground level — and now I use technology to make that
          easier for others.
        </p>

        <Link
          to="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Learn More About Me
        </Link>
      </section>
    </>
  );
}
