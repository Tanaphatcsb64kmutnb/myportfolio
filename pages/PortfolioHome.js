// // src/pages/PortfolioHome.js
// import { useState, useEffect } from 'react';

// // Import Components
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
// import PersonalSkillsSection from '../components/PersonalSkillsSection';
// import EducationInternshipSection from '../components/EducationInternshipSection';
// import SkillsSection from '../components/SkillsSection';
// import ProjectsSection from '../components/ProjectsSection';
// import ContactSection from '../components/ContactSection';

// export default function PortfolioHome() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//       setIsScrolled(currentScrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <Navbar isScrolled={isScrolled} />
//       <main>
//         <HeroSection scrollY={scrollY} />
//         <AboutSection />
//         <PersonalSkillsSection />
//         <EducationInternshipSection scrollY={scrollY} />
//         <SkillsSection />
//         <ProjectsSection />
//         <ContactSection />
//       </main>
//     </div>
//   );
// }






// // src/pages/PortfolioHome.js
// import { useState, useEffect } from 'react';

// // Import Components
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
// import PersonalSkillsSection from '../components/PersonalSkillsSection';
// import EducationInternshipSection from '../components/EducationInternshipSection';
// import SkillsSection from '../components/SkillsSection';
// import ProjectsSection from '../components/ProjectsSection';
// import ContactSection from '../components/ContactSection';
// import VideoBackground from '../components/VideoBackground';

// export default function PortfolioHome() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//       setIsScrolled(currentScrollY > 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <Navbar isScrolled={isScrolled} />
      
//       {/* Hero Section without Video Background */}
//       <HeroSection scrollY={scrollY} />
      
//       {/* All other sections with shared Video Background */}
//       <VideoBackground className="min-h-screen">
//         <main>
//           <AboutSection />
//           <PersonalSkillsSection />
//           <EducationInternshipSection scrollY={scrollY} />
//           <SkillsSection />
//           <ProjectsSection />
//           <ContactSection />
//         </main>
//       </VideoBackground>
//     </div>
//   );
// }



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
      {/* Video Background ครอบคลุมทั้งหน้า */}
      <VideoBackground>
        <Navbar isScrolled={isScrolled} />
        <main>
          <HeroSection scrollY={scrollY} />
          <AboutSection />
          <PersonalSkillsSection />
          <EducationInternshipSection scrollY={scrollY} />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </VideoBackground>
    </div>
  );
}