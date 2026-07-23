import { Project, ProjectCategory, ProjectStatus, Skill, Review, TOSCategory, ShowcaseItem } from './types';
import { 
  Terminal, 
  Server, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  Layout,
  Gamepad2,
  Cloud
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/AyrixMC",
  discord: "https://discord.gg/jd6JgG6awG",
  email: "mailto:ayrixmc@gmail.com"
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    title: "ArchitectShop",
    type: "Plugin",
    description: "A premium Minecraft shop plugin designed for scalability and performance, featuring advanced UI/UX and dynamic economies. [COMING SOON]",
    link: "#"
  },
  {
    title: "AdminLogger",
    type: "Plugin",
    description: "Advanced administrative logging and anti-cheat monitoring system designed for high-security Minecraft server environments. [COMING SOON]",
    link: "#"
  },
  {
    title: "GenericTags",
    type: "Plugin",
    description: "High-performance chat and nameplate tag management system for large-scale Minecraft networks.",
    link: "https://builtbybit.com/resources/generictags.93547/"
  },
  {
    title: "Synclastics.com",
    type: "Website",
    description: "Corporate portal for cloud technologies, focusing on clean interface and infrastructure service presentation.",
    link: "https://synclastics.com"
  },
  {
    title: "Infonix.studio",
    type: "Website",
    description: "Creative agency landing page built with modern web technologies and a focus on visual impact.",
    link: "https://infonix.studio"
  },
  {
    title: "JollyMC Portal",
    type: "Application",
    description: "Custom-built application portal for staff and player management for the JollyMC Network.",
    link: "https://apps.ayrixmc.fun"
  }
];

export const REVIEWS: Review[] = [
  {
    username: "azureknightfr",
    rating: 5,
    content: "One of the best Configuration Services provided by AyrixMC for my server. Really Appreciated his work and I'll always suggest hiring him as a Developer for your Minecraft Server.",
    date: "1/27/2026"
  },
  {
    username: "bmoneyboy",
    rating: 5,
    content: "Ayrix is an excellent developer. He completes tasks quickly with exceptional care and quality. He's very professional and ensures you're always kept in the loop. I would definitely recommend Ayrix!!",
    date: "3/27/2026"
  },
  {
    username: "kasinathan2008",
    rating: 5,
    content: "Simply cool! A lot of hard work is put in by @ayrixmc. I wish him massive growth and success in all of his future endeavors.",
    date: "1/27/2026"
  },
  {
    username: "x0zv_",
    rating: 5,
    content: "Ayrix does a amazing job when staffing/managing/developing. He goes above and beyond, does great work, does extra without being asked, and is overall very active. I have had nothing but a great time working with him, and I hope I continue to have a great time working with him, as well as any others who work with him in the future!",
    date: "1/27/2026"
  },
  {
    username: "ggs04155",
    rating: 5,
    content: "AyrixMC is a very cool guy, made a very good discord bot for my server. Also his Minecraft Development is amazing. Don't forget to hire him in your server.",
    date: "4/15/2026"
  },
  {
    username: "hashir",
    rating: 5,
    content: "AyrixMC is just a wonderful website, minecraft developer and he just developed my minecraft server and my minecraft server's website in a wonderful theme just like a wow. I recommend you all to take service from AyrixMC",
    date: "4/20/2026"
  },
  {
    username: "kingqavi",
    rating: 5,
    content: "Very Hardworking and lovely boi. must try once in life",
    date: "4/25/2026"
  },
  {
    username: "sylivikx",
    rating: 5,
    content: "The best developer I ever saw, literally fixed everything on my server. Hire him now!",
    date: "5/01/2026"
  }
];

