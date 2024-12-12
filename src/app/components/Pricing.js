import Image from 'next/image';

export default function Pricing() {
  const pricingPlans = [
    {
      icon: "/scooter.svg",
      title: "Free",
      price: "0.00",
      frequency: "Month",
      features: [
        "accusamus reprehenderit",
        "provident dolorem",
        "quos neque",
        "fugiat quibusdam",
        null,
        null,
      ],
    },
    {
      icon: "/shipped.svg",
      title: "Basic",
      price: "9.99",
      frequency: "Month",
      features: [
        "accusamus reprehenderit",
        "provident dolorem",
        "quos neque",
        "fugiat quibusdam",
        "accusamus laboriosam",
        null,
      ],
    },
    {
      icon: "/startup.svg",
      title: "Premium",
      price: "99.99",
      frequency: "Month",
      features: [
        "accusamus reprehenderit",
        "provident dolorem",
        "quos neque",
        "fugiat quibusdam",
        "accusamus laboriosam",
        "inventore omnis",
      ],
    },
  ];

  return (
    <section className="p-16 bg-gray-50" id="pricing">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-lg">How Much I Charge?</p>
        <h6 className="text-4xl font-bold mb-12 text-[#695AA6] font-baloo">My Pricing</h6>
        <div className="flex flex-wrap justify-center -mx-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src={plan.icon}
                    alt={`${plan.title} Icon`}
                    width={80}
                    height={80}
                  />
                </div>
                <h6 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.title}
                </h6>
                <ul className="text-gray-600 text-sm space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      {feature ? feature : <span className="text-gray-400">✖</span>}
                    </li>
                  ))}
                </ul>
                <div className="text-gray-800 text-2xl font-bold mb-2">
                  <span>${plan.price}</span>
                  <span className="text-sm font-medium">/{plan.frequency}</span>
                </div>
                <a
                  href="#"
                  className="btn btn-primary mt-3 bg-[#695AA6] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
