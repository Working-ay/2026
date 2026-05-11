import React from 'react';
import { Project, ProjectStatus } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use ProjectStatus.PAST instead of 'PAST'
  const isPast = project.status === ProjectStatus.PAST;

  return (
    <div className={`mb-16 break-inside-avoid transition-opacity duration-300 ${isPast ? 'opacity-50' : 'hover:opacity-80'}`}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-white tracking-tight">
            {project.name}
          </h3>
          {isPast && (
             <span className="text-[10px] font-mono uppercase text-red-500/50">ENDED</span>
          )}
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            {project.role}
          </span>
          <span className="text-[10px] text-gray-700">•</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">
             {project.category.replace(' Solutions', '').replace(' Network', '')}
          </span>
        </div>

        <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mt-1">
          {project.description}
        </p>
      </div>
    </div>
  );
};