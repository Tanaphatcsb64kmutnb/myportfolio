// // src/components/PersonalSkillsSection.js
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { PeopleModel } from '../3d/Peoplemodel';
// import { EnduranceModel } from '../3d/endurance';
// import { WorkrateModel } from '../3d/workrate';
// import { LearnModel } from '../3d/learn';
// import { PositiveModel } from '../3d/positive';

// const PersonalSkillsSection = () => {
//   return (
//     <section id="personal-skills" className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center py-20 px-6 overflow-hidden">
//            {/* Background decorative lines */}
//            <div className="absolute inset-0 z-0">
//              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-10">
//                <div className="absolute inset-0 border-x border-gray-700"></div>
//                <div className="absolute inset-0 border-y border-gray-700"></div>
//              </div>
             
//            </div>
           
//            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
              
   
//                {/* Main Content Grid */}
//                <div className="w-full grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-8 gap-x-4" style={{ height: '70vh' }}>
   
//                    {/* Top Row */}
//                    <div className="col-start-1 row-start-1 flex flex-col items-center text-center">
//                        <h3 className="text-2xl font-bold tracking-widest mb-3">ENDURANCE</h3>
//                        {/* FIXED: ใช้ EnduranceModel */}
//                        <div className="w-24 h-24">
//                            <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
//                               <ambientLight intensity={1.5} />
//                               <directionalLight position={[5, 5, 5]} intensity={1} />
//                               <EnduranceModel />
//                               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
//                            </Canvas>
//                        </div>
//                    </div>
//                    <div className="col-start-3 row-start-1 flex flex-col items-center text-center">
//                        <h3 className="text-2xl font-bold tracking-widest mb-3">WORKRATE</h3>
//                        {/* FIXED: ใช้ WorkrateModel */}
//                        <div className="w-24 h-24">
//                            <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
//                               <ambientLight intensity={1.5} />
//                               <directionalLight position={[5, 5, 5]} intensity={1} />
//                               <WorkrateModel />
//                               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
//                            </Canvas>
//                        </div>
//                    </div>
   
//                    {/* Middle Row (3D Model) */}
//                    <div className="col-start-1 col-span-3 row-start-1 row-span-3 w-full h-full flex justify-center items-center">
//                        <Canvas camera={{ position: [0, 3, 8], fov: 35 }}>
//                            <ambientLight intensity={1.2} />
//                            <directionalLight position={[5, 5, 5]} intensity={1.5} />
//                            <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#A78BFA" />
//                            <PeopleModel />
//                            <OrbitControls 
//                               enableZoom={false} 
//                               enablePan={false}
//                               minPolarAngle={Math.PI / 2.5}
//                               maxPolarAngle={Math.PI / 2}
//                            />
//                        </Canvas>
//                    </div>
   
//                    {/* Bottom Row */}
//                    <div className="col-start-1 row-start-3 flex flex-col items-center text-center">
//                        <h3 className="text-2xl font-bold tracking-widest mb-3">READY TO LEARN</h3>
//                        {/* FIXED: ใช้ LearnModel */}
//                        <div className="w-100 h-30">
//                            <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
//                               <ambientLight intensity={1.5} />
//                               <directionalLight position={[5, 5, 5]} intensity={1} />
//                               <LearnModel />
//                               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
//                            </Canvas>
//                        </div>
//                    </div>
//                    <div className="col-start-3 row-start-3 flex flex-col items-center text-center">
//                        <h3 className="text-2xl font-bold tracking-widest mb-3">POSITIVE ATTITUDE</h3>
//                        {/* FIXED: ใช้ PositiveModel */}
//                        <div className="w-24 h-24">
//                            <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
//                               <ambientLight intensity={1.5} />
//                               <directionalLight position={[5, 5, 5]} intensity={1} />
//                               <PositiveModel />
//                               <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
//                            </Canvas>
//                        </div>
//                    </div>
//                </div>
   
               
//            </div>
//          </section>
//   );
// };

// export default PersonalSkillsSection;


// src/components/PersonalSkillsSection.js
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PeopleModel } from '../3d/Peoplemodel';
import { EnduranceModel } from '../3d/endurance';
import { WorkrateModel } from '../3d/workrate';
import { LearnModel } from '../3d/learn';
import { PositiveModel } from '../3d/positive';

gsap.registerPlugin(ScrollTrigger);

const PersonalSkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);
  const centerModelRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animation
      gsap.fromTo(backgroundRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -10
        },
        {
          opacity: 0.1,
          scale: 1,
          rotation: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          y: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Center model animation
      gsap.fromTo(centerModelRef.current,
        {
          scale: 0,
          rotationY: 180,
          opacity: 0
        },
        {
          scale: 1,
          rotationY: 0,
          opacity: 1,
          duration: 2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills animation with stagger
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          // Initial state
          gsap.set(skill, {
            scale: 0,
            rotation: 45,
            opacity: 0,
            y: 100
          });

          // Animate in
          gsap.to(skill, {
            scale: 1,
            rotation: 0,
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 40%",
              toggleActions: "play none none reverse"
            }
          });

          // Hover effects
          const skillElement = skill;
          const canvas = skill.querySelector('canvas');
          const title = skill.querySelector('h3');

          skillElement.addEventListener('mouseenter', () => {
            gsap.to(skillElement, {
              scale: 1.1,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(canvas, {
              filter: "brightness(1.5) saturate(0)", // Keep it monochrome but brighter
              duration: 0.3
            });
            gsap.to(title, {
              color: "#FFFFFF", // Brighter white on hover
              textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
              duration: 0.3
            });
          });

          skillElement.addEventListener('mouseleave', () => {
            gsap.to(skillElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(canvas, {
              filter: "brightness(1) saturate(0)",
              duration: 0.3
            });
            gsap.to(title, {
              color: "#A0A0A0", // Back to dimmer white
              textShadow: "none",
              duration: 0.3
            });
          });

          // Floating animation
          gsap.to(skill, {
            y: "+=10",
            duration: 2 + Math.random() * 2,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
            delay: index * 0.3
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="personal-skills"
      className="relative text-gray-300 min-h-screen flex flex-col justify-center items-center py-20 px-6 overflow-hidden"
    >
      {/* Enhanced Background decorative lines */}
      <div className="absolute inset-0 z-0">
        <div
          ref={backgroundRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh]"
        >
          <div className="absolute inset-0 border-x border-gray-700/50 shadow-lg shadow-gray-500/10"></div>
          <div className="absolute inset-0 border-y border-gray-700/50 shadow-lg shadow-gray-500/10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-black/5 backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold tracking-widest text-white">
            PERSONAL SKILLS
          </h2>
          <div className="mt-4 w-32 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-8 gap-x-4" style={{ height: '70vh' }}>

          {/* Top Row */}
          <div
            ref={el => skillsRef.current[0] = el}
            className="col-start-1 row-start-1 flex flex-col items-center text-center group cursor-pointer"
          >
            <h3 className="text-2xl font-bold tracking-widest mb-3 transition-colors duration-300 text-gray-400 group-hover:text-white">
              ENDURANCE
            </h3>
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-gray-500/20 transition-all duration-300 group-hover:shadow-white/20">
              <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <EnduranceModel />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
              </Canvas>
            </div>
          </div>

          <div
            ref={el => skillsRef.current[1] = el}
            className="col-start-3 row-start-1 flex flex-col items-center text-center group cursor-pointer"
          >
            <h3 className="text-2xl font-bold tracking-widest mb-3 transition-colors duration-300 text-gray-400 group-hover:text-white">
              WORKRATE
            </h3>
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-gray-500/20 transition-all duration-300 group-hover:shadow-white/20">
              <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <WorkrateModel />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
              </Canvas>
            </div>
          </div>

          {/* Middle Row (3D Model) */}
          <div
            ref={centerModelRef}
            className="col-start-1 col-span-3 row-start-1 row-span-3 w-full h-full flex justify-center items-center"
          >
            <div className="relative w-full h-full">
              <Canvas camera={{ position: [0, 3, 8], fov: 35 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} color="white"/>
                <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#888888" />
                <PeopleModel />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 2.5}
                  maxPolarAngle={Math.PI / 2}
                />
              </Canvas>
              {/* Glow effect around center model */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-800/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Bottom Row */}
          <div
            ref={el => skillsRef.current[2] = el}
            className="col-start-1 row-start-3 flex flex-col items-center text-center group cursor-pointer"
          >
            <h3 className="text-2xl font-bold tracking-widest mb-3 transition-colors duration-300 text-gray-400 group-hover:text-white">
              READY TO LEARN
            </h3>
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-gray-500/20 transition-all duration-300 group-hover:shadow-white/20">
              <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <LearnModel />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
              </Canvas>
            </div>
          </div>

          <div
            ref={el => skillsRef.current[3] = el}
            className="col-start-3 row-start-3 flex flex-col items-center text-center group cursor-pointer"
          >
            <h3 className="text-2xl font-bold tracking-widest mb-3 transition-colors duration-300 text-gray-400 group-hover:text-white">
              POSITIVE ATTITUDE
            </h3>
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-gray-500/20 transition-all duration-300 group-hover:shadow-white/20">
              <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <PositiveModel />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSkillsSection;