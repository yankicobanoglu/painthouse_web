import { AppContent, LinkType } from './types';

/**
 * =========================================================================================
 *  PAINTHOUSE WEBSITE CONTENT CONFIGURATION
 * =========================================================================================
 */

export const content: AppContent = {
  // 1. PROFILE SECTION
  profile: {
    name: "Painthouse",
    handle: "@painthouse_nl",
    bio: "Create & connect 🎨 Art workshop & community run by volunteers.",
    location: "Eindhoven, NL 🇳🇱",
    avatarUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop", 
  },

  // 2. SOCIAL MEDIA LINKS
  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/painthouse_nl",
      username: "@painthouse_nl"
    },
    {
      platform: "TikTok",
      url: "https://tiktok.com/@painthouse_nl",
      username: "@painthouse_nl"
    },
    {
      platform: "Email",
      url: "mailto:hello@painthouse.nl",
    }
  ],

  // 3. EVENTS & LINKS LIST
  links: [
    {
      id: "1",
      title: "Art Circle: Vision Board Making",
      dateStr: "7th Jan",
      dateIso: "2024-01-07", // Used for Calendar placement
      url: "https://example.com/ticket-link", 
      type: LinkType.EVENT,
      status: "AVAILABLE",
      description: "19:45 | Effenaar Meet & Eats",
      // Banner image for the card
      image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Monthly Drawing Meetup",
      dateStr: "14th Jan",
      dateIso: "2024-01-14",
      url: "#",
      type: LinkType.SIGNUP,
      status: "SOLD_OUT",
      description: "19:45 | Douwe Egberts Café",
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Craft Cinema: Studio Ghibli",
      dateStr: "20th Jan",
      dateIso: "2024-01-20",
      url: "https://forms.google.com/example",
      type: LinkType.EVENT,
      status: "AVAILABLE",
      description: "Time TBD | Lab-1 Eindhoven",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Join our WhatsApp Community",
      dateStr: "Always Open",
      dateIso: "",
      url: "https://chat.whatsapp.com/example-invite-link",
      type: LinkType.WHATSAPP,
      description: "Get updates first and meet other artists.",
      // No image means it will use the default solid color style
    }
  ],

  // 4. PHOTO GALLERY
  // Only one featured image as requested
  gallery: [
    {
      // Using the large group photo from context
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
      alt: "Community group photo",
      caption: "Our lovely community at the Christmas Dinner 🎄"
    }
  ]
};