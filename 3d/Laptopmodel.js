// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function LaptopModel({ scrollPosition, ...props }) {
//   const modelRef = useRef();
//   // แก้ path ไปยังไฟล์โมเดล laptop ของคุณ
//   const { scene } = useGLTF('/laptop_low_poly.glb');

//   useFrame(() => {
//     if (modelRef.current) {
//       // ทำให้โมเดลหมุนตามการ scroll (แต่หมุนในทิศทางที่ถูกต้อง)
//       modelRef.current.rotation.y = scrollPosition / 200;
//       // ทำให้โมเดลเอียงเล็กน้อยตอน scroll
//       modelRef.current.rotation.x = scrollPosition / 300;
//     }
//   });

//  return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={7} 
//       rotation={[0, Math.PI, 0]} // หมุน 180 องศาให้หันหน้าจอมาหาเรา
//       position={[0, -1.2, 0]}
//       {...props}
//     />
//   );
// }

// // แก้ path preload ให้ตรงกับโมเดล laptop
// useGLTF.preload('/laptop_low_poly.glb');


















// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function LaptopModel({ scrollPosition, ...props }) {
//   const modelRef = useRef();
//   // แก้ path ไปยังไฟล์โมเดล laptop ของคุณ
//   const { scene } = useGLTF('/laptop_low_poly.glb');

//   useFrame(() => {
//     if (modelRef.current) {
//       // ทำให้โมเดลหมุนตามการ scroll (หมุนไปทางตรงข้าม)
//       modelRef.current.rotation.y = -scrollPosition / 400; // เปลี่ยนเป็นลบ
//       // ทำให้โมเดลเอียงเล็กน้อยตอน scroll
//       modelRef.current.rotation.x = scrollPosition / 400;
//     }
//   });

//  return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={9} 
//       rotation={[0, 0, 0]} // ไม่หมุนเลย ให้หันหน้าจอมาก่อน
//       position={[0, -1.2, 0]}
//       {...props}
//     />
//   );
// }

// // แก้ path preload ให้ตรงกับโมเดล laptop
// useGLTF.preload('/laptop_low_poly.glb');






import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const modelUrl = 'https://sdpjneouogwaatdu.public.blob.vercel-storage.com/laptop_low_poly-Q2FMdYHGhigTV3HkNPCe7bMIT47TQE.glb';

export function LaptopModel({ scrollPosition, ...props }) {
  const modelRef = useRef();
  // แก้ path ไปยังไฟล์โมเดล laptop ของคุณ
  const { scene } = useGLTF(modelUrl);

  useFrame(() => {
    if (modelRef.current) {
      // ทำให้โมเดลหมุนตามการ scroll (หมุนไปทางตรงข้าม)
      modelRef.current.rotation.y = -scrollPosition / 400; // เปลี่ยนเป็นลบ
      // ทำให้โมเดลเอียงเล็กน้อยตอน scroll
      modelRef.current.rotation.x = scrollPosition / 400;
    }
  });

 return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={9} 
      rotation={[0, 0, 0]} // ไม่หมุนเลย ให้หันหน้าจอมาก่อน
      position={[0, -1.2, 0]}
      {...props}
    />
  );
}
