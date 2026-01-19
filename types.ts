import { LucideIcon } from 'lucide-react';

export enum LinkType {
  EVENT = 'EVENT',
  SIGNUP = 'SIGNUP',
  WHATSAPP = 'WHATSAPP',
  EXTERNAL = 'EXTERNAL'
}

export interface SocialLink {
  platform: 'Instagram' | 'TikTok' | 'Email' | 'Website';
  url: string;
  username?: string;
}

export interface EventItem {
  id: string;
  title: string;
  dateStr: string; // Display text like "Jan 20"
  dateIso: string; // ISO format for calendar logic e.g. "2024-01-20"
  status?: 'AVAILABLE' | 'SOLD_OUT' | 'COMING_SOON';
  url: string;
  type: LinkType;
  description?: string;
  image?: string; // New field for event banner image
}

export interface GalleryImage {
  url: string;
  caption?: string;
  alt: string;
}

export interface AppContent {
  profile: {
    name: string;
    handle: string;
    bio: string;
    location: string;
    avatarUrl: string;
  };
  socials: SocialLink[];
  links: EventItem[];
  gallery: GalleryImage[];
}