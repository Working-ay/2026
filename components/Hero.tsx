import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => (
  <section className="h-[calc(100vh-3.5rem)] min-h-[520px] flex items-center justify-center px-5">
    <div className="max-w-xl text-center fade-up">
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
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line text-sm text-ink hover:bg-white/5 transition-colors"
        >
          Contact on Discord
        </a>
      </div>
    </div>
  </section>
);