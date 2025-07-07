// // src/hooks/useScrollAnimation.js
// import { useEffect, useRef, useState } from 'react';

// export const useScrollAnimation = (options = {}) => {
//   const {
//     threshold = 0.1,
//     rootMargin = '0px',
//     triggerOnce = true,
//     delay = 0,
//     staggerDelay = 0.1
//   } = options;

//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             setIsIntersecting(true);
//             if (triggerOnce) {
//               setHasAnimated(true);
//             }
//           }, delay);
//         } else if (!triggerOnce && !hasAnimated) {
//           setIsIntersecting(false);
//         }
//       },
//       { threshold, rootMargin }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

//   return { ref, isIntersecting, hasAnimated };
// };

// // Hook for multiple elements with stagger effect
// export const useStaggeredAnimation = (count, options = {}) => {
//   const { staggerDelay = 0.1, ...restOptions } = options;
//   const refs = useRef([]);
//   const [visibleItems, setVisibleItems] = useState(new Set());

//   useEffect(() => {
//     const observers = refs.current.map((ref, index) => {
//       if (!ref) return null;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setTimeout(() => {
//               setVisibleItems(prev => new Set([...prev, index]));
//             }, index * staggerDelay * 1000);
//           }
//         },
//         { threshold: 0.1, rootMargin: '0px' }
//       );

//       observer.observe(ref);
//       return observer;
//     });

//     return () => {
//       observers.forEach(observer => {
//         if (observer) observer.disconnect();
//       });
//     };
//   }, [count, staggerDelay]);

//   const setRef = (index) => (el) => {
//     refs.current[index] = el;
//   };

//   return { setRef, visibleItems };
// };