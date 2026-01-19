import React from 'react';
import { content } from './content';
import { LinkCard } from './components/LinkCard';
import { Gallery } from './components/Gallery';
import { EventCalendar } from './components/EventCalendar';
import { SocialIcon } from './components/Icons';
import { MapPin } from 'lucide-react';

const App: React.FC = () => {
  const { profile, socials, links, gallery } = content;

  // Filter events that have ISO dates for the calendar
  const calendarEvents = links.filter(l => l.dateIso);

  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center pb-20">
      {/* Main Container */}
      <div className="w-full max-w-7xl flex flex-col gap-10 relative">
        
        {/* TOP SECTION: Split Profile+Calendar (Left) & Events (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Profile & Calendar Combined */}
          <aside className="lg:col-span-4 w-full">
            <div className="bg-ph-cream/90 backdrop-blur-sm rounded-[2.5rem] p-8 shadow-sm border border-white/50 flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
              
              {/* --- Profile Info --- */}
              <div className="w-full flex flex-col items-center lg:items-start">
                  {/* Avatar */}
                  <div className="relative mb-6 group">
                    <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-8 border-white shadow-lg mx-auto lg:mx-0">
                      <img 
                        src={profile.avatarUrl} 
                        alt={profile.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute 
                      -bottom-2 -right-2 lg:-right-6 
                      bg-ph-accent text-white text-xs font-bold px-4 py-1 
                      rounded-full rotate-[-6deg] shadow-md border-2 border-white"
                    >
                      Join us!
                    </div>
                  </div>

                  {/* Name & Handle */}
                  <h1 className="font-display text-3xl lg:text-4xl text-ph-dark mb-1 tracking-tight">
                    {profile.name}
                  </h1>
                  <a 
                    href={`https://instagram.com/${profile.handle.replace('@', '')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-ph-dark/60 font-medium hover:text-ph-accent transition-colors mb-4 block"
                  >
                    {profile.handle}
                  </a>

                  {/* Bio */}
                  <p className="text-ph-dark/80 mb-6 leading-relaxed font-light">
                    {profile.bio}
                  </p>

                  {/* Location */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-ph-dark/70 font-bold text-xs mb-6 bg-white/60 py-2 px-4 rounded-full w-fit mx-auto lg:mx-0">
                    <MapPin size={14} />
                    {profile.location}
                  </div>

                  {/* Social Buttons */}
                  <div className="flex gap-3 justify-center lg:justify-start w-full">
                    {socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-ph-dark hover:bg-ph-dark hover:text-white transition-all duration-300 shadow-sm hover:scale-110"
                        aria-label={social.platform}
                      >
                        <SocialIcon platform={social.platform} className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
              </div>

              {/* --- Calendar Section Divider --- */}
              <div className="w-full h-px bg-ph-dark/10"></div>

              {/* --- Calendar Component --- */}
              <div className="w-full">
                <EventCalendar events={calendarEvents} />
              </div>

            </div>
          </aside>

          {/* RIGHT COLUMN: Event List (What's On) */}
          <main className="lg:col-span-8 flex flex-col">
             <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between px-2">
                  <h2 className="font-display text-4xl text-ph-dark">What's On</h2>
                  <span className="hidden md:inline-block text-sm font-bold bg-white/50 px-4 py-2 rounded-full text-ph-dark/60">
                    {links.length} Upcoming
                  </span>
                </div>
                
                {links.map((item) => (
                  <LinkCard key={item.id} item={item} />
                ))}
             </div>
          </main>
        
        </div>

        {/* BOTTOM SECTION: Full Width Gallery */}
        <section className="mt-4">
          <Gallery images={gallery} />
        </section>

        {/* Footer */}
        <footer className="text-center text-ph-dark/40 text-sm mt-8 pb-8">
          <p>© {new Date().getFullYear()} {profile.name} Art Collective. Designed with 🍵</p>
        </footer>

      </div>
    </div>
  );
};

export default App;