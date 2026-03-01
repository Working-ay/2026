import { LucideIcon } from 'lucide-react';

export enum ProjectStatus {
  CURRENT = 'Current',
  PAST = 'Past'
}

export enum ProjectCategory {
  HOSTING = 'Hosting Solutions',
  MINECRAFT = 'Minecraft Network',
  DEVELOPMENT = 'Development',
  COMMUNITY = 'Community'
}

export interface Project {
  name: string;
  role: string;
  description?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  link?: string;
}

export interface ShowcaseItem {
  title: string;
  type: 'Plugin' | 'Website' | 'Application';
  description: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Software' | 'System' | 'Platform';
  icon?: LucideIcon;
}

export interface Review {
  username: string;
  rating: number;
  content: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
}