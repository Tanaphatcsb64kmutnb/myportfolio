// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// // --- SVG Icons ---
// const CloseIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

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

// const ProjectModal = ({ project, isOpen, onClose }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     setCurrentImageIndex(0);
//   }, [project]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen || !project) return null;

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev > 0 ? prev - 1 : project.detailImages.length - 1
//     );
//   };

//   const handleNextImage = () => {
//     setCurrentImageIndex((prev) =>
//       prev < project.detailImages.length - 1 ? prev + 1 : 0
//     );
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
//       onClick={handleBackdropClick}
//     >
//       {/* Modal Container */}
//       <div className="relative bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] flex flex-col lg:flex-row overflow-hidden">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
//         >
//           <CloseIcon className="w-5 h-5" />
//         </button>

//         {/* Image Section */}
//         <div className="relative w-full lg:w-3/5 bg-gray-800 flex">
          
//           {/* Image Thumbnails - Left Side */}
//           {project.detailImages.length > 1 && (
//             <div className="w-20 bg-gray-800/50 border-r border-gray-700/50 p-2 flex flex-col gap-2 overflow-y-auto">
//               {project.detailImages.map((image, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
//                     currentImageIndex === index 
//                       ? 'ring-2 ring-purple-500 ring-opacity-100' 
//                       : 'ring-1 ring-gray-600 hover:ring-purple-400'
//                   }`}
//                 >
//                   <Image
//                     src={image}
//                     alt={`${project.title} - Thumbnail ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Main Image Display */}
//           <div className="relative flex-1 min-h-[300px] lg:min-h-[500px]">
//             <Image
//               src={project.detailImages[currentImageIndex]}
//               alt={`${project.title} - Image ${currentImageIndex + 1}`}
//               layout="fill"
//               objectFit="contain"
//               className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
//             />
            
//             {/* Navigation Arrows */}
//             {project.detailImages.length > 1 && (
//               <>
//                 <button
//                   onClick={handlePrevImage}
//                   className="absolute z-10 left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
//                 >
//                   <ChevronLeftIcon className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={handleNextImage}
//                   className="absolute z-10 right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
//                 >
//                   <ChevronRightIcon className="w-5 h-5" />
//                 </button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="w-full lg:w-2/5 p-6 lg:p-8 overflow-y-auto">
          
//           {/* Header */}
//           <div className="mb-6">
//             <div className="flex flex-col mb-4">
//               <h2 className="text-3xl font-bold text-white mb-2">
//                 {project.title}
//               </h2>
//               <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 w-fit">
//                 {project.category}
//               </span>
//             </div>
            
//             <p className="text-gray-300 leading-relaxed">
//               {project.fullDescription || project.description}
//             </p>
//           </div>

//           {/* Key Features */}
//           {project.features && (
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
//               <ul className="space-y-2">
//                 {project.features.map((feature, index) => (
//                   <li key={index} className="flex items-start text-gray-300">
//                     <span className="text-purple-400 mr-2 mt-1">•</span>
//                     <span className="text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Technologies */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
//             <div className="flex flex-wrap gap-2">
//               {project.tags.map((tag) => (
//                 <span 
//                   key={tag} 
//                   className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 transition-colors"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           {(project.githubUrl || project.liveUrl) && (
//             <div className="flex flex-wrap gap-3">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all"
//                 >
//                   <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
//                   </svg>
//                   View Code
//                 </a>
//               )}
//               {project.liveUrl && (
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
//                 >
//                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;








//gsap
// projectModal.js

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap'; // 👈 1. Import GSAP

