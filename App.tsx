import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ReviewCard } from './components/ReviewCard';
import { LegalPage } from './components/LegalPage';
import { Hero } from './components/Hero';
import { UploadPage } from './components/UploadPage';
import {
  PROJECTS,
  SKILLS,
  REVIEWS,
  SOCIAL_LINKS,
  TERMS_OF_SERVICE,
  PRIVACY_POLICY,
  TOS_RESERVATION_CLAUSE,
  GALLERY_IMAGES
} from './constants';
import { ProjectStatus } from './types';
import { Github, Mail, MessageCircle } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14">
        {children}
      </main>
      <footer className="border-t border-line">
        <div className="max-w-3xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dim">
          <p>© {new Date().getFullYear()} AyrixMC</p>
          <div className="flex items-center gap-5">
            <Link to="/tos" className="hover:text-ink transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <span className="w-px h-4 bg-line" />
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors"><Github size={16} /></a>
            <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-ink transition-colors"><MessageCircle size={16} /></a>
            <a href={SOCIAL_LINKS.email} aria-label="Email" className="hover:text-ink transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => <Hero />;

const GroupLabel: React.FC<{ children: React.ReactNode; count?: number }> = ({ children, count }) => (
  <div className="flex items-center gap-2 mb-4 text-sm text-dim">
    <span>{children}</span>
    {count !== undefined && <span className="px-1.5 rounded-md bg-surface text-xs">{count}</span>}
  </div>
);

const ProjectsPage = () => {
  const currentProjects = PROJECTS.filter(p => p.status === ProjectStatus.CURRENT);
  const endedProjects = PROJECTS.filter(p => p.status === ProjectStatus.PAST);

  return (
    <Section id="projects" title="Projects" subtitle="Servers and networks I'm working with, and ones I've worked with before.">
      <div className="space-y-12">
        <div>
          <GroupLabel count={currentProjects.length}>Current</GroupLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentProjects.map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} project={project} />
            ))}
          </div>
        </div>

        {endedProjects.length > 0 && (
          <div>
            <GroupLabel count={endedProjects.length}>Past</GroupLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

const SkillsPage = () => (
  <Section id="skills" title="Skills" subtitle="Tools and technologies I work with day to day.">
    <div className="flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <span
          key={skill.name}
          className="px-3 py-1.5 rounded-lg bg-surface border border-line text-sm text-muted hover:text-ink hover:border-white/15 transition-colors cursor-default"
        >
          {skill.name}
        </span>
      ))}
    </div>
  </Section>
);

const GalleryPage = () => (
  <Section id="gallery" title="Gallery" subtitle="A few screenshots from setups I've configured.">
    <div className="columns-1 sm:columns-2 gap-4">
      {GALLERY_IMAGES.map((img, index) => (
        <a
          key={index}
          href={img.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-4 break-inside-avoid rounded-2xl border border-line bg-surface overflow-hidden hover:border-white/15 transition-colors"
        >
          <div className="overflow-hidden bg-raised">
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-ink">{img.title}</h3>
            {img.description && (
              <p className="text-sm text-muted leading-relaxed mt-1">{img.description}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  </Section>
);

const ReviewsPage = () => (
  <Section id="reviews" title="Reviews" subtitle={`What ${REVIEWS.length} clients and collaborators have said.`}>
    <div className="columns-1 sm:columns-2 gap-4">
      {REVIEWS.map((review, index) => (
        <ReviewCard key={`${review.username}-${index}`} review={review} />
      ))}
    </div>
  </Section>
);

const Notice: React.FC<{ label?: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="p-5 md:p-6 rounded-2xl bg-surface border border-line border-l-2 border-l-accent">
    {label && <h3 className="font-serif text-lg text-ink mb-3">{label}</h3>}
    <div className="space-y-3 text-[15px] text-muted leading-relaxed [&_strong]:text-ink [&_strong]:font-medium">
      {children}
    </div>
  </div>
);

const ImpPage = () => (
  <Section id="imp" title="Important notice" subtitle="Please read before hiring me.">
    <div className="space-y-4">
      <Notice label="Client decisions">
        <p>I build setups based on what the owner asks for. I provide recommendations, but the final output is always their choice.</p>
        <p>If you dislike a setup, don't judge my abilities for delivering what was requested. I'm not arguing about this or discussing it further.</p>
      </Notice>

      <Notice label="Service boundary">
        <p>I am exclusively a <strong>Configurator</strong> and <strong>Optimiser</strong>. While Java Plugin Development is listed as a skill, it is <strong>not a service I offer</strong> to any server under any circumstances.</p>
        <p>Pressuring or threatening me to write plugins will not be tolerated. Any threats made will be formally reported. This is non-negotiable.</p>
      </Notice>

      <Notice label="Scope of work">
        <p>Hiring me as a developer does <strong>not</strong> give you the right to demand I learn skills outside my expertise. I will not be forced to acquire knowledge beyond what I already offer, unless it is something reasonably straightforward.</p>
        <p>Any attempt to pressure me beyond this boundary falls under my <Link to="/tos" className="text-ink underline underline-offset-2 decoration-dim hover:decoration-ink">Terms of Service</Link> and will be handled accordingly.</p>
      </Notice>

      <Notice label="Similar setups">
        <p>If I am working on your server and another server at the same time, some configs or styles may look the <strong>same</strong>. This is because the owner gave me an example to follow, <strong>not</strong> because I copied anyone's work.</p>
        <p>Accusing me of copying, warning me, or telling me not to copy over this will <strong>not be accepted or tolerated</strong>. Please use common sense before raising it.</p>
      </Notice>
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
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/imp" element={<ImpPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/tos" element={
            <LegalPage
              title="Terms of Service"
              lastUpdated="April 17, 2026"
              data={TERMS_OF_SERVICE}
              footer={TOS_RESERVATION_CLAUSE}
            />
          } />
          <Route path="/privacy" element={
            <LegalPage
              title="Privacy Policy"
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