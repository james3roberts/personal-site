import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Prices() {
  const [packageType, setPackageType] = useState("");
  const [packageOption, setPackageOption] = useState("");
  const [addons, setAddons] = useState([]);
  const [maintenance, setMaintenance] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // ------- Prices -------
  const packagePrices = {
    starter: {
      options: {
        "3 sections": 300,
        "5 sections": 400,
        "7 sections": 500,
      },
    },
    business: {
      options: {
        "3 pages": 750,
        "4 pages": 950,
        "5 pages": 1200,
      },
    },
    pro: {
      options: {
        Custom: 1500,
      },
    },
  };

  const addonPrices = {
    logo: { price: [50], description: "Logo cleanup or adjustment" },
    gallery: { price: 75, description: "Photo gallery setup" },
    blog: { price: 75, description: "Blog setup" },
    forms: { price: [50], description: "One additional contact or quote form" },
  };

  const maintenancePrices = {
    basic: {
      price: 20,
      description: "Minor updates, monthly backups, basic security monitoring",
    },
    priority: {
      price: 50,
      description:
        "Everything in Basic, faster response, plugin updates & minor bug fixes",
    },
    full: {
      price: 100,
      description:
        "Everything in Priority, full site updates, advanced SEO monitoring, custom functionality support",
    },
  };

  // ------- Calculate total -------
  const calculateTotal = () => {
    let total = 0;
    let monthly = 0;

    if (packageType && packageOption) {
      total += packagePrices[packageType].options[packageOption];
    }

    addons.forEach((addon) => {
      total += addonPrices[addon].price;
    });

    if (maintenance) {
      monthly += maintenancePrices[maintenance].price;
    }

    return { total, monthly };
  };

  const { total, monthly } = calculateTotal();

  const toggleAddon = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon],
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
          <div key={pkg} className="mb-6">
            <h3 className="text-xl font-semibold capitalize mb-2">
              {pkg} Site
            </h3>

            {Object.entries(packagePrices[pkg].options).map(
              ([option, price]) => (
                <label key={option} className="block mb-2">
                  <input
                    type="radio"
                    name="package"
                    value={`${pkg}-${option}`}
                    checked={packageType === pkg && packageOption === option}
                    onChange={() => {
                      setPackageType(pkg);
                      setPackageOption(option);
                    }}
                  />{" "}
                  {option} —{" "}
                  {pkg === "pro" ? `Starting at $${price}` : `$${price}`}
                </label>
              ),
            )}
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Optional Add-Ons</h2>
        {Object.keys(addonPrices).map((key) => {
          const price = addonPrices[key].price;
          const priceDisplay = Array.isArray(price)
            ? `$${price[0]}–$${price[1]}`
            : `$${price}`;
          return (
            <div key={key} className="mb-2">
              <label className="block">
                <input
                  type="checkbox"
                  checked={addons.includes(key)}
                  onChange={() => toggleAddon(key)}
                />{" "}
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())}{" "}
                — {priceDisplay}
              </label>
              <p className="text-gray-600 ml-6">
                {addonPrices[key].description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Maintenance */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Maintenance & Support (Monthly)
        </h2>
        {Object.keys(maintenancePrices).map((key) => (
          <div key={key} className="mb-2">
            <label className="block">
              <input
                type="radio"
                name="maintenance"
                value={key}
                onChange={() => setMaintenance(key)}
              />{" "}
              {key.charAt(0).toUpperCase() + key.slice(1)} — $
              {maintenancePrices[key].price}/mo
            </label>
            <p className="text-gray-600 ml-6">
              {maintenancePrices[key].description}
            </p>
          </div>
        ))}
        <label className="block mt-1">
          <input
            type="radio"
            name="maintenance"
            value=""
            onChange={() => setMaintenance("")}
          />{" "}
          No monthly support
        </label>
      </div>

      {/* Live total display */}
      {/* Live total display */}
      <div className="text-center my-6">
        <h3 className="text-xl font-bold mb-2">Estimated Total</h3>

        <p className="text-lg font-semibold">
          {total > 0
            ? `$${total.toLocaleString()}`
            : "Select a package to see total"}
        </p>

        {monthly > 0 && (
          <p className="text-md text-gray-600 mt-1">
            + ${monthly.toLocaleString()}/month for Website Care
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Quote</h2>
            <div className="mb-4">
              <p>
                <strong>Package:</strong> {packageType || "None selected"}
              </p>

              <p>
                <strong>Add-Ons:</strong>
              </p>
              {addons.length > 0 ? (
                <ul className="ml-4 list-disc">
                  {addons.map((addon) => {
                    const price = addonPrices[addon].price;
                    const priceDisplay = Array.isArray(price)
                      ? `$${price[0]}–$${price[1]}`
                      : `$${price}`;
                    return (
                      <li key={addon}>
                        {addon
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (s) => s.toUpperCase())}{" "}
                        — {addonPrices[addon].description} ({priceDisplay})
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="ml-4">None</p>
              )}

              <p>
                <strong>Maintenance:</strong> {maintenance || "None"}{" "}
                {maintenance &&
                  `(${maintenancePrices[maintenance].description})`}
              </p>

              <p className="mt-2 text-lg font-bold">
                Total:{" "}
                {min > 0
                  ? `$${min.toLocaleString()} – $${max.toLocaleString()}`
                  : "Select a package"}
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
                      ",",
                    )}&maintenance=${maintenance}&min=${min}&max=${max}`,
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
