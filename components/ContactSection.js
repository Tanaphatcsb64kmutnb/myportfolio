// // src/components/ContactSection.js
// import React from 'react';
// import { FaGithub } from 'react-icons/fa'; // ติดตั้ง react-icons ก่อน: npm install react-icons

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-24 bg-black text-white">
//       <div className="max-w-3xl mx-auto px-6 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Let’s Work Together
//         </h2>
//         <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
//           I'm always open to discussing new projects, creative ideas, or
//           opportunities to be part of your vision.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-5 mb-6">
//           <a
//             href="mailto:your-email@example.com"
//             className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-transform duration-300 hover:scale-105"
//           >
//             Get In Touch
//           </a>

//           <a
//             href="/ResumeTanaphat.pdf"
//             download
//             className="border border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-transform duration-300 hover:scale-105"
//           >
//             Download CV
//           </a>

//           <a
//             href="https://github.com/Tanaphatcsb64kmutnb"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-transform duration-300 hover:scale-105"
//           >
//             <FaGithub className="text-xl" />
//             GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;






//gsap
// src/components/ContactSection.js
import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ลงทะเบียน ScrollTrigger plugin กับ GSAP
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const container = useRef(null);

  // --- GSAP Animation Hook ---
  // ใช้ useGSAP เพื่อจัดการ animation และ cleanup อัตโนมัติเมื่อ component unmount
  useGSAP(() => {
    // สร้าง Timeline ของ animation เพื่อให้ทำงานตามลำดับ
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // เริ่ม animation เมื่อ container เข้ามาใน viewport
        start: 'top 80%', // เริ่มที่ 80% จากด้านบนของ viewport
        toggleActions: 'play none none none', // เล่น animation แค่ครั้งเดียว
      },
    });

    // Animation Step-by-step
    tl.from('.section-line', {
      scaleX: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
      .from('.char', {
        y: 70,
        opacity: 0,
        stagger: 0.05, // ทำให้ตัวอักษรแต่ละตัวทยอยแสดงผล
        duration: 1,
        ease: 'power4.out',
      }, '-=0.8') // เริ่ม animation นี้ก่อนหน้าที่แล้วจบ 0.8 วินาที
      .from('.section-paragraph', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.contact-button', {
        y: 30,
        opacity: 0,
        stagger: 0.2, // ทำให้ปุ่มแต่ละปุ่มทยอยแสดงผล
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

  }, { scope: container }); // จำกัด scope ของ selector ให้อยู่ใน container ref เท่านั้น

  // แบ่งประโยคใน h2 เป็น từngตัวอักษรเพื่อสร้าง animation
  const title = "Let's Work Together";
  const titleChars = title.split('').map((char, index) => (
    <span key={index} className="char inline-block">
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section id="contact" ref={container} className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* เส้นคั่นตกแต่งด้านบน */}
        <div className="w-24 h-0.5 mx-auto bg-gray-600 section-line" />

        <h2 className="text-4xl md:text-6xl font-bold mt-8 mb-6 tracking-tight">
          {titleChars}
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto section-paragraph">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* --- Buttons with improved hover effects --- */}
          <a
            href="mailto:your-email@example.com"
            className="contact-button relative group font-medium text-lg text-white py-4 px-8"
          >
            <span>Get In Touch</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>

          <a
            href="/ResumeTanaphat.pdf"
            download
            className="contact-button relative group font-medium text-lg text-white py-4 px-8"
          >
            <span>Download CV</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>

          <a
            href="https://github.com/Tanaphatcsb64kmutnb"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button flex items-center justify-center gap-2 relative group font-medium text-lg text-white py-4 px-8"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;