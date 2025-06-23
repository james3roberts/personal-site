import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <button
        onClick={() => navigate("/clientDemo")}
        className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        ← Back to Demos
      </button>

      <h1 className="text-4xl font-bold text-center mb-4">
        Just For Fun Heating
      </h1>
      <p className="text-center text-gray-600 mb-6">
        This is where I would describe your company, what you do, and how long
        you’ve been doing it. This is also a great place to join your social
        media accounts to your google accounts so all of you info and ratings
        are in one spot.
      </p>
      <p className="text-center text-gray-600 mb-10">
        This single-page layout is perfect for small businesses that need a
        clean, simple web presence. Whether you're a one-person crew or a side
        hustle looking to grow, a landing page gives customers a quick overview
        of who you are, what you do, and how to reach you. It's fast to build,
        easy to maintain, and affordable — plus it's a big step up from just
        having a Facebook page. A custom domain and SEO setup make it easier for
        new customers to find you on Google.
      </p>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Services</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Heating Repair</li>
          <li>Furnace Installation</li>
          <li>Seasonal Maintenance</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Contact Info</h2>
        <p>Email: youremail@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>
    </div>
  );
}
