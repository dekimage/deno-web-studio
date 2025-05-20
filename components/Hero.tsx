import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" id="hero">
      <div className="container py-16 md:py-24">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl md:text-6xl font-oswald">
              SMALL BUSINESS WEB DESIGNER
            </h1>
            <p className="mt-6 text-xl text-dark-gray/80">
              No page builders. No WordPress. 100% hand-coded websites for
              superior results.
              <span className="font-semibold text-primary-blue">
                {" "}
                $0 down payment, $150/month.
              </span>{" "}
              SEO-optimized. Fast. Reliable. Ready in 14 days.
            </p>
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link href="#contact" className="primary-button font-oswald">
                Start Your Website
              </Link>
              <Link href="#about" className="secondary-button font-oswald">
                Learn About Us
              </Link>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-80 lg:h-96">
            <Image
              src="/v2.jpg"
              alt="Web design services"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern)" />
        </svg>
      </div>
    </section>
  );
}
