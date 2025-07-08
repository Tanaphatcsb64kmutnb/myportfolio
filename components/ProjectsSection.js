// import React, { useState } from 'react';
// import Image from 'next/image';
// import { projects } from '../data/projectdata';
// import ProjectModal from './projectModal'; // Import Modal component

// // ไอคอนสำหรับปุ่ม
// const ChevronLeftIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//   </svg>
// );

// const ChevronRightIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//   </svg>
// );

// const EyeIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// const ProjectsSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : prevIndex));
//   };

//   const handleViewDetails = (project) => {
//     setSelectedProject(project);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProject(null);
//   };

//   // คำนวณ position และ rotation สำหรับแต่ละ card
//   const getCardStyle = (index) => {
//     const totalItems = projects.length;
//     const angle = (360 / totalItems) * index;
//     const radius = 350; // --- ปรับแก้: ลดรัศมีลงเพื่อให้วงแคบลง

//     const rotationOffset = (activeIndex * 360) / totalItems;
//     const finalAngle = angle - rotationOffset;
    
//     const finalX = Math.sin((finalAngle * Math.PI) / 180) * radius;
//     const finalZ = Math.cos((finalAngle * Math.PI) / 180) * radius;
    
//     const distance = Math.abs(finalZ);
//     const isCenter = index === activeIndex;
    
//     let opacity, scale;
//     if (isCenter) {
//       opacity = 1.0;
//       scale = 1.0;
//     } else {
//       opacity = finalZ > -200 ? Math.max(0.85, 1 - (distance / 2000)) : Math.max(0.75, 0.9 - (distance / 1800));
//       scale = finalZ > -200 ? Math.max(0.8, 1 - (distance / 1500)) : Math.max(0.7, 0.85 - (distance / 1800));
//     }

//     return {
//       transform: `translateX(${finalX}px) translateZ(${finalZ}px) rotateY(${-finalAngle}deg) scale(${scale})`,
//       opacity: opacity,
//       zIndex: Math.round(1000 + finalZ),
//     };
//   };

//   return (
//     <section className="relative bg-gray-950 text-white w-full h-screen flex flex-col justify-center items-center overflow-hidden py-10">
      
//       {/* Background Glow */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-900/40 rounded-full blur-3xl opacity-10"></div>
//       </div>
      
//       {/* Header */}
//       <div className="relative z-10 text-center mb-6 md:mb-10"> {/* --- ปรับแก้: ลดระยะห่างด้านล่าง */}
//         <h2 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
//           FEATURED WORK
//         </h2>
//         <p className="text-lg text-gray-400">
//           My latest projects
//         </p>
//       </div>

//       <div className="relative w-full flex items-center justify-center">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrev}
//           disabled={activeIndex === 0}
//           className="absolute left-4 md:left-16 z-30 p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
//         >
//           <ChevronLeftIcon className="w-6 h-6" />
//         </button>

//         {/* 3D Curved Carousel Container */}
//         <div 
//           className="relative w-full max-w-7xl h-[28rem] flex items-center justify-center" // --- ปรับแก้: ลดความสูงของ container
//           style={{ 
//             perspective: '1200px',
//             perspectiveOrigin: 'center center'
//           }}
//         >
//           <div 
//             className="relative w-full h-full flex items-center justify-center"
//             style={{ 
//               transformStyle: 'preserve-3d',
//               transform: 'rotateX(0deg)'
//             }}
//           >
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 // --- ปรับแก้: ลดขนาดการ์ด (w-64 h-[24rem]) ---
//                 className="absolute flex-shrink-0 w-52 h-[20rem] transition-all duration-1000 ease-out cursor-pointer"

//                 style={getCardStyle(index)}
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <div className={`group relative w-full h-full bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/80 transition-all duration-300 ${
//                   index === activeIndex ? 'brightness-100 contrast-110' : 'brightness-110'
//                 }`}>
                  
//                   {/* Image Cover */}
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       layout="fill"
//                       objectFit="cover"
//                       className="group-hover:scale-105 transition-transform duration-500"
//                     />
                    
