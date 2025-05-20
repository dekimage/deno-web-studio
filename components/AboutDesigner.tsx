import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "Personal support (Me)",
  "Hosting & Domain Included",
  "SEO-optimized",
  "Monthly edits",

  "100% custom-coded",

  "No bots or autoresponders",
  "SSL Certificate Included",
  "Lifetime updates",
];

export default function AboutDesigner() {
  return (
    <section
      className="py-16 bg-light-gray relative overflow-visible"
      id="about"
    >
      <Image
        src="/f1.png"
        alt="Floating decorative element"
        width={150}
        height={150}
        className="absolute top-[-50px] right-0 w-36 h-36 animate-float z-10 -mt-8 mr-32 opacity-80 hidden lg:block"
      />
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-lg shadow-xl sm:h-96 lg:h-[600px]">
            <Image
              src="/v1.jpg"
              alt="Dejan - Web Designer"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="section-title">
              WEBSITES STARTING AT $0 DOWN & $150/MONTH
            </h2>
            <p className="mt-4 text-lg text-dark-gray/80">
              Get a professional website with premium features without the
              premium price tag. Minimum 12-month contract.
            </p>

            <div className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="w-5 h-5 text-lime-green" />
                  </div>
                  <p className="ml-2 text-dark-gray/80">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-lg font-medium text-dark-gray">
              <span className="text-primary-blue">Guarantee:</span> You won't
              pay a penny until you're 100% happy with the website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
