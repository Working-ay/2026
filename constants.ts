import { Project, ProjectCategory, ProjectStatus, Skill, Review, ShowcaseItem } from './types';
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
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Synclastics Cloud Technologies",
    role: "Director & COO",
    description: "Leading operations and strategic direction for cloud infrastructure services.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING
  },
  {
    name: "MJF",
    role: "Manager",
    description: "Managing MJF community and overseeing server infrastructure.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING
  },
  {
    name: "Boiga's Lounge",
    role: "Youtube Manager",
    description: "Helping in managing events and media content.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.DEVELOPMENT
  },
  {
    name: "FuzzMC",
    role: "Developer",
    description: "A custom Minecraft lifesteal server experience with unique mechanics.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "MapleSMP",
    role: "Network Manager & Developer",
    description: "Managing community and server infrastructure for a gaming network.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "MythMC",
    role: "Developer",
    description: "Development and system configuration.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Crit PVP",
    role: "Manager",
    description: "Managing PvP combat mechanics and server latency.",
    status: ProjectStatus.CURRENT,
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

export const LEGAL_CONTENT = {
  tos: {
    lastUpdated: "March 1, 2026",
    sections: [
      {
        title: "1. Service Terms & Deadlines",
        content: "By engaging with AyrixMC for development, system administration, or hosting services, you agree to these terms. If AyrixMC is unable to complete a project within the initially agreed-upon timeframe, the client will not be charged for the pending work until the project is fully completed."
      },
      {
        title: "2. Accepted Payment Methods",
        content: "AyrixMC strictly accepts payments through the following methods: Xoom (for PayPal users), Direct Bank Transfers, Skrill, Payoneer, and Cryptocurrency."
      },
      {
        title: "3. Late Payments & Server Rights",
        content: "Payments must be made promptly upon project completion or invoice generation. If a payment is delayed for more than 3 days without prior agreement, AyrixMC reserves the absolute right to take administrative action. This includes the right to revoke server access, modify or delete server files, and report the client."
      },
      {
        title: "4. Breach of Trust & Scamming",
        content: "In the event of a chargeback, scam, or severe breach of trust ('betrayal'), AyrixMC reserves the right to publicly report the offending individual and their server to relevant Minecraft community blacklists, developer networks, and server owners."
      },
      {
        title: "5. Liability & Backups",
        content: "AyrixMC is not responsible for data loss, server downtime, or security breaches on client-managed infrastructure. AyrixMC highly recommends clients maintain regular backups for all production environments."
      },
      {
        title: "6. Communication & Response Protocol",
        content: "If AyrixMC does not reply to your message immediately, you must wait 3-5 days before sending further inquiries. If you consider the delay a scam or any form of misconduct during this window, that is not AyrixMC's fault, and AyrixMC will not be held liable for your interpretation of the response time."
      }
    ]
  },
  privacy: {
    lastUpdated: "March 1, 2026",
    sections: [
      {
        title: "1. Data Collection",
        content: "AyrixMC collects minimal data necessary for service delivery, including Discord User IDs, Email addresses for communication, and server IP addresses/credentials for configuration purposes."
      },
      {
        title: "2. Third Parties",
        content: "AyrixMC does not sell your data. AyrixMC uses industry-standard third-party services like Discord and GitHub for project management and communication."
      },
      {
        title: "3. Security & Access",
        content: "AyrixMC implements strict security protocols when handling client credentials (SFTP/SSH/Panel). AyrixMC requires and recommends clients to change all passwords and revoke access keys immediately after AyrixMC's services are completed."
      }
    ]
  }
};