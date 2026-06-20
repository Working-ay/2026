import React, { useState } from 'react';
import { Project, ProjectStatus } from '../types';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isPast = project.status === ProjectStatus.PAST;
  const [copied, setCopied] = useState(false);

  const handleCopy = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-6 md:gap-8 ${isPast ? 'opacity-60 grayscale-[30%]' : ''}`}>
      
      {/* Optional Logo Section */}
      {project.logo && (
        <div className="flex-shrink-0">
          <img 
            src={project.logo} 
            alt={`${project.name} logo`} 
            className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-white/10 shadow-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col flex-1">
        
        {/* Header (Title & Role) */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
            {isPast && (
              <span className="text-[10px] font-mono uppercase text-red-400 border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded-full">
                ENDED
              </span>
            )}
          </div>
          <p className="text-blue-500 font-semibold text-base">
            {project.role}
          </p>
        </div>

        {/* Date / Duration */}
        {project.date && (
          <p className="text-gray-500 text-sm font-mono mb-5">
            {project.date}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed max-w-3xl mb-6">
          {project.description}
        </p>

        {/* Action Buttons (Only render if provided) */}
        {(project.discord || project.website || project.ip) && (
          <div className="flex flex-wrap gap-3">
            {project.discord && (
              <a href={project.discord} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
                Discord
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors">
                <ExternalLink size={16} />
                Website
              </a>
            )}
            {project.ip && (
              <button onClick={() => handleCopy(project.ip!)} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors cursor-pointer">
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                {copied ? 'Copied!' : project.ip}
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};