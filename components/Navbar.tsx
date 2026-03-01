import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Reviews', href: '/reviews' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8 flex justify-center backdrop-blur-sm bg-black/60">
      <ul className="flex gap-4 md:gap-10 px-4">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.label}>
              <Link 
                to={item.href}
                className={`text-[10px] md:text-xs font-mono transition-colors uppercase tracking-[0.2em] whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};