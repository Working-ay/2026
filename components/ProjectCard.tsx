import React, { useState } from 'react';
import { Project, ProjectStatus } from '../types';
import { ExternalLink, Copy, Check } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const btn = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line text-muted hover:text-ink hover:bg-white/5 text-xs font-medium transition-colors";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isPast = project.status === ProjectStatus.PAST;
  const [copied, setCopied] = useState(false);

  const handleCopy = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex gap-4 p-4 rounded-2xl bg-surface border border-line hover:border-white/15 transition-colors ${isPast ? 'opacity-60' : ''}`}>
      {project.logo ? (
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          className="w-12 h-12 rounded-xl object-cover shrink-0 border border-line"
        />
      ) : (
        <div className="w-12 h-12 rounded-xl bg-raised shrink-0 flex items-center justify-center font-serif text-lg text-muted">
          {project.name.charAt(0)}
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-ink font-medium truncate">{project.name}</h3>
          {isPast && (
            <span className="text-[11px] text-dim border border-line px-1.5 py-px rounded-md">
              Ended
            </span>
          )}
        </div>

        <p className="text-sm text-accent mt-0.5">
          {project.role}
          {project.date && <span className="text-dim"> · {project.date}</span>}
        </p>

        <p className="text-sm text-muted leading-relaxed mt-2">
          {project.description}
        </p>

        {(project.discord || project.website || project.ip) && (
          <div className="flex flex-wrap gap-2 mt-3">
            {project.discord && (
              <a href={project.discord} target="_blank" rel="noopener noreferrer" className={btn}>
                Discord <ExternalLink size={12} />
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className={btn}>
                Website <ExternalLink size={12} />
              </a>
            )}
            {project.ip && (
              <button onClick={() => handleCopy(project.ip!)} className={`${btn} font-mono cursor-pointer`}>
                {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                {copied ? 'Copied' : project.ip}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};