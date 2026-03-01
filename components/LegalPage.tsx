import React from 'react';
import { Section } from './Section';

interface LegalProps {
  title: string;
  lastUpdated: string;
  sections: { title: string; content: string }[];
}

export const LegalPage: React.FC<LegalProps> = ({ title, lastUpdated, sections }) => {
  return (
    <Section id="legal" title={title}>
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-12 text-center">
          Last Updated: {lastUpdated}
        </p>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-bold tracking-tight">{section.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};