export const PROJECTS: Project[] = [
  {
    name: "MaceFun",
    role: "Developer",
    description: "Technical server development and backend infrastructure optimization.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT,
    logo: "/macefun.png"
  },
  {
    name: "Lucnoxity Tierlist",
    role: "Developer",
    description: "Configuration and Optimization",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT,
    logo: "/lux.png"
  },
  {
    name: "Synclastics",
    role: "System Administrator",
    description: "Leading operations and strategic direction for cloud infrastructure services.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING,
    logo: "/synclastics.png"
  },
  {
    name: "Boiga's Lounge",
    role: "Developer/Manager",
    description: "Helping in managing events and media content.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.DEVELOPMENT,
    logo: "/boiga.png"
  },
  {
    name: "MapleSMP",
    role: "Network Manager & Developer",
    description: "Managing community and server infrastructure for a gaming network.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT,
    logo: "/maplesmp.png",
  },
  {
    name: "MythMC",
    role: "Developer",
    description: "Development and system configuration.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT,
    logo: "/myth.png"
  },
  {
    name: "Fruit SMP",
    role: "Developer",
    description: "Developing an EarthMC experience.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT,
    logo: "/fruitsmp.png"
  },
  {
    name: "ZenithSMP",
    role: "Developer",
    description: "Early-stage development and core systems architecture.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Forge Network",
    role: "Developer",
    description: "Network infrastructure management and custom plugin implementation.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "ClushSMP",
    role: "Developer",
    description: "Technical configuration and community server management.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "AspireSMP",
    role: "Developer",
    description: "Custom game mechanics and server-side optimization.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "ElysiumMC",
    role: "Developer",
    description: "General development and performance tuning for survival gameplay.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "HailingMC",
    role: "Developer",
    description: "Backend development and system administration services.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Cleave SMP",
    role: "Developer",
    description: "Previous survival community project.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Tide SMP",
    role: "Developer",
    description: "Custom plugin development for ocean-themed survival.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  }
];

const ContainerIcon = Database;

export const SKILLS: Skill[] = [
  { name: "Java", category: "Language", icon: Code2 },
  { name: "Python", category: "Language", icon: Terminal },
  { name: "TypeScript / JS", category: "Language", icon: Globe },
  { name: "Bash / Shell", category: "Language", icon: Terminal },
  { name: "Linux (Ubuntu/Debian)", category: "System", icon: Server },
  { name: "Docker", category: "System", icon: ContainerIcon }, 
  { name: "Pterodactyl Panel", category: "System", icon: Layout },
  { name: "Nginx / Apache", category: "System", icon: Globe },
  { name: "Discord API", category: "Platform", icon: Gamepad2 },
  { name: "Minecraft API (Spigot/Paper)", category: "Platform", icon: Gamepad2 },
  { name: "Cloud Infrastructure", category: "Platform", icon: Cloud },
  { name: "Git", category: "Software", icon: Code2 },
  { name: "IntelliJ IDEA", category: "Software", icon: Layout },
  { name: "System Administration", category: "Software", icon: Shield },
];

export const TERMS_OF_SERVICE: TOSCategory[] = [
  {
    title: "1. General Terms",
    points: [
      { label: "Agreement", text: "By commissioning any development work, you (the Client) agree to these terms. Ignorance of these terms is not a valid excuse for a breach." },
      { label: "Service Eligibility", text: "I reserve the right to decline any project without explanation. I will not work on projects that involve illegal activities or malicious intent (e.g., malware, botnets)." }
    ]
  },
  {
    title: "2. Project Scope & \"Scope Creep\"",
    points: [
      { label: "The Brief", text: "Before work begins, the Client must provide a detailed list of tasks/features and a hard deadline." },
      { label: "Scope Creep", text: "Any feature requested after the initial agreement is considered \"extra.\" I will provide a separate quote for these additions. I am only obligated to deliver what was listed in the initial agreement." },
      { label: "Access", text: "The Client must provide all necessary access (SFTP, Panel, API keys) within 24 hours of the project start. Delays in access will result in an automatic extension of the deadline." }
    ]
  },
  {
    title: "3. Payment Policy",
    points: [
      { label: "The Deposit", text: "A 100% upfront deposit is required for all projects. Work will not begin until the deposit is cleared." },
      { label: "Methods", text: "Payments are accepted via Payment Request (Credit/Debit) or Crypto. The Client is responsible for any transaction fees." }
    ]
  },
  {
    title: "4. Intellectual Property & Licensing",
    points: [
      { label: "Ownership", text: "I (the Developer) retain full ownership of the source code and logic. The Client is granted a non-exclusive license to use the product on their specific network/server." },
      { label: "Restrictions", text: "Reselling, redistributing, leaking, or \"de-compiling\" my work is strictly prohibited. Doing so will result in an immediate blacklist and a report to the wider development community." },
      { label: "Portfolio Rights", text: "I reserve the right to showcase the project in my portfolio and \"Credits\" (e.g., a /version or /about command) unless the Client pays an additional NDA (Non-Disclosure) Fee." }
    ]
  },
  {
    title: "5. Refunds & Cancellations",
    points: [
      { label: "No-Refund Policy", text: "Once work has started, the 100% deposit is non-refundable." },
      { label: "Cancellation by Client", text: "If you cancel before 100% of the deadline: I keep the deposit. If you cancel after 100% of the deadline: You are liable for 100% of the total project cost to cover the time invested." },
      { label: "Cancellation by Developer", text: "If I am unable to complete the project due to personal reasons or technical failure, a 100% refund will be issued to the Client." }
    ]
  },
  {
    title: "6. Technical Support & Compatibility",
    points: [
      { label: "New Versions", text: "I am not responsible for breaking changes caused by Minecraft version updates (e.g., 1.21 to 1.22) or third-party plugin updates after the project is delivered. Maintenance for new versions requires a new quote." }
    ]
  },
  {
    title: "7. Blacklist & Termination",
    points: [
      { label: "Respect", text: "Verbal abuse, harassment, or \"pinging\" excessively will result in one warning. A second offense will lead to immediate termination of the service without a refund." },
      { label: "Chargebacks", text: "Any attempt to chargeback through PayPal will result in an immediate permanent blacklist and your information being shared with other developers to prevent further fraud." }
    ]
  }
];

export const PRIVACY_POLICY: TOSCategory[] = [
  {
    title: "1. Data Collection",
    points: [
      { label: "Information Collected", text: "AyrixMC collects minimal data necessary for service delivery, including Discord User IDs, Email addresses, and server credentials for configuration purposes." }
    ]
  },
  {
    title: "2. Third Parties",
    points: [
      { label: "Usage", text: "AyrixMC does not sell your data. We use industry-standard services like Discord and GitHub for project management and communication." }
    ]
  },
  {
    title: "3. Security & Access",
    points: [
      { label: "Safety", text: "I implement strict protocols when handling client credentials. I highly recommend clients change all passwords immediately after services are completed." }
    ]
  }
];

export const TOS_RESERVATION_CLAUSE = "NOTICE: If any TOS or Privacy broken by client, I reserve full right to cancel the commissions and future projects.";

export const GALLERY_IMAGES = [
  {
    src: "/maplesmp.png", // Just drop your images in the 'public' folder and put the name here
    title: "Custom Menu GUI",
    description: "Designed a customized layout and lore design for shop menus."
  },
  {
    src: "/synclastics.png", 
    title: "Server Configuration",
    description: "Backend optimization and custom plugin configuration."
  },
  {
    src: "/lux.png",
    title: "Minetrack Setup",
    description: "Server network tracking and analytics dashboard."
  }
];