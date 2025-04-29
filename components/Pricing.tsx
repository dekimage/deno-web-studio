import { Check } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Business Website",
    price: "$0 DOWN",
    setup: "+ $150/MO",
    description:
      "Best choice for small businesses looking for a professional web presence and more clients",
    features: [
      "5 pages included",
      "Hosting & domain included",
      "Unlimited edits",
      "Lifetime updates",
      "24/7 support",
      "+$100/page after 5 pages",
      "+$250 to add blog",
      "SEO Optimized",
      "100% Security & SSL certificate",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "E-Commerce Package",
    price: "$3000 DOWN",
    setup: "+ $300/MO",
    description: "For businesses selling products online",
    features: [
      "Shopify setup",
      "Product catalog",
      "Payment integration",
      "Product pages",
      "Inventory management",
      "Order processing",
      "Customer accounts",
      "Mobile optimization",
    ],
    cta: "Contact for Quote",
    popular: false,
  },
  {
    name: "Custom App/Platform",
    price: "$5000 DOWN",
    setup: "+ $500/MO",
    description: "For businesses needing custom functionality",
    features: [
      "Authentication systems",
      "Database integration",
      "API development",
      "Booking/scheduling",
      "CRM functionality",
      "CMS capabilities",
      "AI integration",
      "Custom features",
    ],
    cta: "Schedule Consultation",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">SIMPLE PRICING</h2>
          <p className="section-subtitle mx-auto">
            Choose the package that fits your business needs. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative overflow-hidden rounded-lg border ${
                pkg.popular
                  ? "border-primary-blue shadow-lg"
                  : "border-light-gray shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-white bg-primary-blue">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark-gray font-oswald">
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  {pkg.name === "Monthly Website" ? (
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold tracking-tight uppercase text-primary-blue font-oswald">
                        {pkg.setup}
                      </span>
                      <span className="text-xl font-semibold text-dark-gray font-oswald">
                        + {pkg.price}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
                      <span className="text-2xl font-bold text-dark-gray font-oswald">
                        {pkg.price}
                      </span>
                      {pkg.setup && (
                        <span className="text-lg font-medium text-dark-gray/80 font-oswald">
                          {pkg.setup}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <p className="mt-2 text-dark-gray/80">{pkg.description}</p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-lime-green" />
                      <span className="ml-2 text-dark-gray/80 font-oswald">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="#contact"
                    className={`font-oswald block w-full py-3 text-center rounded-md ${
                      pkg.popular
                        ? "bg-primary-blue text-white hover:bg-primary-blue/90"
                        : "bg-light-gray text-dark-gray hover:bg-light-gray/80"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
