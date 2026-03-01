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
    description: "A premium Minecraft shop plugin designed for scalability and performance, featuring advanced UI/UX and dynamic economies.",
    link: "#"
  },
  {
    title: "GenericTags",
    type: "Plugin",
    description: "High-performance chat and nameplate tag management system for large-scale Minecraft networks.",
    link: "#"
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
    link: "https://apps.jollymc.fun"
  }
];

export const REVIEWS: Review[] = [
  {
    username: "account._.changed08",
    rating: 5,
    content: "AyrixMC is one of the best developers I've worked with. He is a fantastic developer and manager who handles server development perfectly. I can't recommend him enough. Thanks for working with me!",
    date: "1/27/2026"
  },
  {
    username: "bmoneyboy",
    rating: 5,
    content: "Ayrix is an excellent developer. He completes tasks quickly with exceptional care and quality. He's very professional and ensures you're always kept in the loop. I would definitely recommend Ayrix!!",
    date: "1/27/2026"
  },
  {
    username: "kasinathan2008",
    rating: 5,
    content: "Simply cool! A lot of hard work is put in by @ayrixmc. I wish him massive growth and success in all of his future endeavors.",
    date: "1/27/2026"
  },
  {
    username: "hashir_734_1",
    rating: 5,
    content: "AyrixMC is a wonderful web and Minecraft developer. He recently developed my Minecraft server and website with a stunning theme. It looks amazing and I recommend his services to everyone.",
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
    name: "Sterro Cloud Hosting",
    role: "Developer",
    description: "Backend development and infrastructure management for hosting solutions.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING
  },
  {
    name: "Play Games Interactive",
    role: "Team Member",
    description: "Collaborative development on interactive gaming experiences.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.DEVELOPMENT
  },
  {
    name: "JollySMP",
    role: "Developer",
    description: "A custom Minecraft survival multiplayer experience with unique mechanics.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "MapleSMP",
    role: "Manager",
    description: "Managing community and server infrastructure for a gaming network.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Sky Realms",
    role: "Developer",
    description: "Plugin development and system configuration.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Crit PVP",
    role: "SysAdmin",
    description: "Optimizing PvP combat mechanics and server latency.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Boiga SMP",
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