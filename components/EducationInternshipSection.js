// // src/components/EducationInternshipSection.js
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { BookModel } from '../3d/Bookmodel';
// import { LaptopModel } from '../3d/Laptopmodel';

// const EducationInternshipSection = ({ scrollY }) => {
//   return (
//   <section id="education-internship" className="bg-black text-white py-32 relative overflow-hidden">
//           {/* 2. สร้างเส้นไทม์ไลน์หลักเส้นเดียวที่ด้านหลัง (Key Change) */}
//           {/* เส้นนี้จะพาดผ่านตลอดทั้ง Section และอยู่หลังเนื้อหาทั้งหมด */}
//           <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white opacity-20 z-0"></div>
  
//           <div className="max-w-7xl mx-auto px-6">
//             {/* EDUCATION Section */}
//             {/* 3. เพิ่ม z-10 เพื่อให้เนื้อหาลอยอยู่เหนือเส้นพื้นหลัง */}
//             <div className="relative mb-32 z-10">
//               {/* EDUCATION Header */}
//               <div className="flex justify-between items-center mb-16">
//                 <h2 className="text-6xl font-bold tracking-wider">EDUCATION</h2>
                
//               </div>
  
//               {/* Education Content */}
//               <div className="relative flex items-center justify-between">
//                 {/* Left: University Image */}
//                 <div className="relative w-[450px] h-[280px] rounded-xl overflow-hidden shadow-2xl">
//                   <img
//                     src="kmutnbuni.jpg"
//                     alt="King Mongkut's Institute of Technology North Bangkok"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
  
//                 {/* Center: Timeline with 3D Icon */}
//                 <div className="flex flex-col items-center mx-16">
//                   {/* 4. ลบเส้นสีฟ้าของเดิมออก */}
                  
//                   {/* 3D Book Icon */}
//                   <div className="relative w-20 h-20 mb-4">
//                     <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
//                       <ambientLight intensity={1.5} />
//                       <directionalLight position={[3, 5, 2]} intensity={1} />
//                       <BookModel scrollPosition={scrollY} />
//                     </Canvas>
//                     {/* 5. (แนะนำ) ปรับสี Glow ของไอคอนให้เป็นสีขาวเพื่อให้เข้ากัน */}
//                     <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
//                   </div>
  
//                 </div>
  
//                 {/* Right: Education Details */}
//                 <div className="flex-1 max-w-md">
//                   {/* University Logo and Name */}
//                   <div className="flex items-center mb-4">
//                     <img
//                       src="kmutnb logo.png"
//                       alt="KMUTNB Logo"
//                       className="w-16 h-16 object-contain mr-4"
//                     />
//                     <div>
//                       <h3 className="text-2xl font-bold leading-tight">
//                         king mongkut's institute<br />
//                         of technology north bangkok
//                       </h3>
//                     </div>
//                   </div>
  
//                   {/* Course Details */}
//                   <div className="space-y-2 mb-6">
//                     <p className="text-white font-medium text-lg">Computer Science</p>
//                     <p className="text-white font-bold text-lg">GPAX : 2.62</p>
//                   </div>
  
//                   {/* Location */}
//                   <div>
//                     <p className="text-white font-semibold mb-2">Location</p>
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       King Mongkut's University of Technology North Bangkok<br />
//                       1518 Pracharat 1 Road, Wongsawang, Bangsue,<br />
//                       Bangkok 10800 Thailand.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             {/* INTERNSHIP Section */}
//             {/* 3. เพิ่ม z-10 เพื่อให้เนื้อหาลอยอยู่เหนือเส้นพื้นหลัง */}
//             <div className="relative z-10">
//               {/* INTERNSHIP Header */}
//               <div className="flex justify-end mb-16">
//                 <h2 className="text-6xl font-bold tracking-wider">INTERNSHIP</h2>
//               </div>
  
