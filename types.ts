export type Language = 'en' | 'km';

export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Renovation' | 'Eco-Friendly';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  location: string;
  details: string;
  status: 'Completed' | 'In Progress' | 'Planning';
}

export interface Template {
  id: number;
  title: string;
  size: string;
  type: string;
  price: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location: string;
  icon: string;
}

export enum Page {
  Home = 'Home',
  Projects = 'Projects',
  Services = 'Services',
  Template = 'Template',
  About = 'About',
  Contact = 'Contact'
}