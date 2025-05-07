import {
  ClipboardList,
  FileText,
  Phone,
  FolderInput,
  Palette,
  Code,
  Settings,
  Server,
  Rocket,
  Gauge,
  CreditCard,
  Headphones,
} from "lucide-react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  timeEstimate: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation & Proposal",
    description:
      "We'll discuss your needs and I'll create a tailored proposal that perfectly matches your business goals. This ensures we're aligned on the vision before moving forward.",
    icon: <ClipboardList className="w-6 h-6" />,
    timeEstimate: "Day 1",
  },
  {
    number: 2,
    title: "Contract & Questionnaire",
    description:
      "Once we decide to work together, I'll send you a detailed contract and a comprehensive questionnaire. This helps me understand your brand, preferences, and specific requirements in depth.",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "Day 1-2",
  },
  {
    number: 3,
    title: "Strategy Call",
    description:
      "We'll have a detailed call to discuss your questionnaire responses, clarify any questions, and ensure we have all the information needed to create your perfect website.",
    icon: <Phone className="w-6 h-6" />,
    timeEstimate: "Day 2",
  },
  {
    number: 4,
    title: "Content Collection",
    description:
      "I'll set up a dedicated Google Drive folder where you can easily upload all your content - images, text, and any other materials needed for your website.",
    icon: <FolderInput className="w-6 h-6" />,
    timeEstimate: "Day 3",
  },
  {
    number: 5,
    title: "Design & Branding",
    description:
      "I'll create initial design concepts, including color palette, typography, and overall style. We'll refine these together until we achieve the perfect look that represents your brand.",
    icon: <Palette className="w-6 h-6" />,
    timeEstimate: "Day 4",
  },
  {
    number: 6,
    title: "Development & Preview",
    description:
      "I'll hand-code your website and schedule a showcase session where you can see your website come to life.",
    icon: <Code className="w-6 h-6" />,
    timeEstimate: "Day 4-10",
  },
  {
    number: 7,
    title: "Refinement",
    description:
      "We'll make any necessary adjustments and tweaks until you're 100% satisfied with every aspect of your website.",
    icon: <Settings className="w-6 h-6" />,
    timeEstimate: "Day 11-13",
  },
  {
    number: 8,
    title: "Launch Preparation",
    description:
      "I'll handle all technical aspects: purchasing your domain, setting up hosting, and implementing SSL security certificates to ensure your website is secure and ready to go live.",
    icon: <Server className="w-6 h-6" />,
    timeEstimate: "Day 13",
  },
  {
    number: 9,
    title: "Performance Optimization",
    description:
      "I'll run comprehensive performance tests to ensure your website is lightning-fast, fully responsive, and optimized for search engines.",
    icon: <Gauge className="w-6 h-6" />,
    timeEstimate: "Day 13",
  },
  {
    number: 10,
    title: "Website Launch",
    description:
      "Congratulations! Your website is now live. I'll provide you with the URL and QR code, and help you connect it to your Google Business Profile for maximum visibility.",
    icon: <Rocket className="w-6 h-6" />,
    timeEstimate: "Day 14",
  },
  {
    number: 11,
    title: "Easy Payment Setup",
    description:
      "I'll send you a secure Stripe payment link for your first month's payment. The process is quick, secure, and takes just a few seconds to complete.",
    icon: <CreditCard className="w-6 h-6" />,
    timeEstimate: "Day 15",
  },
  {
    number: 12,
    title: "Ongoing Support",
    description:
      "That's it! You now have a professional, high-performing website and me as your dedicated support person. I'm always available to help with any questions or updates you need.",
    icon: <Headphones className="w-6 h-6" />,
    timeEstimate: "Day 15+",
  },
];

export default function ProcessSteps() {
  return (
    <div className="mt-16 mb-16">
      <h3 className="text-3xl font-semibold text-center text-dark-gray font-oswald mb-12">
        The Entire Process - From Start to Finish
      </h3>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-blue/20" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting dots */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-12 h-8">
                    <div className="flex flex-col items-center h-full">
                      <div className="w-2 h-2 rounded-full bg-primary-blue mb-1" />
                      <div className="w-2 h-2 rounded-full bg-primary-blue/80 mb-1" />
                      <div className="w-2 h-2 rounded-full bg-primary-blue/60 mb-1" />
                      <div className="w-2 h-2 rounded-full bg-primary-blue/40" />
                    </div>
                  </div>
                )}

                <div className="flex gap-6">
                  {/* Icon circle with dot */}
                  <div className="relative flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-primary-blue">
                        {step.timeEstimate}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-dark-gray font-oswald mb-2">
                      {step.title}
                    </h4>
                    <p className="text-dark-gray/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
