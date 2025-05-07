"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-gray">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Deno Web Studio Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
            <span className="text-2xl font-bold font-oswald">
              Deno Web Studio
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors font-oswald ${
                isActive(item.href)
                  ? "text-primary-blue"
                  : "text-dark-gray hover:text-primary-blue"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/#contact" className="primary-button font-oswald">
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-dark-gray rounded-md hover:bg-light-gray focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-1 border-t border-light-gray">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "text-primary-blue"
                    : "text-dark-gray hover:text-primary-blue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block w-full mt-4 primary-button text-center font-oswald"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
