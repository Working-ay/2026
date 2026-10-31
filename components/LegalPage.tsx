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
    <Section id="legal" title={title} subtitle={`Last updated ${lastUpdated}`}>
      <div className="space-y-10">
        {data.map((category, index) => (
          <div key={index}>
            <h3 className="font-serif text-xl text-ink mb-4">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.points.map((point, pIndex) => (
                <li key={pIndex} className="text-muted text-[15px] leading-relaxed">
                  <span className="text-ink font-medium">{point.label}.</span> {point.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {footer && (
        <p className="mt-12 p-4 rounded-xl bg-surface border border-line text-sm text-muted leading-relaxed">
          {footer}
        </p>
      )}
    </Section>
  );
};