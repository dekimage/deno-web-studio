import { Quote, Star } from "lucide-react";
import Image from "next/image";
// import TestimonialsGlobeSection from "@/components/TestimonialsGlobeSection"; // Removed
import LocationsBanner from "@/components/LocationsBanner"; // Keep this
import WorldMapPins from "@/components/WorldMapPins"; // Import the new map component
import ScrollingTestimonials from "@/components/ScrollingTestimonials"; // Import the scrolling testimonials
import PaginatedTestimonialsGrid from "@/components/PaginatedTestimonialsGrid"; // Import the paginated grid
import FinalCTA from "@/components/FinalCTA";

// Generate 20 testimonials with dummy data
const testimonials = [
  {
    quote:
      "Dejan built us a website that not only looks amazing but actually brings in new customers. Our conversion rate has doubled since the launch.",
    name: "Sarah Johnson",
    title: "Owner, Mountain View Cafe",
    location: "Portland, OR",
  },
  {
    quote:
      "Working with Dejan was a breath of fresh air. He actually listened to what we needed and delivered a website that exceeded our expectations.",
    name: "Michael Chen",
    title: "CEO, Coastal Properties",
    location: "San Diego, CA",
  },
  {
    quote:
      "The website loads incredibly fast and our Google rankings have improved dramatically. Best investment we've made for our business.",
    name: "Emma Rodriguez",
    title: "Director, Fitness Studio",
    location: "Miami, FL",
  },
  {
    quote:
      "I was skeptical about the monthly payment model at first, but it's been perfect for our small business budget. And the website quality is top-notch.",
    name: "David Wilson",
    title: "Owner, Wilson Plumbing",
    location: "Chicago, IL",
  },
  {
    quote:
      "Our old WordPress site was slow and kept breaking. Dejan built us a custom site that's lightning fast and never has issues.",
    name: "Jennifer Lee",
    title: "Marketing Director, Lee's Bakery",
    location: "Boston, MA",
  },
  {
    quote:
      "The attention to detail is what sets Dejan apart. He thought of things we never would have considered for our website.",
    name: "Robert Garcia",
    title: "Founder, Garcia Law Firm",
    location: "Austin, TX",
  },
  {
    quote:
      "We've had more inquiries in the first month with our new website than we had in six months with our old one. The SEO work really paid off.",
    name: "Amanda Taylor",
    title: "Owner, Taylor Photography",
    location: "Seattle, WA",
  },
  {
    quote:
      "Dejan took the time to understand our business before designing our site. The result is a website that truly represents our brand.",
    name: "Thomas Brown",
    title: "CEO, Brown Construction",
    location: "Denver, CO",
  },
  {
    quote:
      "The mobile experience of our website is flawless. Our customers love how easy it is to navigate on their phones.",
    name: "Sophia Martinez",
    title: "Owner, Sophia's Salon",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "We've worked with several web designers in the past, but none have delivered the level of quality and service that Dejan has.",
    name: "Daniel Kim",
    title: "Director, Kim's Auto Shop",
    location: "Las Vegas, NV",
  },
  {
    quote:
      "Our website now loads in under 2 seconds, and our bounce rate has decreased significantly. Dejan's focus on performance really shows.",
    name: "Olivia White",
    title: "Marketing Manager, White Dental",
    location: "Atlanta, GA",
  },
  {
    quote:
      "The $0 down payment model made it possible for us to get a professional website when we were just starting out. Best decision we made.",
    name: "James Miller",
    title: "Founder, Miller Fitness",
    location: "Nashville, TN",
  },
  {
    quote:
      "Dejan's communication throughout the process was excellent. We always knew exactly what was happening with our website.",
    name: "Emily Davis",
    title: "Owner, Davis Boutique",
    location: "New Orleans, LA",
  },
  {
    quote:
      "Our e-commerce site is not only beautiful but also converts at a much higher rate than our previous site. Sales are up 40%!",
    name: "William Thompson",
    title: "CEO, Thompson Goods",
    location: "Philadelphia, PA",
  },
  {
    quote:
      "The ongoing support has been invaluable. Whenever we need updates or have questions, Dejan is always quick to respond.",
    name: "Natalie Clark",
    title: "Director, Clark Consulting",
    location: "Minneapolis, MN",
  },
  {
    quote:
      "Our website now ranks on the first page of Google for our main keywords. The SEO work Dejan did has transformed our business.",
    name: "Christopher Lewis",
    title: "Owner, Lewis Hardware",
    location: "Detroit, MI",
  },
  {
    quote:
      "The custom features Dejan built for our booking system have streamlined our operations and saved us countless hours.",
    name: "Samantha Wright",
    title: "Manager, Wright Spa",
    location: "Salt Lake City, UT",
  },
  {
    quote:
      "We've received so many compliments on our new website. It's professional, fast, and perfectly represents our brand.",
    name: "Andrew Scott",
    title: "Founder, Scott Architects",
    location: "Charlotte, NC",
  },
  {
    quote:
      "Dejan took our vague ideas and turned them into a stunning website that perfectly captures what we do. True professional.",
    name: "Jessica Adams",
    title: "Owner, Adams Florist",
    location: "Indianapolis, IN",
  },
  {
    quote:
      "The monthly payment plan has been perfect for our budget, and the quality of the website far exceeds what we thought was possible.",
    name: "Ryan Mitchell",
    title: "Director, Mitchell Academy",
    location: "Columbus, OH",
  },
  {
    quote:
      "Incredible speed and responsiveness. Our customers noticed the difference immediately.",
    name: "Linda Green",
    title: "E-commerce Manager",
    location: "San Jose, CA",
  },
  {
    quote:
      "The custom design is exactly what we wanted. It stands out from competitors.",
    name: "Kevin Harris",
    title: "Founder, Harris Tech",
    location: "Toronto, Canada",
  },
  {
    quote:
      "SEO results were faster than expected. We're ranking for keywords we couldn't before.",
    name: "Michelle Young",
    title: "Marketing Lead, Young Solutions",
    location: "London, UK",
  },
  {
    quote:
      "Dejan is a true partner. Always available for advice and quick updates.",
    name: "Paul Walker",
    title: "Owner, Walker Consulting",
    location: "Dallas, TX",
  },
  {
    quote:
      "Our website feels modern and professional, reflecting our brand perfectly.",
    name: "Karen Allen",
    title: "Director, Allen Interiors",
    location: "Vancouver, Canada",
  },
  {
    quote: "The analytics reports are insightful and help us track our growth.",
    name: "George King",
    title: "CEO, King Enterprises",
    location: "Berlin, Germany",
  },
  {
    quote:
      "From start to finish, the process was smooth and transparent. Highly recommended.",
    name: "Nancy Lopez",
    title: "Manager, Lopez Catering",
    location: "Paris, France",
  },
  {
    quote:
      "Fixed all the issues our previous developer couldn't. Reliable and skilled.",
    name: "Mark Roberts",
    title: "IT Head, Roberts Co.",
    location: "Sydney, Australia",
  },
  {
    quote:
      "The website is easy to manage, even for someone non-technical like me.",
    name: "Betty Campbell",
    title: "Owner, Campbell Crafts",
    location: "Rome, Italy",
  },
  {
    quote: "Generated significant leads within the first few weeks. Great ROI.",
    name: "Steven Carter",
    title: "Sales Director, Carter Group",
    location: "Madrid, Spain",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-light-gray">
        <div className="container text-center">
          <div className="relative inline-block">
            <h1 className="mb-8 text-4xl font-black tracking-tight text-dark-gray sm:text-5xl md:text-6xl font-oswald ">
              TESTIMONIALS
            </h1>
            <Image
              src="/trusted.png"
              alt="Testimonials"
              className="absolute -top-0 -left-16"
              width={64}
              height={64}
            />
          </div>

          <h3 className="text-4xl font-bold text-dark-gray font-oswald">
            TRUSTED WEB DESIGNER ACROSS THE GLOBE
          </h3>

          <p className="mx-auto mt-6 text-xl text-dark-gray/80 max-w-3xl">
            We have helped small business owners all over the EU and US get the
            website they have been waiting for years. We are invested in our
            clients just as much as they are in our work. When you&apos;re
            working with us, you have a partner that is here to help you and
            educate you, not just to do a job. We value long-term partnerships
            and care for your business.
          </p>
        </div>
      </section>

      {/* Paginated Testimonials Grid (Client Component) */}
      <PaginatedTestimonialsGrid testimonials={testimonials} />

      {/* Scrolling Testimonials Banner */}
      {/* <ScrollingTestimonials /> */}
      {/* Locations Banner Section */}
      <LocationsBanner />
      {/* 2D World Map with Pins */}
      <WorldMapPins />
      <FinalCTA />
    </>
  );
}
