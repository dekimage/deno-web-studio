import Link from "next/link";
import Image from "next/image";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-gray">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Image
                src="/logo.png"
                alt="Deno's Web Studio Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              /> */}
              <h2 className="text-2xl font-bold text-white font-oswald">
                Deno's Web Studio
              </h2>
            </div>
            <p className="text-base text-white/70">
              100% hand-coded websites with superior results. No page builders,
              no WordPress. $0 down payment, $150/month. SEO optimized.
            </p>
            <div className="mt-6">
              <p className="text-base text-white/70">
                &copy; {new Date().getFullYear()} Deno's Web Studio. All rights
                reserved.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white font-oswald">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-white/70 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white font-oswald">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="tel:+15551234567"
                    className="text-base text-white/70 hover:text-white"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@denowebstudio.com"
                    className="text-base text-white/70 hover:text-white"
                  >
                    contact@denowebstudio.com
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white font-oswald">
                  Legal
                </h3>
                <ul className="mt-2 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-white/70 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
