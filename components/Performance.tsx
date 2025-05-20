import Image from "next/image";
import Link from "next/link";
import { Zap, Award, Star, Shield } from "lucide-react";

const performanceFeatures = [
  {
    name: "Lightning Fast",
    description: "95-100 Google PageSpeed scores",
    icon: Zap,
  },
  {
    name: "SEO Optimized",
    description: "Better rankings and visibility",
    icon: Award,
  },
  {
    name: "5/5 Reviews",
    description: "Perfect client satisfaction",
    icon: Star,
  },
  {
    name: "100% Secure",
    description: "No plugins, no vulnerabilities",
    icon: Shield,
  },
];

export default function Performance() {
  return (
    <section className="py-16 bg-light-gray" id="performance">
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">
              {/* WE BUILD BETTER WEBSITES THAT PERFORM
               */}
              GET MORE CLIENTS WITH BLAZING FAST WEBSITES
            </h2>
            <p className="mt-4 text-lg text-dark-gray/80">
              100% satisfaction guarantee. Our websites are built for speed,
              security, and search engine visibility.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
              {performanceFeatures.map((feature) => (
                <div key={feature.name} className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-primary-blue">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-dark-gray font-oswald">
                      {feature.name}
                    </h3>
                    <p className="mt-1 text-dark-gray/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="#contact" className="primary-button font-oswald">
                Get Started Today
              </Link>
            </div>
          </div>

          <div className="relative h-64 overflow-hidden rounded-lg  sm:h-80 lg:h-96">
            <Image
              src="/lighthouse.png"
              alt="Website performance metrics"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