//                     {/* Overlay Gradient */}
//                     <div className={`absolute inset-0 transition-all duration-300 ${
//                       index === activeIndex 
//                         ? 'bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5' 
//                         : 'bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/30'
//                     }`}></div>
                    
//                     {/* Content Overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
//                           {project.title}
//                         </h3>
//                         <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium border border-purple-500/30">
//                           {project.category}
//                         </span>
//                       </div>
                      
//                       <p className="text-gray-300 mb-3 leading-relaxed text-xs line-clamp-2">
//                         {project.description}
//                       </p>
                      
//                       {/* View Details Button */}
//                       {Math.abs(index - activeIndex) <= 1 && (
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleViewDetails(project);
//                           }}
//                           className="inline-flex items-center px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
//                         >
//                           <EyeIcon className="w-3 h-3 mr-1" />
//                           View Details
//                         </button>
//                       )}
//                     </div>
                    
//                     {/* Hover Effect */}
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                       <div className="absolute inset-0 bg-purple-500/10 rounded-2xl"></div>
//                       <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(147,51,234,0.3)] rounded-2xl"></div>
//                     </div>
                    
//                     {/* Active Card Indicator */}
//                     {activeIndex === index && (
//                       <div className="absolute inset-0 border-2 border-purple-500/80 rounded-2xl pointer-events-none shadow-lg shadow-purple-500/20"></div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           disabled={activeIndex === projects.length - 1}
//           className="absolute right-4 md:right-16 z-30 p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm"
//         >
//           <ChevronRightIcon className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="relative z-10 flex space-x-3 mt-6"> {/* --- ปรับแก้: ลดระยะห่างด้านบน */}
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
//           />
//         ))}
//       </div>

//       {/* Project Modal */}
//       <ProjectModal 
//         project={selectedProject}
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       />
//     </section>
//   );
// };

// export default ProjectsSection;



//GSAP

import React, { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { projects } from '../data/projectdata';
import ProjectModal from './projectModal';

// 1. นำเข้า GSAP และ ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// ลงทะเบียนปลั๊กอิน ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- ไอคอนต่างๆ ยังคงเหมือนเดิม ---
const ChevronLeftIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /> </svg> );
const ChevronRightIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /> </svg> );
const EyeIcon = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}> <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> );