// --- SVG Icons (เหมือนเดิม) ---
const CloseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 👈 2. สร้าง Refs สำหรับอ้างอิงถึง DOM elements ที่จะทำ animation
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const mainImageRef = useRef(null);
  const isFirstRender = useRef(true); // ใช้เช็คการ render ครั้งแรกสำหรับ image animation

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    isFirstRender.current = true; // Reset เมื่อ project เปลี่ยน
  }, [project]);

  // Body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ✨ 3. Entrance Animation (ตอนเปิด Modal)
  useEffect(() => {
    if (isOpen) {
      // ทำให้ element มองเห็นได้ก่อนเริ่ม animation
      gsap.set(modalRef.current, { display: 'flex' });
      
      const tl = gsap.timeline();
      
      tl.fromTo(backdropRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.3 }
        )
        .fromTo(modalRef.current.querySelector('.modal-container'), 
          { scale: 0.9, opacity: 0, y: 50 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, 
          "-=0.2" // ให้ animation นี้เริ่มก่อน animation ที่แล้วจะจบเล็กน้อย
        )
        .fromTo(modalRef.current.querySelectorAll('.stagger-item'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' },
          "-=0.2" // Stagger animation สำหรับ content
        );
    }
  }, [isOpen]);

  // ✨ 4. Image Change Animation (ตอนเปลี่ยนรูป)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (mainImageRef.current) {
      // Cross-fade effect
      gsap.timeline()
        .to(mainImageRef.current, { opacity: 0, duration: 0.2, ease: 'power2.in' })
        .to(mainImageRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    }
  }, [currentImageIndex]);

  if (!project) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : project.detailImages.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < project.detailImages.length - 1 ? prev + 1 : 0
    );
  };

  // ✨ 5. Exit Animation (ตอนปิด Modal)
  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose // เมื่อ animation จบทั้งหมด ให้เรียกฟังก์ชัน onClose()
    });
    
    tl.to(modalRef.current.querySelectorAll('.stagger-item'),
        { opacity: 0, y: 10, stagger: 0.05, duration: 0.2, ease: 'power2.in' }
      )
      .to(modalRef.current.querySelector('.modal-container'), 
        { scale: 0.95, opacity: 0, y: 30, duration: 0.3, ease: 'power3.in' },
        "-=0.1"
      )
      .to(backdropRef.current, 
        { opacity: 0, duration: 0.3 },
        "-=0.2"
      );
  };
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(); // เรียกใช้ handleClose แทน onClose โดยตรง
    }
  };

  // ซ่อน Modal ด้วย CSS ในตอนแรก และให้ GSAP ควบคุมการแสดงผล
  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ display: isOpen ? 'flex' : 'none' }} // ควบคุมการแสดงผลหลัก
    >
      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="modal-container relative bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] flex flex-col lg:flex-row overflow-hidden"
      >
        
        {/* Close Button */}
        <button
          onClick={handleClose} // 👈 เรียกใช้ handleClose
          className="stagger-item absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="relative w-full lg:w-3/5 bg-gray-800 flex">
          
          {project.detailImages.length > 1 && (
            <div className="w-20 bg-gray-800/50 border-r border-gray-700/50 p-2 flex flex-col gap-2 overflow-y-auto">
              {project.detailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all stagger-item ${ // 👈 เพิ่ม stagger-item
                    currentImageIndex === index 
                      ? 'ring-2 ring-purple-500 ring-opacity-100' 
                      : 'ring-1 ring-gray-600 hover:ring-purple-400'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="relative flex-1 min-h-[300px] lg:min-h-[500px]">
            <div ref={mainImageRef} className="w-full h-full"> {/* 👈 เพิ่ม wrapper และ ref */}
              <Image
                src={project.detailImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                priority // เพิ่ม priority เพื่อโหลดรูปหลักเร็วขึ้น
              />
            </div>
            
            {project.detailImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="stagger-item absolute z-10 left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="stagger-item absolute z-10 right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-8 overflow-y-auto">
          
          <div className="mb-6">
            <div className="flex flex-col mb-4">
               {/* 👇 เพิ่ม stagger-item ให้กับ elements ที่ต้องการให้ทยอยแสดงผล */}
              <h2 className="text-3xl font-bold text-white mb-2 stagger-item">
                {project.title}
              </h2>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30 w-fit stagger-item">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed stagger-item">
              {project.fullDescription || project.description}
            </p>
          </div>

          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 stagger-item">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300 stagger-item">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 stagger-item">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 transition-colors stagger-item"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 stagger-item">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" /></svg>
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Live Demo
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;