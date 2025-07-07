// positive.js - แก้ไขแล้ว
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function PositiveModel(props) {
  const { scene } = useGLTF('/plus_sign_low_poly.glb');
  
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={50.8} position={[0, -0.5, 0]} />
    </group>
  );
}

useGLTF.preload('/plus_sign_low_poly.glb');