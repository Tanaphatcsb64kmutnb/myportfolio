// workrate.js - แก้ไขแล้ว
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// export function WorkrateModel() {
//   const { scene } = useGLTF('/around_the_world_in_80_models_posts.glb');
//   const groupRef = useRef();
  
//   // ใช้ useFrame เพื่อให้โลกหมุนรอบตัวเอง
//   useFrame((state, delta) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += delta * 0.5; // ความเร็วในการหมุน (0.5 รอบต่อวินาที)
//     }
//   });
  
//   return (
//     <group ref={groupRef} dispose={null}>
//       <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
//     </group>
//   );
// }

// useGLTF.preload('/around_the_world_in_80_models_posts.glb');

const modelUrl = 'https://sdpjneouogwaatdu.public.blob.vercel-storage.com/around_the_world_in_80_models_posts-ExtomwmKmjRH5qV36Jurad0jCxNMwh.glb';

export function WorkrateModel() {
  const { scene } = useGLTF(modelUrl); // 👈 ใช้ URL ตรงนี้
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
    </group>
  );
}

// ไม่ต้อง preload แบบ path สั้น ถ้าคุณใช้ URL เต็ม
// useGLTF.preload(modelUrl); // 👈 preload ก็ใช้ URL เต็ม
