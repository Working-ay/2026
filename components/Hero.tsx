import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { Project } from '../types';

const COLUMNS = [
  { pos: 'left-[3%]', size: 'w-28', speed: 70, offset: '-10%', show: 'hidden md:block', fade: 'opacity-40' },
  { pos: 'left-[15%]', size: 'w-36', speed: 55, offset: '-35%', show: 'hidden lg:block', fade: 'opacity-90' },
  { pos: 'right-[15%]', size: 'w-36', speed: 60, offset: '-20%', show: 'hidden lg:block', fade: 'opacity-90' },
  { pos: 'right-[3%]', size: 'w-28', speed: 80, offset: '-45%', show: 'hidden md:block', fade: 'opacity-40' },
];

const Tile: React.FC<{ project: Project; size: string; shift: boolean }> = ({ project, size, shift }) => (
  <div className={`${size} ${shift ? 'ml-8' : ''} group`}>
    <div className="aspect-square rounded-2xl overflow-hidden border border-line bg-surface shadow-2xl shadow-black/40">
      <img
        src={project.logo}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition duration-500"
      />
    </div>
    <p className="mt-2 text-xs text-dim truncate">{project.name}</p>
  </div>
);

export const Hero: React.FC = () => {
  const withLogos = PROJECTS.filter((p) => p.logo);

  return (
    <section className="relative h-[calc(100vh-3.5rem)] min-h-[560px] overflow-hidden flex items-center justify-center px-5">
      <style>{`
        @keyframes drift { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .drift { animation: drift linear infinite; }
        .drift-mask {
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
          mask-image: linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent);
        }
        @media (prefers-reduced-motion: reduce) { .drift { animation: none; } }
      `}</style>

      {withLogos.length > 0 && COLUMNS.map((col, c) => {
        const items = withLogos.filter((_, i) => i % COLUMNS.length === c);
        const base = items.length ? items : withLogos;
        const loop = Array.from({ length: Math.max(2, Math.ceil(6 / base.length)) }, () => base).flat();
        return (
          <div key={c} className={`absolute inset-y-0 ${col.pos} ${col.show} ${col.fade} drift-mask pointer-events-auto`}>
            <div className="drift flex flex-col gap-24" style={{ animationDuration: `${col.speed}s`, marginTop: col.offset }}>
              {[...loop, ...loop].map((p, i) => (
                <Tile key={i} project={p} size={col.size} shift={i % 2 === 1} />
              ))}
            </div>
          </div>
        );
      })}

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,#1f1e1c_25%,transparent_65%)]" />

      <div className="relative z-10 max-w-xl text-center fade-up">
        <p className="text-sm text-dim mb-5">Configurator · Optimiser · SysAdmin</p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] text-ink">
          Hi, I'm Ayrix
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          I set up, configure and optimise Minecraft networks, from full server setups to bug fixing and performance tuning.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-9">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ink text-bg text-sm font-medium hover:bg-white transition-colors"
          >
            View projects <ArrowRight size={16} />
          </Link>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line bg-surface/60 text-sm text-ink hover:bg-white/5 transition-colors"
          >
            Contact on Discord
          </a>
        </div>
      </div>
    </section>
  );
};