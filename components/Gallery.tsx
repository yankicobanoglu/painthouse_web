import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { X } from 'lucide-react';

interface GalleryProps {
  images: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!images.length) return null;

  return (
    <div className="w-full bg-white rounded-[3rem] p-6 md:p-10 shadow-sm border border-ph-green/20 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="font-display text-3xl text-ph-dark mb-2">
            Community Moments
          </h2>
          <p className="text-ph-dark/60 text-lg">Snapshots from our latest creative chaos.</p>
        </div>
        <button className="bg-ph-green px-6 py-3 rounded-full font-bold text-ph-dark hover:bg-ph-accent hover:text-white transition-colors">
          See more on Instagram
        </button>
      </div>
      
      {/* Gallery Grid */}
      <div className={`grid gap-4 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-4'}`}>
        
        {images.map((img, idx) => (
          <div 
             key={idx}
             className={`
               relative group cursor-pointer overflow-hidden rounded-2xl w-full
               ${idx === 0 && images.length > 1 ? 'col-span-2 md:col-span-2 row-span-2 aspect-video' : ''}
               ${images.length === 1 ? 'h-64 md:h-[500px]' : 'aspect-square'}
             `}
             onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <p className="text-white font-bold text-xl">{img.caption || img.alt}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ph-dark/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-ph-accent p-2">
            <X size={32} />
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
            {selectedImage.caption && (
               <p className="text-white mt-4 font-medium bg-black/50 px-4 py-2 rounded-full">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};