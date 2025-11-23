import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Prices() {
  const [packageType, setPackageType] = useState("");
  const [addons, setAddons] = useState([]);
  const [maintenance, setMaintenance] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // ------- Prices -------
  const packagePrices = {
    starter: [300, 500],
    business: [750, 1200],
    pro: [1500, 1500],
  };

  const addonPrices = {
    logo: { price: [50, 150], description: "Logo cleanup or simple redesign" },
    extraPages: { price: [75, 150], description: "Extra pages beyond package" },
    gallery: { price: [75, 75], description: "Photo gallery setup" },
    blog: { price: [150, 150], description: "Blog setup" },
    forms: { price: [50, 100], description: "Additional forms" },
    googleBusiness: { price: [75, 75], description: "Google Business Profile setup" },
  };

  const maintenancePrices = {
    basic: {
      price: 20,
      description: "Minor updates, monthly backups, basic security monitoring",
    },
    priority: {
      price: 50,
      description: "Everything in Basic, faster response, plugin updates & minor bug fixes",
    },
    full: {
      price: 100,
      description: "Everything in Priority, full site updates, advanced SEO monitoring, custom functionality support",
    },
  };

  // ------- Calculate total -------
  const calculateTotal = () => {
    let min = 0;
    let max = 0;

    if (packageType) {
      min += packagePrices[packageType][0];
      max += packagePrices[packageType][1];
    }

    addons.forEach((addon) => {
      min += addonPrices[addon].price[0];
      max += addonPrices[addon].price[1];
    });

    if (maintenance) {
      min += maintenancePrices[maintenance].price;
      max += maintenancePrices[maintenance].price;
    }

    return { min, max };
  };

  const { min, max } = calculateTotal();

  const toggleAddon = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Website Packages & Pricing
      </h1>

      {/* Package selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Choose Your Package</h2>
        {Object.keys(packagePrices).map((pkg) => (
          <label key={pkg} className="block mb-1">
            <input
              type="radio"
              name="package"
              value={pkg}
              onChange={() => setPackageType(pkg)}
            />{" "}
            {pkg.charAt(0).toUpperCase() + pkg.slice(1)} Site (${packagePrices[pkg][0]} – ${packagePrices[pkg][1]})
          </label>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Optional Add-Ons</h2>
        {Object.keys(addonPrices).map((key) => (
          <div key={key} className="mb-2">
            <label className="block">
              <input
                type="checkbox"
                checked={addons.includes(key)}
                onChange={() => toggleAddon(key)}
              />{" "}
              {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())} — ${addonPrices[key].price[0]}–${addonPrices[key].price[1]}
            </label>
            <p className="text-gray-600 ml-6">{addonPrices[key].description}</p>
          </div>
        ))}
      </div>

      {/* Maintenance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Maintenance & Support (Monthly)</h2>
        {Object.keys(maintenancePrices).map((key) => (
          <div key={key} className="mb-2">
            <label className="block">
              <input
                type="radio"
                name="maintenance"
                value={key}
                onChange={() => setMaintenance(key)}
              />{" "}
              {key.charAt(0).toUpperCase() + key.slice(1)} — ${maintenancePrices[key].price}/mo
            </label>
            <p className="text-gray-600 ml-6">{maintenancePrices[key].description}</p>
          </div>
        ))}
        <label className="block mt-1">
          <input type="radio" name="maintenance" value="" onChange={() => setMaintenance("")} /> No monthly support
        </label>
      </div>

      {/* Live total display */}
      <div className="text-center my-6">
        <h3 className="text-xl font-bold mb-2">Current Estimated Total</h3>
        <p className="text-lg font-semibold">
          {min > 0 ? `$${min.toLocaleString()} – $${max.toLocaleString()}` : "Select a package to see total"}
        </p>
      </div>

      {/* Get a Free Quote button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Get a Free Quote
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Quote</h2>
            <div className="mb-4">
              <p><strong>Package:</strong> {packageType || "None selected"}</p>

              <p><strong>Add-Ons:</strong></p>
              {addons.length > 0 ? (
                <ul className="ml-4 list-disc">
                  {addons.map((addon) => (
                    <li key={addon}>
                      {addon.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())} — {addonPrices[addon].description} (${addonPrices[addon].price[0]}–${addonPrices[addon].price[1]})
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ml-4">None</p>
              )}

              <p>
                <strong>Maintenance:</strong> {maintenance || "None"}{" "}
                {maintenance && `(${maintenancePrices[maintenance].description})`}
              </p>

              <p className="mt-2 text-lg font-bold">
                Total: {min > 0 ? `$${min.toLocaleString()} – $${max.toLocaleString()}` : "Select a package"}
              </p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  navigate(
                    `/contact?package=${packageType}&addons=${addons.join(
                      ","
                    )}&maintenance=${maintenance}&min=${min}&max=${max}`
                  );
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Proceed to Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
