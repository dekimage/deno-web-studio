import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolioData";

export default function Portfolio() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container">
        <div className="text-center">
          {/* <h2 className="section-title">SOME OF OUR WORK</h2> */}
          <h2 className="section-title">PORTFOLIO</h2>

          <p className="section-subtitle mx-auto">
            We specialize in websites for cafes, restaurants, barbershops, hair
            salons, nail studios, tattoo shops, fitness coaches, and other local
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg border border-light-gray"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold text-dark-gray font-oswald">
                  {project.name}
                </h3>
                <p className="mt-1 text-dark-gray/80 flex-grow">
                  {project.description}
                </p>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full mt-4 text-center primary-button font-oswald"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/portfolio" className="secondary-button font-oswald">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
