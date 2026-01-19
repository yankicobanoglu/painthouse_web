import React from 'react';
import { EventItem, LinkType } from '../types';
import { TypeIcon } from './Icons';
import { ArrowUpRight } from 'lucide-react';

interface LinkCardProps {
  item: EventItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  const isSoldOut = item.status === 'SOLD_OUT';
  const isWhatsApp = item.type === LinkType.WHATSAPP;
  const hasImage = !!item.image;

  if (hasImage) {
    // Banner Style Card (For Events)
    return (
      <a 
        href={isSoldOut ? undefined : item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative group block w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
          ${isSoldOut ? 'grayscale cursor-not-allowed opacity-80' : 'cursor-pointer'}
        `}
        style={{ aspectRatio: '3/1' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-center text-white z-10">
          <div className="flex items-start justify-between">
            <div className="max-w-[70%]">
              <h3 className="font-display text-2xl md:text-3xl leading-tight mb-2 drop-shadow-lg">
                <span className="text-ph-green mr-3">{item.dateStr}</span>
                {item.title}
              </h3>
              <p className="text-white/90 font-medium text-sm md:text-base flex items-center gap-2">
                 {item.description}
              </p>
            </div>
            
            {/* Status Badge */}
            {isSoldOut ? (
               <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                 Sold Out
               </span>
            ) : (
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white group-hover:bg-ph-accent group-hover:text-black transition-colors">
                <ArrowUpRight size={24} />
              </div>
            )}
          </div>
        </div>
      </a>
    );
  }

  // Fallback / Standard Card (For WhatsApp/Simple Links)
  let cardStyle = "bg-ph-cream hover:shadow-lg hover:-translate-y-1";
  
  if (isWhatsApp) {
    cardStyle = "bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-xl";
  } else if (isSoldOut) {
    cardStyle = "bg-gray-200 opacity-80 cursor-not-allowed";
  }

  return (
    <a 
      href={isSoldOut ? undefined : item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative group flex items-center justify-between p-5 rounded-2xl w-full mb-4 transition-all duration-300 border-2 border-transparent
        ${cardStyle}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          p-3 rounded-full flex-shrink-0
          ${isWhatsApp ? 'bg-white/20' : 'bg-ph-green/30 text-ph-dark'}
        `}>
          <TypeIcon type={item.type} className="w-6 h-6" />
        </div>

        <div className="text-left">
          <h3 className={`font-bold text-lg leading-tight ${isWhatsApp ? 'text-white' : 'text-ph-dark'}`}>
            {item.title}
          </h3>
          {item.description && (
            <p className={`text-sm mt-1 ${isWhatsApp ? 'text-white/90' : 'text-gray-500'}`}>
              {item.description}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};