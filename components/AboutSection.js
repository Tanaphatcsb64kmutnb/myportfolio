// // src/components/AboutSection.js
// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section id="about" className="bg-black text-white min-h-screen flex items-stretch">
//       <div className="max-w-full mx-auto flex flex-col md:flex-row h-full w-full">
//         <div className="relative w-full md:w-1/2 overflow-hidden flex items-stretch justify-center">
         
//           <img
//             src="petchwritecode.jpg"
//             alt="Tanaphut Takulpukdichompon (Petch)"
//             className="w-full h-full object-cover object-left filter grayscale brightness-75 contrast-125"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
//         </div>
//         <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-6 py-12 md:px-20 md:py-0">
//           <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-normal mb-8">
//             I'm a passionate Full-Stack Developer with expertise in modern web technologies. I specialize in creating scalable applications using React, Node.js, and cloud technologies. With experience in software testing and AI integration, I bring a comprehensive approach to building robust and intelligent applications.
//           </p>
//           <p className="text-2xl md:text-3xl text-white font-serif italic">
//             "Tanaphat Takulpukdichumpon"
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;







// src/components/AboutSection.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const title = titleRef.current;

    // Initial states
    gsap.set(textContent, { y: 100, opacity: 0 });
    gsap.set(title, { y: 80, opacity: 0 });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        once: true
      }
    });

    tl.to(textContent, { duration: 1.2, y: 0, opacity: 1, ease: 'power3.out' }, 0)
      .to(title, { duration: 1, y: 0, opacity: 1, ease: 'back.out(1.7)' }, 0.6);

    // Animate text lines individually
    const textLines = textContent.querySelectorAll('p');
    textLines.forEach((line, index) => {
      gsap.fromTo(line,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            once: true
          }
        }
      );
    });

    // Floating text effect on mouse move
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      gsap.to(textContent, {
        duration: 2,
        x: (x - 0.5) * 30,
        y: (y - 0.5) * 20,
        ease: 'power2.out'
      });
      
      gsap.to(title, {
        duration: 2.5,
        x: (x - 0.5) * -20,
        y: (y - 0.5) * -15,
        ease: 'power2.out'
      });
    };

    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="text-white flex items-center relative overflow-hidden py-8"
    >
      

      <div className="max-w-6xl mx-auto flex flex-col justify-center text-center px-8 md:px-16 py-16 relative">
        <div ref={textContentRef} className="space-y-10">
          <div className="relative">
            
            <p className="text-xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-normal">
              I'm a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white font-semibold">Full-Stack Developer</span> with expertise in modern web technologies. I specialize in creating scalable applications using <span className="text-white/90 font-medium">React</span>, <span className="text-white/80 font-medium">Node.js</span>, and <span className="text-white/80 font-medium">cloud technologies</span>.
            </p>
          </div>

          <p className="text-xl md:text-3xl lg:text-4xl text-white/70 leading-relaxed">
            With experience in software testing and AI integration, I bring a comprehensive approach to building <span className="text-white/90 font-medium">robust and intelligent applications</span>.
          </p>
        </div>

        <div ref={titleRef} className="mt-12 relative">
                 
          
                      <footer className="text-xl md:text-2xl lg:text-3xl text-white/70 font-medium">
              Tanaphat Takulpukdichumpon
            </footer>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="w-16 h-16 border border-white/20 rounded-lg transform rotate-45 animate-spin-slow"></div>
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <div className="w-12 h-12 border border-white/10 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-20 left-20 opacity-10">
          <div className="w-10 h-10 border border-white/15 rounded-lg animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(360deg) scale(1.1); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;