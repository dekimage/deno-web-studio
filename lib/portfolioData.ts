export interface Project {
  name: string;
  description: string; // Short description for homepage card
  images: string[]; // Array of image URLs (at least 4 for detail page)
  liveUrl: string; // Live website URL
  tags: string[]; // e.g., ['Restaurant', 'Next.js', 'Tailwind']
  details: string; // Longer description or feature list for detail page
  typography: string[]; // e.g., ['Inter', 'Oswald']
  colors: string[]; // Array of hex color codes e.g., ['#FFFFFF', '#000000']
  location: string; // e.g., 'Portland, OR, USA'
}

export const projects: Project[] = [
  {
    name: "Mountain View Cafe",
    description: "Restaurant website with online ordering system.",
    images: ["/barber1.png", "/barber2.png", "/barber3.png", "/barber4.png"],
    liveUrl: "https://iron-edge-barbers.vercel.app/", // Replace with actual URL
    tags: ["Restaurant", "Online Ordering", "Next.js"],
    details:
      "Developed a responsive website featuring an intuitive online ordering system, menu display, and location information, improving customer engagement and streamlining orders.",
    typography: ["Poppins", "Lato"],
    colors: ["#FDF0E0", "#E86A33", "#4A4A4A", "#FFFFFF"],
    location: "Portland, OR, USA",
  },
  {
    name: "Coastal Properties",
    description: "Real estate agency with property listings.",
    images: ["/nail1.png", "/nail2.png", "/nail3.png", "/nail4.png"],
    liveUrl: "https://blossom-nails-studio.vercel.app/",
    tags: ["Real Estate", "Property Listings", "Search Filters"],
    details:
      "Built a comprehensive real estate platform allowing users to browse listings with advanced search filters, view property details, and contact agents easily.",
    typography: ["Montserrat", "Open Sans"],
    colors: ["#1E3A8A", "#DBEAFE", "#9CA3AF", "#F9FAFB"],
    location: "San Diego, CA, USA",
  },
  {
    name: "Apex Fitness Studio",
    description: "Modern gym website with class scheduling.",
    images: [
      "/fitnesscoach1.png",
      "/fitnesscoach2.png",
      "/fitnesscoach3.png",
      "/fitnesscoach4.png",
    ],
    liveUrl: "https://anna-nova-fitness.vercel.app/",
    tags: ["Fitness", "Gym", "Class Schedule", "Booking"],
    details:
      "Created a dynamic website for a fitness studio, including class schedules, online booking integration, trainer profiles, and membership information.",
    typography: ["Oswald", "Roboto"],
    colors: ["#FF4500", "#2F2F2F", "#F5F5F5", "#FFFFFF"],
    location: "Miami, FL, USA",
  },
  {
    name: "Garcia Legal Advisors",
    description: "Professional law firm website.",
    images: ["/mobile1.png", "/mobile2.png", "/mobile3.png", "/mobile4.png"],
    liveUrl: "https://zap-fix-mobile-repair.vercel.app/",
    tags: ["Law Firm", "Legal Services", "Consultation Request"],
    details:
      "Designed a professional and trustworthy website for a law firm, outlining practice areas, attorney profiles, and a secure contact form for consultation requests.",
    typography: ["Merriweather", "Source Sans Pro"],
    colors: ["#0A2342", "#8D99AE", "#D9D9D9", "#FFFFFF"],
    location: "Austin, TX, USA",
  },
  {
    name: "Bloom & Petal Florist",
    description: "Charming e-commerce site for a local florist.",
    images: ["/pizza1.png", "/pizza2.png", "/pizza3.png", "/pizza4.png"],
    liveUrl: "https://bella-vita-pizza.vercel.app/",
    tags: ["E-commerce", "Florist", "Local Business", "Shopify"],
    details:
      "Launched an e-commerce platform enabling customers to browse floral arrangements, customize orders, and complete purchases online, boosting local sales.",
    typography: ["Playfair Display", "Raleway"],
    colors: ["#90EE90", "#FFC0CB", "#F5F5DC", "#333333"],
    location: "Indianapolis, IN, USA",
  },
  {
    name: "Innovate Tech Solutions",
    description: "Corporate website for a technology startup.",
    images: [
      "/realestate1.png",
      "/realestate2.png",
      "/realestate3.png",
      "/realestate4.png",
    ],
    liveUrl: "https://mason-gold-real-estate.vercel.app/",
    tags: ["Technology", "Corporate", "B2B", "Lead Generation"],
    details:
      "Built a sleek corporate website highlighting services, case studies, and company information, focused on generating B2B leads and establishing credibility.",
    typography: ["Inter", "Archivo"],
    colors: ["#007AFF", "#E5E5EA", "#1C1C1E", "#FFFFFF"],
    location: "Seattle, WA, USA",
  },
  {
    name: "Innovate Tech Solutions",
    description: "Corporate website for a technology startup.",
    images: [
      "/wedding1.png",
      "/wedding2.png",
      "/wedding3.png",
      "/wedding4.png",
    ],
    liveUrl: "https://eliasgrantphotography.vercel.app/",
    tags: ["Technology", "Corporate", "B2B", "Lead Generation"],
    details:
      "Built a sleek corporate website highlighting services, case studies, and company information, focused on generating B2B leads and establishing credibility.",
    typography: ["Inter", "Archivo"],
    colors: ["#007AFF", "#E5E5EA", "#1C1C1E", "#FFFFFF"],
    location: "Seattle, WA, USA",
  },
  // Add more projects here following the same structure
];