//               {/* Internship Content */}
//               <div className="relative flex items-center justify-between">
//                 {/* Left: Internship Details */}
//                 <div className="flex-1 max-w-md">
//                   {/* Company Logo and Name */}
//                   <div className="flex items-center justify-end mb-4">
//                     <div>
//                       <h3 className="text-2xl font-bold leading-tight text-right">
//                         Metropolitan Electricity<br />
//                         Authority (Bangkhen)
//                       </h3>
//                     </div>
//                     <img
//                       src="mea logo.png"
//                       alt="MEA Logo"
//                       className="w-16 h-16 object-contain ml-4"
//                     />
//                   </div>
  
//                   {/* Work Details */}
//                   <div className="space-y-2 mb-6 text-right">
//                     <p className="text-white font-medium text-lg">April 2024 - June 2024</p>
//                     <p className="text-white font-bold text-lg">Measuring department</p>
//                   </div>
  
//                   {/* Location */}
//                   <div className="text-right">
//                     <p className="text-white font-semibold mb-2">Location</p>
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       Metropolitan Electricity Authority, Bangkhen District<br />
//                       6 Phahonnyothin Road, Anusawari Subdistrict, Bangkhen<br />
//                       District, Bangkok 10220, Thailand
//                     </p>
//                   </div>
//                 </div>
  
//                 {/* Center: Timeline with 3D Icon */}
//                 <div className="flex flex-col items-center mx-16">
//                    {/* 4. ลบเส้นสีเหลืองของเดิมออก */}
  
//                   {/* 3D Laptop Icon */}
//                   <div className="relative w-24 h-24 mb-4">
//                     <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
//                       <ambientLight intensity={1.5} />
//                       <directionalLight position={[3, 5, 2]} intensity={2} />
//                       <LaptopModel scrollPosition={scrollY} />
//                     </Canvas>
//                     {/* 5. (แนะนำ) ปรับสี Glow ของไอคอนให้เป็นสีขาวเพื่อให้เข้ากัน */}
//                     <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
//                   </div>
  
//                 </div>
  
//                 {/* Right: Company Image */}
//                 <div className="relative w-[450px] h-[280px] rounded-xl overflow-hidden shadow-2xl">
//                   <img
//                     src="meastation.jpg"
//                     alt="Metropolitan Electricity Authority Station"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
  
          
//           </div>
//         </section>
//   );
// };

// export default EducationInternshipSection;






