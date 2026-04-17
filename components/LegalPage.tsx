import React from 'react';
import { Section } from './Section';
import { TOSCategory } from '../types';

interface LegalProps {
  title: string;
  lastUpdated: string;
  data: TOSCategory[];
  footer?: string;
}

export const LegalPage: React.FC<LegalProps> = ({ title, lastUpdated, data, footer }) => {
  return (
    <Section id="legal" title={title}>
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-12 text-center">
          Last Updated: {lastUpdated}
        </p>
        
        <div className="space-y-12">
          {data.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-white font-bold tracking-tight border-b border-white/5 pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.points.map((point, pIndex) => (
                  <p key={pIndex} className="text-gray-500 text-sm leading-relaxed font-sans">
                    <span className="text-gray-200 font-bold">{point.label}:</span> {point.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-gray-600 text-[11px] font-mono italic text-center uppercase tracking-tighter">
              {footer}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};