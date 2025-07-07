// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import PortfolioHome from './PortfolioHome'; // เปลี่ยนจาก './PortfolioHome' เป็น './pages/PortfolioHome'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <PortfolioHome />
//   </React.StrictMode>
// );

// src/pages/PortfolioHome.js
import { useState, useEffect } from 'react';

// Import Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PersonalSkillsSection from '../components/PersonalSkillsSection';
import EducationInternshipSection from '../components/EducationInternshipSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import VideoBackground from '../components/VideoBackground';

export default function PortfolioHome() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSection scrollY={scrollY} />
        
         <VideoBackground>
        <AboutSection />
        <PersonalSkillsSection />
        <EducationInternshipSection scrollY={scrollY} />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        </VideoBackground>
      </main>
    </div>
  );
}