// src/components/HeroSection.js
import React from 'react';

const HeroSection = ({ scrollY }) => {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('yop.jpg')",
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.4) contrast(1.1)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="text-center px-6 w-full max-w-none">
           <h1 className="text-[10vw] lg:text-[100px] font-extrabold leading-tight tracking-widest uppercase">
            <div 
              style={{ 
                transform: `translateX(${-scrollY * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              TANAPHAT
            </div>
            <div 
              style={{ 
                transform: `translateX(${scrollY * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              TAKULPUKDICHUMPON
            </div>
          </h1>
         <p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide mt-8"
            style={{ 
              opacity: Math.max(0, 1 - (scrollY / 300)),
              transition: 'opacity 0.2s ease-out'
            }}
          >
            I'm looking for new job.
          </p>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-40 transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - (scrollY / 200)) }}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs font-light tracking-widest mb-4">SCROLL</span>
          <div className="w-6 h-10 border border-white rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-4 right-6 text-xs text-gray-400/50 z-40">
           Created by Tanaphat Takulpukdichompon
       </div>
    </section>
  );
};

export default HeroSection;