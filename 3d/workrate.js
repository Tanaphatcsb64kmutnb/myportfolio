// workrate.js - แก้ไขแล้ว
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function WorkrateModel() {
  const { scene } = useGLTF('/around_the_world_in_80_models_posts.glb');
  const groupRef = useRef();
  
  // ใช้ useFrame เพื่อให้โลกหมุนรอบตัวเอง
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // ความเร็วในการหมุน (0.5 รอบต่อวินาที)
    }
  });
  
  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/around_the_world_in_80_models_posts.glb');