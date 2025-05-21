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
    name: "Iron Edge Barbers",
    description: "Barbershop website with online booking system.",
    images: ["/barber1.png", "/barber2.png", "/barber3.png", "/barber4.png"],
    liveUrl: "https://iron-edge-barbers.vercel.app/", // Replace with actual URL
    tags: ["Barbershop", "Online Booking", "Next.js"],
    details:
      "Developed a responsive website featuring an intuitive online booking system, menu display, and location information, improving customer engagement and streamlining orders.",
    typography: ["Anton"],
    colors: ["#1A1A1A", "#F5F5F5", "#FF6F00", "#0D0D0D"],
    location: "Tavira, Portugal",
  },
  {
    name: "Blossom Nails Studio",
    description: "Nail studio website with online booking system.",
    images: ["/nail1.png", "/nail2.png", "/nail3.png", "/nail4.png"],
    liveUrl: "https://blossom-nails-studio.vercel.app/",
    tags: ["Nail Studio", "Online Booking", "Next.js"],
    details:
      "Built a comprehensive nail studio website with menu display, and location information, improving customer engagement and streamlining orders.",
    typography: ["Great Vibes"],
    colors: ["#FBA7C9", "#FFF1EA", "#7FD5FA", "#FFFFFF"],
    location: "Ontario, Canada",
  },
  {
    name: "Anna Nova Fitness",
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
      "Created a dynamic website for a fitness coach, including class schedules, online booking integration, trainer profiles, and membership information.",
    typography: ["Kanit"],
    colors: ["#E9ED00", "#F72585", "#F5F5F5"],
    location: "Salmon Arm, BC, Canada",
  },
  {
    name: "Zap Fix Mobile Repair",
    description: "Mobile phone repair website.",
    images: ["/mobile1.png", "/mobile2.png", "/mobile3.png", "/mobile4.png"],
    liveUrl: "https://zap-fix-mobile-repair.vercel.app/",
    tags: ["Mobile Repair", "Phone Repair", "Consultation Request"],
    details:
      "Designed a professional and trustworthy website for a mobile phone repair shop, outlining services, locations, and a secure contact form for consultation requests.",
    typography: ["Merriweather", "Source Sans Pro"],
    colors: ["#FACC15", "#7E22CE", "#040904", "#FFFFFF"],
    location: "Idaho, USA",
  },
  {
    name: "Bella Vita Pizza",
    description: "Charming e-commerce site for a local pizzeria.",
    images: ["/pizza1.png", "/pizza2.png", "/pizza3.png", "/pizza4.png"],
    liveUrl: "https://bella-vita-pizza.vercel.app/",
    tags: ["Pizza", "Local Business"],
    details:
      "Launched an e-commerce platform enabling customers to browse pizza, customize orders, and complete purchases online, boosting local sales.",
    typography: ["Playfair Display", "Raleway"],
    colors: ["#D72638", "#264653", "#FFF"],
    location: "Iowa, USA",
  },
  {
    name: "Mason Gold Real Estate",
    description: "Real estate website for a local real estate agency.",
    images: [
      "/realestate1.png",
      "/realestate2.png",
      "/realestate3.png",
      "/realestate4.png",
    ],
    liveUrl: "https://mason-gold-real-estate.vercel.app/",
    tags: ["Real Estate", "Corporate", "B2B", "Lead Generation"],
    details:
      "Built a sleek real estate website highlighting services, case studies, and company information, focused on generating B2B leads and establishing credibility.",
    typography: ["Cinzel"],
    colors: ["#D4AF37", "#2B2B2B", "#0B0B0B", "#424241"],
    location: "Nelson, BC, Canada",
  },
  {
    name: "Elias Grant Photography",
    description: "Photography website for a local photographer.",
    images: [
      "/wedding1.png",
      "/wedding2.png",
      "/wedding3.png",
      "/wedding4.png",
    ],
    liveUrl: "https://eliasgrantphotography.vercel.app/",
    tags: ["Photography", "Wedding", "Portrait", "Event"],
    details:
      "Built a sleek photography website highlighting services, case studies, and company information, focused on generating B2B leads and establishing credibility.",
    typography: ["Georgia", "System UI"],
    colors: ["#6B4C3B", "#F5F3EA", "#1C1C1C", "#6E696D"],
    location: "New York, USA",
  },
  // Add more projects here following the same structure
];
