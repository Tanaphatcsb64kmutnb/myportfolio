// // src/components/SkillsSection.js
// import React, { useState } from 'react';
// import { languages,frameworks, technologies } from '../data/portfolioData';

// const SkillsSection = () => {
//   const [activeTab, setActiveTab] = useState('language');

//   return (
//       <section id="skills" className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center py-20 px-6 overflow-hidden">
//         {/* Background decorative lines */}
//         <div className="absolute inset-0 z-0">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[70vh] opacity-10">
//                 <div className="absolute inset-0 border-x-2 border-gray-700 rounded-2xl"></div>
//             </div>
//              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[80vh] opacity-5">
//                 <div className="absolute inset-0 border-y-2 border-gray-600 rounded-2xl"></div>
//             </div>
//         </div>

        
//         {/* Main Content */}
//         <div className="relative z-10 flex flex-col items-center w-full">
//             <h2 className="text-6xl font-serif font-bold tracking-widest mb-8">SKILLS</h2>
            
//             {/* Tab Buttons */}
//             <div className="flex space-x-8 mb-12">
//                 <button 
//                     onClick={() => setActiveTab('language')}
//                     className={`px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'language' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
//                 >
//                     LANGUAGE
//                 </button>
//                 <button 
//                     onClick={() => setActiveTab('frameworks')}
//                     className={`px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'frameworks' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
//                 >
//                     FRAMEWORKS
//                 </button>
//                  <button 
//                     onClick={() => setActiveTab('technologies')}
//                     className={`px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'technologies' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
//                 >
//                     TOOLS
//                 </button>
//             </div>

//             {/* Scrolling Logos Container */}
//             <div className="w-full max-w-6xl mt-8">
//                 <div 
//                     className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
//                 >
//                     {activeTab === 'language' && (
//                         <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll-left hover:[animation-play-state:paused]">
//                             {/* แสดงผล array 2 รอบติดกัน */}
//                             {[...languages, ...languages].map((lang, index) => (
//                                 <div key={index} className="flex-shrink-0 mx-8">
//                                     <img src={lang.icon} alt={lang.name} className="h-20 w-auto" />
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {activeTab === 'frameworks' && (
//                         <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll-left hover:[animation-play-state:paused]">
//                             {/* แสดงผล array 2 รอบติดกัน */}
//                             {[...frameworks, ...frameworks].map((tech, index) => (
//                                 <div key={index} className="flex-shrink-0 mx-8">
//                                     <img src={tech.icon} alt={tech.name} className="h-20 w-auto" />
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {activeTab === 'technologies' && (
//                         <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll-left hover:[animation-play-state:paused]">
//                             {/* แสดงผล array 2 รอบติดกัน */}
//                             {[...technologies, ...technologies].map((tech, index) => (
//                                 <div key={index} className="flex-shrink-0 mx-8">
//                                     <img src={tech.icon} alt={tech.name} className="h-20 w-auto" />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>

       
//       </section>
//   );
// };

// export default SkillsSection;


// src/components/SkillsSection.js 
import React, { useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { languages, frameworks, technologies } from '../data/portfolioData';
import { useRef } from 'react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('language');
  const container = useRef();
  const scrollerRef = useRef();

  const skillData = {
    language: languages,
    frameworks: frameworks,
    technologies: technologies,
  };

  const currentSkills = skillData[activeTab];

  // --- GSAP Animations ---
  useGSAP(() => {
    // 1. Entrance Animation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%', // เริ่ม animation เมื่อ top ของ section อยู่ที่ 80% ของ viewport
        toggleActions: 'play none none none',
      }
    });

    tl.from('.skills-title', { 
        opacity: 0, 
        y: 50, 
        duration: 0.8, 
        ease: 'power3.out' 
    })
    .from('.tab-button', { 
        opacity: 0, 
        y: 30, 
        stagger: 0.2, 
        duration: 0.6, 
        ease: 'power3.out' 
    }, "-=0.5") // ให้ animation นี้เริ่มเร็วขึ้น 0.5 วินาที
    .from('.logo-container', {
        opacity: 0,
        duration: 1,
    }, "-=0.5");

    // 2. Tab Content (Logos) Entrance Animation
    // Animation นี้จะทำงานทุกครั้งที่ activeTab เปลี่ยนแปลง (เพราะ component re-render)
    gsap.from('.skill-logo', {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out'
    });

    // 3. Seamless Scrolling Animation
    // ใช้ Ref ของ scroller เพื่อให้แน่ใจว่าเรา target ถูก element
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollerWidth = scroller.offsetWidth;
      // เรามีโลโก้ 2 ชุดติดกัน เลยเลื่อนไปแค่ครึ่งเดียวก็คือ 1 ชุดพอดี
      gsap.to(scroller, {
        x: -scrollerWidth / 2,
        duration: 30, // ปรับความเร็วตามต้องการ (เลขมาก = ช้าลง)
        ease: 'none',
        repeat: -1, // -1 คือการ repeat ไปเรื่อยๆ
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % (scrollerWidth / 2)) // ทำให้การเลื่อนสมูทเมื่อ resize
        }
      });
    }

  }, { scope: container, dependencies: [activeTab] }); // dependencies: [activeTab] ทำให้ animation รันใหม่เมื่อ Tab เปลี่ยน

  return (
      <section id="skills" ref={container} className="relative text-white min-h-screen flex flex-col justify-center items-center py-20 px-6 overflow-hidden">
        {/* Background decorative lines (can be animated too if desired) */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[70vh] opacity-10">
                <div className="absolute inset-0 border-x-2 border-gray-700 rounded-2xl"></div>
            </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[80vh] opacity-5">
                <div className="absolute inset-0 border-y-2 border-gray-600 rounded-2xl"></div>
            </div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
            <h2 className="skills-title text-6xl font-serif font-bold tracking-widest mb-8">SKILLS</h2>
            
            {/* Tab Buttons */}
            <div className="flex space-x-8 mb-12">
                <button 
                    onClick={() => setActiveTab('language')}
                    className={`tab-button px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'language' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    LANGUAGE
                </button>
                <button 
                    onClick={() => setActiveTab('frameworks')}
                    className={`tab-button px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'frameworks' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    FRAMEWORKS
                </button>
                 <button 
                    onClick={() => setActiveTab('technologies')}
                    className={`tab-button px-4 py-2 text-lg font-semibold tracking-wider transition-colors duration-300 ${activeTab === 'technologies' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                >
                    TOOLS
                </button>
            </div>

            {/* Scrolling Logos Container */}
            <div className="logo-container w-full max-w-6xl mt-8">
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    {/* เราใช้ key={activeTab} เพื่อบังคับให้ React re-mount component นี้ทุกครั้งที่ tab เปลี่ยน 
                        ซึ่งจะช่วยให้ animation การปรากฏตัวของโลโก้ทำงานทุกครั้ง */}
                    <div 
                        ref={scrollerRef}
                        key={activeTab} 
                        className="flex items-center justify-center md:justify-start hover:[animation-play-state:paused]"
                    >
                        {/* แสดงผล array 2 รอบติดกันเพื่อการเลื่อนที่ไร้รอยต่อ */}
                        {[...currentSkills, ...currentSkills].map((item, index) => (
                            <div key={index} className="skill-logo flex-shrink-0 mx-8">
                                <img src={item.icon} alt={item.name} className="h-20 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default SkillsSection;