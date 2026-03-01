import React from 'react';
import { ShowcaseItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item }) => {
  return (
    <div className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] p-10 transition-all duration-500 rounded-sm">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.2em]">
              {item.type}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
              {item.title}
            </h3>
          </div>
          {item.link !== "#" && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        
        <p className="text-gray-500 text-sm leading-relaxed font-light">
          {item.description}
        </p>

        <div className="pt-4 flex items-center gap-2">
          <div className="h-px flex-grow bg-white/5 group-hover:bg-white/10 transition-colors"></div>
        </div>
      </div>
    </div>
  );
};