import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ReviewCard } from './components/ReviewCard';
import { LegalPage } from './components/LegalPage';
import { 
  PROJECTS, 
  SKILLS, 
  REVIEWS, 
  SOCIAL_LINKS, 
  SHOWCASE_ITEMS, 
  TERMS_OF_SERVICE, 
  PRIVACY_POLICY, 
  TOS_RESERVATION_CLAUSE,
  GALLERY_IMAGES // <--- Added the new gallery import here
} from './constants';
import { ProjectStatus } from './types';
import { Github, Mail, Disc, ExternalLink } from 'lucide-react';

// Layout component to wrap all pages
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <footer className="py-24 px-6 text-center border-t border-white/5">
        <div className="flex justify-center gap-12 mb-8">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors"><Github size={20} /></a>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors"><Disc size={20} /></a>
          <a href={SOCIAL_LINKS.email} className="text-gray-600 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 font-mono text-[9px] uppercase tracking-widest text-gray-600">
          <Link to="/tos" className="hover:text-white transition-colors">Terms of Service</Link>
          <span>/</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        <p className="text-gray-800 font-mono text-[10px] uppercase tracking-widest">
          AyrixMC System • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

// Page Components
const HomePage = () => (
  <section className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
    <div className="max-w-4xl w-full text-center relative z-10">
      <p className="font-mono text-xs text-gray-600 mb-8 tracking-[0.3em] uppercase">
        COMMISSIONS ARE OPEN
      </p>
      <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-white">
        AYRIX<span className="text-gray-800">MC</span>
      </h1>
      <div className="flex flex-col items-center gap-6 font-mono text-xs md:text-sm text-gray-500">
         <div className="flex flex-wrap justify-center gap-3 md:gap-4 uppercase tracking-widest">
            <span>Configurator</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span>Optimiser</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span>SysAdmin</span>
         </div>
        <p className="max-w-lg leading-relaxed text-gray-400 text-sm md:text-base">
          Specializing in full server setups, advanced plugin configuration, comprehensive bug fixing, and performance optimization for Minecraft networks.
        </p>
      </div>
    </div>
  </section>
);

const ProjectsPage = () => {
  const currentProjects = PROJECTS.filter(p => p.status === ProjectStatus.CURRENT);
  const endedProjects = PROJECTS.filter(p => p.status === ProjectStatus.PAST);

  return (
    <Section id="projects" title="PROJECTS">
      <div className="space-y-24 max-w-4xl mx-auto">
        
        {/* CURRENT PROJECTS */}
        <div>
          <h3 className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-4">
            Current Engagements
          </h3>
          <div className="flex flex-col gap-14">
            {currentProjects.map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* ENDED PROJECTS SECTION */}
        {endedProjects.length > 0 && (
          <div>
            <h3 className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-4">
              Completed / Past Projects
            </h3>
            <div className="flex flex-col gap-14">
              {endedProjects.map((project, index) => (
                <ProjectCard key={`${project.name}-${index}`} project={project} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </Section>
  );
};

const ShowcasePage = () => (
  <Section id="showcase" title="PRODUCTS">
    <div className="max-w-2xl mx-auto divide-y divide-white/5">
      {SHOWCASE_ITEMS.map((item, index) => (
        <div key={`${item.title}-${index}`} className="py-10 first:pt-0 last:pb-0">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">{item.type}</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
          {item.link !== "#" && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              Visit <ExternalLink size={10} />
            </a>
          )}
        </div>
      ))}
    </div>
  </Section>
);

const SkillsPage = () => (
  <Section id="skills" title="SKILLS">
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-3xl mx-auto">
      {SKILLS.map((skill) => (
        <div key={skill.name} className="group flex items-center gap-3">
          <span className="w-0.5 h-0.5 bg-gray-700 group-hover:bg-white transition-colors"></span>
          <span className="font-mono text-sm text-gray-500 group-hover:text-white transition-colors cursor-default">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

// REPLACED THE OLD EXPERIENCE PAGE WITH THE NEW GALLERY
// Change it to look exactly like this:
const GalleryPage = () => (
  <Section id="gallery" title="GALLERY">
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
      {GALLERY_IMAGES.map((img, index) => (
// ... rest of the code stays the same
        <div 
          key={index} 
          className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl cursor-pointer"
        >
          {/* The Image */}
          <img 
            src={img.src} 
            alt={img.title} 
            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Hover Overlay with text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-lg md:text-xl tracking-tight drop-shadow-md">
              {img.title}
            </h3>
            {img.description && (
              <p className="text-gray-300 text-xs md:text-sm mt-2 font-mono leading-relaxed drop-shadow-md">
                {img.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const ReviewsPage = () => (
  <Section id="reviews" title="REVIEWS">
    <div className="flex flex-col max-w-4xl mx-auto">
      {REVIEWS.map((review, index) => (
        <ReviewCard key={`${review.username}-${index}`} review={review} />
      ))}
    </div>
  </Section>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          
          <Route path="/tos" element={
            <LegalPage 
              title="TERMS OF SERVICE" 
              lastUpdated="April 17, 2026" 
              data={TERMS_OF_SERVICE} 
              footer={TOS_RESERVATION_CLAUSE}
            />
          } />
          <Route path="/privacy" element={
            <LegalPage 
              title="PRIVACY POLICY" 
              lastUpdated="April 17, 2026" 
              data={PRIVACY_POLICY} 
            />
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;