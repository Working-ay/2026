import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-lg text-ink shrink-0">
          AyrixMC
        </Link>
        <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.slice(1).map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`block px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    isActive ? 'bg-raised text-ink' : 'text-muted hover:text-ink hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};