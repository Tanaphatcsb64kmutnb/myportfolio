// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// export function BookModel({ scrollPosition, ...props }) {
//   const modelRef = useRef();
//   const { scene } = useGLTF('/graduation_hat.glb');

//   useFrame(() => {
//     if (modelRef.current) {
//       // ทำให้โมเดลหมุนเร็วขึ้นโดยการลดค่าตัวหาร
//       modelRef.current.rotation.y = scrollPosition / 200;

//       // บรรทัดนี้จะทำให้หนังสือหมุนกลับไปมาในแนวตั้งเล็กน้อยตอนเลื่อน
//       // ถ้าไม่ต้องการให้ขยับแนวตั้งตอนเลื่อน ให้ลบบรรทัดนี้ทิ้งได้เลย
//       modelRef.current.rotation.x = scrollPosition / 300;
//     }
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={1}
//       // กำหนดค่าหมุนเริ่มต้นให้หนังสือ "ตั้งขึ้น"
//       rotation={[-Math.PI / 2, 0, 0]}
//       {...props}
//     />
//   );
// }

// useGLTF.preload('/graduation_hat.glb');


import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// ตัวอย่างใน Bookmodel.js
const modelUrl = 'https://sdpjneouogwaatdu.public.blob.vercel-storage.com/graduation_hat-Fm1eCYJxxjX6SvlGPsyu8IatOzU258.glb';

export function BookModel({ scrollPosition, ...props }) {
  const modelRef = useRef();
  const { scene } = useGLTF(modelUrl);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = scrollPosition / 200;
      modelRef.current.rotation.x = scrollPosition / 300;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1}
      rotation={[-Math.PI / 2, 0, 0]}
      {...props}
    />
  );
}

// // ไม่จำเป็นต้อง preload ถ้าใช้ URL เต็ม, แต่ preload ได้เหมือนกัน
// useGLTF.preload(modelUrl);
