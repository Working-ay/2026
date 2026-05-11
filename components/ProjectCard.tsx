import React from 'react';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isPast = project.status === ProjectStatus.PAST;

  return (
    <div className={`p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 flex flex-col h-full ${isPast ? 'opacity-60 grayscale-[50%]' : 'hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1'}`}>
      <div className="flex gap-5 md:gap-6 items-start">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 mt-1">
          {project.logo ? (
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="w-16 h-16 rounded-xl object-cover border border-white/10 shadow-lg"
            />
          ) : (
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white/40 font-mono">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 w-full">
          <div className="flex justify-between items-start gap-4 mb-2">
            <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
              {project.name}
            </h3>
            {isPast && (
               <span className="flex-shrink-0 text-[10px] font-mono uppercase text-red-400 border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded-full mt-1">
                 ENDED
               </span>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
              {project.role}
            </span>
            <span className="text-[10px] text-gray-700">•</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-500">
               {project.category.replace(' Solutions', '').replace(' Network', '')}
            </span>
          </div>

          <p className="text-sm text-gray-400 font-light leading-relaxed">
            {project.description}
          </p>
        </div>

      </div>
    </div>
  );
};