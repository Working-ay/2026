import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-20 px-5 max-w-3xl mx-auto fade-up ${className}`}>
      {title && (
        <header className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
};