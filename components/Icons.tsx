import React from 'react';
import { Instagram, Music, Mail, Globe, Ticket, MessageCircle, ExternalLink, Calendar, Users } from 'lucide-react';

export const SocialIcon = ({ platform, className }: { platform: string, className?: string }) => {
  switch (platform) {
    case 'Instagram': return <Instagram className={className} />;
    case 'TikTok': return <Music className={className} />;
    case 'Email': return <Mail className={className} />;
    default: return <Globe className={className} />;
  }
};

export const TypeIcon = ({ type, className }: { type: string, className?: string }) => {
  switch (type) {
    case 'EVENT': return <Ticket className={className} />;
    case 'WHATSAPP': return <MessageCircle className={className} />;
    case 'SIGNUP': return <Calendar className={className} />;
    default: return <ExternalLink className={className} />;
  }
};