// export default function Contact() {
//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

//       <form
//         action="https://formspree.io/f/myzjneza"
//         method="POST"
//         className="space-y-4"
//       >
//         {/* Name */}
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Your name"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="you@example.com"
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             required
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="What can I help you with?"
//           ></textarea>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const packageType = searchParams.get("package");
  const addons = searchParams.get("addons") ? searchParams.get("addons").split(",") : [];
  const maintenance = searchParams.get("maintenance");
  const min = searchParams.get("min");
  const max = searchParams.get("max");

  // Build pre-filled message
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (packageType) {
      let msg = `I am interested in the following package:\n\n`;
      msg += `Package: ${packageType.charAt(0).toUpperCase() + packageType.slice(1)}\n`;
      if (addons.length) {
        msg += `Add-Ons: ${addons.map(a => a.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase())).join(", ")}\n`;
      }
      if (maintenance) {
        msg += `Maintenance: ${maintenance.charAt(0).toUpperCase() + maintenance.slice(1)}\n`;
      }
      msg += `Estimated Total: $${Number(min).toLocaleString()} – $${Number(max).toLocaleString()}\n\n`;
      msg += `Additional details:`;
      setMessage(msg);
    }
  }, [packageType, addons, maintenance, min, max]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

      <form
        action="https://formspree.io/f/myzjneza"
        method="POST"
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
