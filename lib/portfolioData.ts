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
  status: string;
}

export interface App {
  name: string;
  description: string;
  images: string[];
  liveUrl: string;
  tags: string[];
  details: string;
  typography: string[];
  colors: string[];
  location: string;
  techStack: string[]; // e.g., ['React Native', 'Firebase', 'Node.js']
  status: string;
}

export const projects: Project[] = [
  {
    name: "Elite Gym",
    description: "Gym website with online booking system.",
    images: ["/gym-1.png", "/gym-2.png", "/gym-3.png", "/gym-4.png"],
    liveUrl: "https://elite-gym-mauve.vercel.app/", // Replace with actual URL
    tags: ["Gym", "Business Website", "Next.js"],
    details:
      "Developed a responsive website featuring a professional and clean design, with a focus on user experience and functionality.",
    typography: ["Anton"],
    colors: ["#0E0E0E", "#FFD500", "#FFF9DF"],
    location: "Winnipeg, Canada",
    status: "Live",
  },
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
    status: "Live",
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
    status: "Live",
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
    status: "Live",
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
    status: "Live",
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
    status: "Live",
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
    status: "Live",
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
    status: "Live",
  },
  // Add more projects here following the same structure
];

export const apps: App[] = [
  {
    name: "Play Routines",
    description:
      "Personal Development App with custom routines and progress tracking.",
    images: [
      "/playroutines-1.png",
      "/playroutines-2.png",
      "/playroutines-3.png",
      "/playroutines-4.png",
    ],
    liveUrl: "https://pathways-orpin.vercel.app/explore",
    tags: ["Personal Development", "Routines", "Progress Tracking"],
    details:
      "Developed a comprehensive personal development application featuring custom routines and progress tracking. The app includes features like custom routine creation, progress tracking, and integration with popular fitness devices.",
    typography: ["Bricolage Grotesque"],
    colors: ["#FACC15", "#0C0A09", "#E28901", "#D6CE93"],
    location: "Utah, USA",
    techStack: ["React JS", "Firebase", "Redux", "Node.js"],
    status: "Live",
  },
  {
    name: "Galactic Omnivore",
    description: "Biggest Game Hub in Macedonia",
    images: [
      "/galactic-1.png",
      "/galactic-2.png",
      "/galactic-3.png",
      "/galactic-4.png",
    ],
    liveUrl: "https://www.galacticomnivore.com/",
    tags: ["Game Hub", "Technology", "Platform"],
    details:
      "Built a powerful project management platform enabling teams to collaborate in real-time. Features include task management, team chat, file sharing, and automated workflow processes.",
    typography: ["Inter"],
    colors: ["#C92280", "#0C0A09", "#4A4549", "#581438"],
    location: "Skopje, MK",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    status: "Live",
  },
  {
    name: "Study Shuttle",
    description:
      "Study Shuttle is a platform that allows students to find study partners and share study materials.",
    images: ["/study-1.png", "/study-2.png", "/study-3.png", "/study-4.png"],
    liveUrl: "https://studyshuttle.mk/",
    tags: ["Study", "Study Partners", "Study Materials"],
    details:
      "Created a comprehensive study platform with real-time study partner matching, study material sharing, and seamless payment integration. The app includes features like personalized recommendations and loyalty programs.",
    typography: ["Montserrat"],
    colors: ["#ED1B31", "#FFD02F", "#48BADD", "#FFFFFF"],
    location: "Skopje, MK",
    techStack: ["React JS", "PostgreSQL", "Redux", "Node.js"],
    status: "Live",
  },
  {
    name: "Sea Scrub",
    description:
      "Sea Scrub is a 1st place winner of the 2025 Croatia World Game Jam. It is a 100% frontend developed game.",
    images: [
      "/seascrub-1.png",
      "/seascrub-2.png",
      "/seascrub-3.png",
      "/seascrub-4.png",
    ],
    liveUrl: "https://sea-scrub.vercel.app/",
    tags: ["Game", "Frontend", "Game Jam"],
    details:
      "Created a 100% frontend developed game that was a 1st place winner of the 2025 Croatia World Game Jam.",
    typography: ["Inter"],
    colors: ["#8678C1", "#5A8AB0", "#FDE510", "#334155"],
    location: "Novska, Croatia",
    techStack: ["Next.js", "MobX", "Tailwind CSS"],
    status: "Live",
  },
  {
    name: "Pan Synergy",
    description:
      "Pan Synergy is platform for creating and streming yoga classes and breathwork exercises and sessions.",
    images: [
      "/pansynergy-1.png",
      "/pansynergy-2.png",
      "/pansynergy-3.png",
      "/pansynergy-4.png",
    ],
    liveUrl: "https://pansynergy.vercel.app",
    tags: ["Yoga", "Breathwork", "Classes"],
    details:
      "Created a platform for creating and streming yoga classes and breathwork exercises and sessions.",
    typography: ["Inter"],
    colors: ["#324A77", "#E3D3E6", "#030712"],
    location: "Skopje, MK",
    techStack: ["React JS", "PostgreSQL", "Redux", "Node.js"],
    status: "In Development",
  },
  {
    name: "Deno Games",
    description:
      "Deno Games is a gamified e-commerce platform for printable board games.",
    images: [
      "/denogames-1.png",
      "/denogames-2.png",
      "/denogames-3.png",
      "/denogames-4.png",
    ],
    liveUrl: "https://denogames.com",
    tags: ["Board Games", "Printable", "Gamified"],
    details:
      "Created a gamified e-commerce platform for printable board games.",
    typography: ["Protest Strike"],
    colors: ["#FACC15", "#FFFFFF", "#1D1D1D", "#FAFAF9"],
    location: "Skopje, MK",
    techStack: ["React JS", "Firebase", "Mobx", "Tailwind CSS"],
    status: "Live",
  },
  {
    name: "Armana Games",
    description:
      "Armana Games is a Board Games studio that creates and releases physical board games via Kickstarter.",
    images: [
      "/armana-1.png",
      "/armana-2.png",
      "/armana-3.png",
      "/armana-4.png",
    ],
    liveUrl: "https://print-frontend.vercel.app",
    tags: ["Board Games", "Physical", "Kickstarter"],
    details:
      "Created a website for a Board Games studio that creates and releases physical board games via Kickstarter.",
    typography: ["Roboto"],
    colors: ["#05CE78", "#1565C0", "#D8D8D8", "#FFFFFF"],
    location: "Skopje, MK",
    techStack: ["React JS", "Material UI", "Redux", "MongoDB"],
    status: "Live",
  },
  {
    name: "Wolf Skin Photography",
    description:
      "Wolf Skin Photography is a photography studio that sells proffesional canvas prints of real photographs.",
    images: [
      "/wolfskin-1.png",
      "/wolfskin-2.png",
      "/wolfskin-3.png",
      "/wolfskin-4.png",
    ],
    liveUrl: "https://wolf-skin-photography.vercel.app",
    tags: ["Photography", "Canvas Prints", "Portrait"],
    details:
      "Created a website for a photography studio that sells proffesional canvas prints of real photographs.",
    typography: ["Ethnocentric ", "Consolas"],
    colors: ["#6225C5", "#030712", "#F3F4F6", "#FFFFFF"],
    location: "Amsterdam, NL",
    techStack: ["React JS", "Material UI", "Redux", "MongoDB"],
    status: "In Development",
  },
];
