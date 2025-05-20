import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <h1 className="text-4xl font-black tracking-tight text-center text-dark-gray sm:text-5xl md:text-6xl font-oswald">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-80 lg:h-96">
              <Image
                src="/v1.jpg"
                alt="Deno - Web Designer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl font-oswald">
                WE MAKE WEBSITES WITH PURPOSE & INTENT
              </h2>
              <div className="mt-6 space-y-4 text-lg text-dark-gray/80">
                <p>
                  My name is Deno, I am the owner and lead developer of Deno Web
                  Studio. I got into programming because of my passion for
                  creating digital experiences that truly make a difference for
                  businesses.
                </p>
                <p>
                  What I found is that small businesses don&apos;t have the
                  funds to spend thousands of dollars upfront on a new website.
                  And the ones that did often got taken advantage of and ended
                  up with terrible websites that look like they were built with
                  generic WordPress editors or templates—which HURT your Google
                  ranking and speed performance because of tons of unnecessary
                  code.
                </p>
                <p>
                  So I tweaked my business model to fit their needs. That&apos;s
                  how I came up with the $0 down and $150 a month model.
                  It&apos;s more manageable for small businesses to handle and
                  won&apos;t hurt their bank accounts. At the same time, I
                  custom code everything to make sure it&apos;s super light,
                  fast (98-100 rating on Lighthouse metrics), and
                  Google-friendly for SEO.
                </p>
                <p>
                  I care about your business and want to make sure that no code
                  is wasted and that you have the fastest, mobile-first website
                  so that clients don&apos;t leave!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl md:text-5xl font-oswald">
              OUR WORKING PROCESS
            </h2>
            <p className="mx-auto mt-4 text-xl text-dark-gray/80 max-w-3xl">
              WE TAKE CARE OF EVERYTHING: After a contract is signed, we send a
              small questionnaire about your business and what you offer. Then
              we expand on that content and write the entire site&apos;s content
              for you, create the design, get approval, and then we build.
              Generally takes 1-2 weeks from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg border border-light-gray hover:border-primary-blue">
              <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-blue">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                COMPLETE QUESTIONNAIRE
              </h3>
              <p className="mt-2 text-dark-gray/80">
                We send you an email with less than 10 questions about your
                business, services, what sets you apart, etc., and we do all the
                rest. We also do an online meeting call to talk about this in
                greater detail and get to know each other (30-60 minute call).
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg border border-light-gray hover:border-primary-blue">
              <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-blue">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                DESIGN APPROVAL
              </h3>
              <p className="mt-2 text-dark-gray/80">
                We then do a video screen share showing you the first draft and
                make any changes you want to ensure you are 100% satisfied with
                the design before moving forward with development.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg border border-light-gray hover:border-primary-blue">
              <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-primary-blue">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                DEVELOPMENT
              </h3>
              <p className="mt-2 text-dark-gray/80">
                Once approved, we start coding the site and setting everything
                up. We will send you a demo link to view before we launch and go
                live. We make sure you are visible on Google with proper SEO,
                favicon, business profile, and everything you need to look
                professional and visible in Google search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark-gray sm:text-4xl md:text-5xl font-oswald">
              MEET THE TEAM BEHIND Deno Web Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mx-auto overflow-hidden rounded-full w-36 h-36">
                <Image
                  src="/dejan.png"
                  alt="Dejan Gavrilovic"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                Dejan Gavrilovic
              </h3>
              <p className="text-primary-blue">Owner, Lead Developer</p>
              <p className="text-dark-gray/80">Skopje, MK</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mx-auto overflow-hidden rounded-full w-36 h-36">
                <Image
                  src="/marija.png"
                  alt="Marija Zoric"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                Marija Zoric
              </h3>
              <p className="text-primary-blue">Marketing & Design</p>
              <p className="text-dark-gray/80">Skopje, MK</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mx-auto overflow-hidden rounded-full w-36 h-36">
                <Image
                  src="/tony.png"
                  alt="Tony Manolov"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-dark-gray font-oswald">
                Tony Manolov
              </h3>
              <p className="text-primary-blue">Business and Sales</p>
              <p className="text-dark-gray/80">Park City, Utah, USA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