const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const component = useRef(null);
  const carousel = useRef(null);

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  const handleNext = () => setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    const ctx = gsap.context(() => {

      cards.forEach((card, index) => {
        const totalItems = projects.length;
        const angle = (360 / totalItems) * index;
        const radius = 350;
        const rotationOffset = (activeIndex * 360) / totalItems;
        const finalAngle = angle - rotationOffset;
        
        const finalX = Math.sin((finalAngle * Math.PI) / 180) * radius;
        const finalZ = Math.cos((finalAngle * Math.PI) / 180) * radius;

        const isCenter = index === activeIndex;
        let scale, opacity;

        if (isCenter) {
          opacity = 1;
          scale = 1;
        } else {
          opacity = finalZ > -200 ? Math.max(0.85, 1 - (Math.abs(finalZ) / 2000)) : Math.max(0.75, 0.9 - (Math.abs(finalZ) / 1800));
          scale = finalZ > -200 ? Math.max(0.8, 1 - (Math.abs(finalZ) / 1500)) : Math.max(0.7, 0.85 - (Math.abs(finalZ) / 1800));
        }
        
        gsap.to(card, {
          x: finalX,
          z: finalZ,
          rotationY: -finalAngle,
          scale: scale,
          opacity: opacity,
          zIndex: Math.round(1000 + finalZ),
          duration: 1.2,
          ease: "power3.inOut",
        });
      });

      ScrollTrigger.create({
        trigger: component.current,
        start: "top bottom-=20%",
        onEnter: () => {
          gsap.timeline()
            .fromTo(".section-header", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
            .fromTo(cards, { y: 100, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", stagger: 0.1 }, "-=0.8")
            .fromTo(".nav-button, .dots-indicator", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)", stagger: 0.1 }, "-=0.5");
        },
        once: true,
      });

      const onMouseMove = (e) => {
        if (!carousel.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = carousel.current.getBoundingClientRect();
        
        const xPercent = (clientX - left) / width - 0.5;
        const yPercent = (clientY - top) / height - 0.5;
        
        gsap.to(carousel.current, {
          rotationY: xPercent * 10,
          rotationX: -yPercent * 10,
          duration: 0.8,
          ease: "power2.out"
        });
      };
      
      component.current.addEventListener('mousemove', onMouseMove);

      return () => {
          if(component.current) {
            component.current.removeEventListener('mousemove', onMouseMove);
          }
          ctx.revert();
      };
      
    }, component);
    
  }, [activeIndex]);


  return (
    // สลับเป็น bg-black และ text-white
    <section id ="projects" ref={component} className="relative text-white w-full h-screen flex flex-col justify-center items-center overflow-hidden py-10">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* เปลี่ยน glow effect เป็นสีเทาที่สว่างขึ้นเล็กน้อย */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gray-700/20 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="section-header relative z-10 text-center mb-6 md:mb-10 opacity-0">
        {/* เปลี่ยนสี gradient ของ text ให้เป็น ดำ-ขาว */}
        <h2 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          FEATURED WORK
        </h2>
        {/* เปลี่ยน text-gray-600 เป็น text-gray-400 เพื่อให้อ่านง่ายขึ้นบนพื้นดำ */}
        <p className="text-lg text-gray-400">
          My latest projects
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          // ปรับสีปุ่มให้เข้ากับธีมดำ
          className="nav-button absolute left-4 md:left-16 z-30 p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm opacity-0"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div 
          className="relative w-full max-w-7xl h-[28rem] flex items-center justify-center"
          style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
        >
          <div 
            ref={carousel}
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card absolute flex-shrink-0 w-52 h-[20rem] cursor-pointer opacity-0"
                style={{ transform: "translateZ(-500px)" }}
                onClick={() => setActiveIndex(index)}
              >
                 {/* ปรับสี Card ให้เป็นธีมดำ */}
                 <div className={`group relative w-full h-full bg-gray-900 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:border-gray-500/80 transition-all duration-300 ${ index === activeIndex ? 'brightness-100 contrast-110' : 'brightness-110' }`}>
                    <div className="relative h-full w-full">
                        <Image src={project.image} alt={project.title} fill objectFit="cover" className="group-hover:scale-105 transition-transform duration-500"/>
                        <div className={`absolute inset-0 transition-all duration-300 ${ index === activeIndex ? 'bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5' : 'bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/30' }`}></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">{project.title}</h3>
                                <span className="bg-white/10 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-white/20">{project.category}</span>
                            </div>
                            <p className="text-gray-300 mb-3 leading-relaxed text-xs line-clamp-2">{project.description}</p>
                            {Math.abs(index - activeIndex) <= 1 && (
                                // ปรับสีปุ่ม View Details
                                <button onClick={(e) => { e.stopPropagation(); handleViewDetails(project); }} className="inline-flex items-center px-3 py-1 bg-white/90 hover:bg-white text-black rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm">
                                    <EyeIcon className="w-3 h-3 mr-1" /> View Details
                                </button>
                            )}
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] rounded-2xl"></div>
                        </div>
                        {/* ปรับสี Active Card Indicator */}
                        {activeIndex === index && (
                            <div className="absolute inset-0 border-2 border-white/80 rounded-2xl pointer-events-none shadow-lg shadow-white/20"></div>
                        )}
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === projects.length - 1}
          // ปรับสีปุ่มให้เข้ากับธีมดำ
          className="nav-button absolute right-4 md:right-16 z-30 p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-sm opacity-0"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="dots-indicator relative z-10 flex space-x-3 mt-6 opacity-0">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            // ปรับสี Dots Indicator
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;