// src/components/EducationInternshipSection.js USEGSAP
import React, { useLayoutEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { BookModel } from '../3d/Bookmodel';
import { LaptopModel } from '../3d/Laptopmodel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ลงทะเบียนปลั๊กอิน ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const EducationInternshipSection = ({ scrollY }) => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  // --- GSAP ANIMATION ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animation สำหรับเส้น Timeline หลัก
      // ทำให้เส้นค่อยๆ ขยายความสูงลงมาเมื่อ scroll เข้ามาใน section
      gsap.from(timelineRef.current, {
        scaleY: 0,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1, // ทำให้ animation ผูกกับการ scroll
        },
      });

      // --- EDUCATION SECTION ANIMATION ---
      const eduTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.education-content',
          start: 'top 70%', // เริ่ม animation เมื่อ top ของ element ถึง 70% ของ viewport
          toggleActions: 'play none none reverse', // เล่นเมื่อ scroll เข้ามา, ย้อนกลับเมื่อออกไป
        },
      });

      eduTl
        .from('.edu-header', { opacity: 0, x: -100, duration: 0.8, ease: 'power3.out' })
        .from('.edu-image', { opacity: 0, x: -100, scale: 0.8, duration: 1, ease: 'power3.out' }, '-=0.5')
        .from('.edu-details .detail-item', { opacity: 0, y: 30, stagger: 0.2, duration: 0.6 }, '-=0.5')
        .from('.edu-icon', { opacity: 0, scale: 0.5, duration: 1, ease: 'elastic.out(1, 0.5)' }, '-=0.7');


      // --- INTERNSHIP SECTION ANIMATION ---
      const internTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.internship-content',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      internTl
        .from('.intern-header', { opacity: 0, x: 100, duration: 0.8, ease: 'power3.out' })
        .from('.intern-image', { opacity: 0, x: 100, scale: 0.8, duration: 1, ease: 'power3.out' }, '-=0.5')
        .from('.intern-details .detail-item', { opacity: 0, y: 30, stagger: 0.2, duration: 0.6 }, '-=0.5')
        .from('.intern-icon', { opacity: 0, scale: 0.5, duration: 1, ease: 'elastic.out(1, 0.5)' }, '-=0.7');

    }, sectionRef); // Scope aniamtion ให้อยู่ใน sectionRef

    return () => ctx.revert(); // Cleanup function
  }, []);


  return (
    <section ref={sectionRef} id="education-internship" className=" text-white py-32 relative overflow-hidden">
      {/* เส้นไทม์ไลน์หลัก (เพิ่ม ref และ transform-origin) */}
      <div ref={timelineRef} className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white opacity-20 z-0 origin-top"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* EDUCATION Section */}
        <div className="relative mb-48 z-10 education-content">
          <div className="flex justify-between items-center mb-16 edu-header">
            <h2 className="text-6xl font-bold tracking-wider">EDUCATION</h2>
          </div>

          <div className="relative flex items-center justify-between">
            <div className="relative w-[450px] h-[280px] rounded-xl overflow-hidden shadow-2xl edu-image">
              <img src="kmutnbuni.jpg" alt="King Mongkut's Institute of Technology North Bangkok" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center mx-16 edu-icon">
              <div className="relative w-20 h-20 mb-4">
                <Canvas camera={{ position: [0, 2, 5], fov: 30 }}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[3, 5, 2]} intensity={1} />
                  <BookModel scrollPosition={scrollY} />
                </Canvas>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* เพิ่ม className เพื่อให้ GSAP เลือกได้ง่าย */}
            <div className="flex-1 max-w-md edu-details">
              <div className="flex items-center mb-4 detail-item">
                <img src="kmutnb logo.png" alt="KMUTNB Logo" className="w-16 h-16 object-contain mr-4" />
                <div>
                  <h3 className="text-2xl font-bold leading-tight">king mongkut's institute<br />of technology north bangkok</h3>
                </div>
              </div>
              <div className="space-y-2 mb-6 detail-item">
                <p className="text-white font-medium text-lg">Computer Science</p>
                <p className="text-white font-bold text-lg">GPAX : 2.62</p>
              </div>
              <div className="detail-item">
                <p className="text-white font-semibold mb-2">Location</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  King Mongkut's University of Technology North Bangkok<br />
                  1518 Pracharat 1 Road, Wongsawang, Bangsue,<br />
                  Bangkok 10800 Thailand.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERNSHIP Section */}
        <div className="relative z-10 internship-content">
          <div className="flex justify-end mb-16 intern-header">
            <h2 className="text-6xl font-bold tracking-wider">INTERNSHIP</h2>
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex-1 max-w-md intern-details">
              <div className="flex items-center justify-end mb-4 detail-item">
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-right">Metropolitan Electricity<br />Authority (Bangkhen)</h3>
                </div>
                <img src="mea logo.png" alt="MEA Logo" className="w-16 h-16 object-contain ml-4" />
              </div>
              <div className="space-y-2 mb-6 text-right detail-item">
                <p className="text-white font-medium text-lg">April 2024 - June 2024</p>
                <p className="text-white font-bold text-lg">Measuring department</p>
              </div>
              <div className="text-right detail-item">
                <p className="text-white font-semibold mb-2">Location</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Metropolitan Electricity Authority, Bangkhen District<br />
                  6 Phahonnyothin Road, Anusawari Subdistrict, Bangkhen<br />
                  District, Bangkok 10220, Thailand
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mx-16 intern-icon">
              <div className="relative w-24 h-24 mb-4">
                <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[3, 5, 2]} intensity={2} />
                  <LaptopModel scrollPosition={scrollY} />
                </Canvas>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            <div className="relative w-[450px] h-[280px] rounded-xl overflow-hidden shadow-2xl intern-image">
              <img src="meastation.jpg" alt="Metropolitan Electricity Authority Station" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationInternshipSection;