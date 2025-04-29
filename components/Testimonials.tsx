import { Quote } from "lucide-react";
import Link from "next/link";

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
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-light-gray" id="testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">TRUSTED WEB DESIGNER</h2>
          <p className="section-subtitle mx-auto">
            We proudly served over 25 small businesses across USA, Canada & EU
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <Quote className="w-8 h-8 text-primary-blue opacity-50" />
              <p className="mt-4 text-dark-gray/80 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold text-dark-gray">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-dark-gray/80">
                    {testimonial.title}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/testimonials" className="primary-button font-oswald">
            See All Testimonials (25+)
          </Link>
        </div>
      </div>
    </section>
  );
}
