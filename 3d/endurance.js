// endurance.js - แก้ไขแล้ว
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function EnduranceModel(props) {
  const { scene } = useGLTF('/rusty_metal_gear_wcliee1_mid.glb');
  const meshRef = useRef();
  
  // ใช้ useFrame เพื่อให้หมุนต่อเนื่องแบบพวงมาลัย
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 2.5; // หมุนรอบแกน Y แบบพวงมาลัยรถ
    }
  });
  
  return (
    <group {...props} dispose={null}>
      <primitive 
        ref={meshRef}
        object={scene} 
        scale={25} 
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 2, 0]} // หมุน 90 องศารอบแกน X เพื่อให้วางแนวนอนเหมือนพวงมาลัย
      />
    </group>
  );
}

useGLTF.preload('/rusty_metal_gear_wcliee1_mid.glb');