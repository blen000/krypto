import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For personal hobby projects and students.",
      features: [
        "Unlimited projects",
        "Never paused",
        "5GB bandwidth",
        "2GB storage",
        "750K executions",
        "75K monthly active users",
        "Community support",
        "Non-removable Appwrite branding",
        "1 Database, 3 Buckets, 5 Functions per project",
      ],
      button: "Start building",
    },
    {
      name: "Pro",
      price: "$15",
      description: "For pro developers and teams that need to scale their products.",
      popular: true,
      features: [
        "300GB bandwidth",
        "150GB storage",
        "3.5M executions",
        "200K monthly active users",
        "Organization roles",
        "Email support",
        "Daily backups stored for 7 days",
        "Add-ons",
        "Unlimited Databases, Buckets, and Functions",
      ],
      button: "Start building",
    },
    {
      name: "Scale",
      price: "$599",
      description: "For scaling teams and agencies that need dedicated support.",
      features: [
        "Unlimited seats",
        "SOC-2",
        "BAA",
        "Network logs",
        "28-day log retention",
        "Custom organization roles",
        "SSO",
        "Activity logs",
        "Custom backup policies",
        "Priority support",
      ],
      button: "Coming soon",
    },
  ];

  return (
    <div className="text-white py-16 px-6 mt-20 lg:mt-20">
      <h1 className="text-center text-3xl font-bold mb-20">
        Simple, transparent<br></br> pricing with no surprises
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              plan.popular ? "border border-teal-400" : "border border-gray-700"
            } bg-gradient-to-r from-[#1E1A55] via-[#7D7ED6] to-[#89D1D2] w-80`}
          >
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-2">{plan.price}</p>
            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
            <ul className="text-sm mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 mb-2">
                  <span className="text-indigo-600">✔</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg ${
                plan.popular
                  ? "bg-teal-400 text-white"
                  : "bg-[#050031] text-gray-300"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
