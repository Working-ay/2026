import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ReviewCard } from './components/ReviewCard';
import { LegalPage } from './components/LegalPage';
import { PROJECTS, SKILLS, REVIEWS, SOCIAL_LINKS, SHOWCASE_ITEMS, LEGAL_CONTENT } from './constants';
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
        
        {/* LEGAL LINKS ADDED HERE */}
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
        System Interface v2.0
      </p>
      <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-white">
        AYRIX<span className="text-gray-800">MC</span>
      </h1>
      <div className="flex flex-col items-center gap-6 font-mono text-xs md:text-sm text-gray-500">
         <div className="flex gap-4 uppercase tracking-widest">
            <span>SysAdmin</span>
            <span>•</span>
            <span>Developer</span>
            <span>•</span>
            <span>Hosting</span>
         </div>
        <p className="max-w-md leading-relaxed text-gray-600">
          Architecting high-performance infrastructure and automated backend systems for gaming networks.
        </p>
      </div>
    </div>
  </section>
);

const ProjectsPage = () => (
  <Section id="projects" title="PROJECTS">
    <div className="columns-1 md:columns-2 lg:columns-3 gap-16 space-y-16">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={`${project.name}-${index}`} project={project} />
      ))}
    </div>
  </Section>
);

const ShowcasePage = () => (
  <Section id="showcase" title="SHOWCASE">
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

const ExperiencePage = () => (
  <Section id="experience" title="EXPERIENCE">
    <div className="max-w-2xl mx-auto space-y-20 text-center md:text-left">
      <div className="">
        <div className="flex flex-col items-center md:items-start gap-1 mb-3">
          <h3 className="text-xl font-bold text-white">Director & COO</h3>
          <span className="font-mono text-xs text-gray-600">@ Synclastics Cloud Technologies</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
          Leading operations and strategic infrastructure planning. Managing cloud resources and client deployment strategies.
        </p>
      </div>
       <div className="">
        <div className="flex flex-col items-center md:items-start gap-1 mb-3">
          <h3 className="text-xl font-bold text-gray-300">Developer</h3>
          <span className="font-mono text-xs text-gray-600">@ Sterro Cloud Hosting</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
          Backend development for hosting panels and node management optimization.
        </p>
      </div>
      <div className="">
        <div className="flex flex-col items-center md:items-start gap-1 mb-3">
          <h3 className="text-xl font-bold text-gray-300">Founder</h3>
          <span className="font-mono text-xs text-gray-600">@ JollySMP & Boiga SMP</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
          Established and scaled multiple Minecraft communities. Managed dedicated hardware and custom plugin development.
        </p>
      </div>
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
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          
          {/* LEGAL ROUTES ADDED HERE */}
          <Route path="/tos" element={
            <LegalPage 
              title="TERMS OF SERVICE" 
              lastUpdated={LEGAL_CONTENT.tos.lastUpdated} 
              sections={LEGAL_CONTENT.tos.sections} 
            />
          } />
          <Route path="/privacy" element={
            <LegalPage 
              title="PRIVACY POLICY" 
              lastUpdated={LEGAL_CONTENT.privacy.lastUpdated} 
              sections={LEGAL_CONTENT.privacy.sections} 
            />
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;