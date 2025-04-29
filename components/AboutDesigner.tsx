import Image from "next/image";
import { Check } from "lucide-react";

const benefits = [
  "24/7 support",
  "Maintenance",
  "Unlimited edits",
  "100% custom-coded",
  "Secure websites",
  "SEO-optimized",
  "Personal support (Me)",
  "No bots or autoresponders",
  "Money-back guarantee",
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
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-80 lg:h-96">
            <Image
              src="/placeholder.svg?height=600&width=600"
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
              <span className="text-primary-blue">Guarantee:</span> If I
              can&apos;t make it right for you, cancel anytime with a full
              refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
