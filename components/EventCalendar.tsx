import React from 'react';
import { EventItem } from '../types';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface EventCalendarProps {
  events: EventItem[];
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  // Simple calendar logic for the current month
  const today = new Date();
  const currentMonth = 0; // January
  const currentYear = 2024; 

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 is Sunday
  
  // Adjust so Monday is 0
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const getEventForDay = (day: number) => {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(e => e.dateIso === dateString);
  };

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-ph-green/30 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-display text-lg text-ph-dark uppercase">
          {currentYear} <span className="text-ph-accent">{monthNames[currentMonth]}</span>
        </h2>
        <div className="flex gap-1">
          <button className="p-1 rounded-full hover:bg-gray-100 text-gray-400"><ChevronLeft size={16} /></button>
          <button className="p-1 rounded-full hover:bg-gray-100 text-gray-400"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
          <div key={d} className="text-[10px] font-bold text-ph-dark/40 uppercase">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          const event = day ? getEventForDay(day) : null;
          const isToday = day === 7;
          
          return (
            <div key={idx} className="aspect-square relative">
              {day ? (
                <a 
                  href={event ? event.url : undefined}
                  target={event ? "_blank" : undefined}
                  className={`
                    w-full h-full rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200
                    ${event 
                      ? 'bg-ph-dark text-white cursor-pointer hover:scale-110 hover:bg-ph-accent shadow-md' 
                      : 'bg-ph-cream text-ph-dark/50 hover:bg-ph-green/20'
                    }
                    ${isToday && !event ? 'border-2 border-ph-accent' : ''}
                  `}
                >
                  {day}
                  {event && (
                    <span className="absolute bottom-0.5 w-1 h-1 bg-ph-accent rounded-full"></span>
                  )}
                </a>
              ) : (
                <div className="w-full h-full"></div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center gap-3 text-[10px] text-ph-dark/60 justify-center">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-ph-dark"></div> Event
        </div>
         <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-ph-cream border border-ph-dark/10"></div> Free
        </div>
      </div>
    </div>
  );
};