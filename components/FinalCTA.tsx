import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-primary-blue text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-oswald">
          READY TO GET THE WEBSITE YOU ALWAYS WANTED?
        </h2>
        <p className="mx-auto mt-6 text-xl max-w-2xl text-white/90">
          {/* Let&apos;s build something amazing together. No upfront costs, just
          results. */}
          No upfront costs, ready in 14 days, get more clients immediately.
        </p>
        <div className="mt-10">
          <Link
            href="#contact"
            className="font-oswald inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-blue bg-white rounded-md shadow-sm hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-blue"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
