import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  Monitor,
  Zap,
  Search,
  Code,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Brush,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    name: "Mobile-First Design",
    description:
      "Flawless experience on any device — phone, tablet, or desktop.",
    icon: Smartphone,
  },
  {
    name: "Fully Responsive",
    description:
      "Your site adapts perfectly to every screen size and resolution.",
    icon: Monitor,
  },
  {
    name: "Optimized Page Speed",
    description:
      "Lightning-fast loading times, scoring 95+ on Google PageSpeed.",
    icon: Zap,
  },
  {
    name: "SEO Services",
    description:
      "Built-in SEO strategies to boost your Google rankings organically.",
    icon: Search,
  },
  {
    name: "Professional Handmade Code",
    description:
      "100% custom-coded. No page builders. No bloat. Only performance.",
    icon: Code,
  },
  {
    name: "Direct Personal Access",
    description:
      "Unlimited edits + direct chat access to your personal web expert (me!).",
    icon: MessageCircle,
  },
  {
    name: "Security and Reliability",
    description:
      "Website security best practices to keep your business safe online.",
    icon: ShieldCheck,
  },
  {
    name: "Monthly Analytics Reports",
    description:
      "Easy-to-read reports with insights + actions to grow your traffic.",
    icon: BarChart3,
  },
  {
    name: "Conversion Optimization",
    description:
      "Design and structure that turn visitors into real paying customers.",
    icon: TrendingUp,
  },
  {
    name: "Custom Visual Branding",
    description:
      "Beautiful, unique designs that match your brand’s personality.",
    icon: Brush,
  },
  {
    name: "Launch Ready in Days",
    description:
      "Quick, efficient delivery so you start getting clients faster.",
    icon: Rocket,
  },
  {
    name: "Personal Business Partnership",
    description:
      "I care about your growth — I’m here as your tech and strategy partner.",
    icon: HeartHandshake,
  },
];

export default function Features({ min = 0, max = 6 }) {
  return (
    <section className="py-16 bg-white relative overflow-visible" id="features">
      <Image
        src="/f2.png"
        alt="Floating decorative element left"
        width={150}
        height={150}
        className="absolute top-[-100px] left-0 w-36 h-36 animate-float z-0 ml-32 opacity-60 hidden lg:block"
      />
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(min, max).map((feature) => (
            <div key={feature.name} className="feature-card">
              <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary-blue shadow-md">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-dark-gray font-oswald">
                {feature.name}
              </h3>
              <p className="mt-2 text-dark-gray/80">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="#contact" className="primary-button font-oswald">
            Call Me Today
          </Link>
        </div>
      </div>
    </section>
  );
}
