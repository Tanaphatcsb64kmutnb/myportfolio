// learn.js - แก้ไขแล้ว
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function LearnModel(props) {
  const { scene } = useGLTF('/hard_cover_books.glb');
  
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={3.5} position={[0, -0.5, 0]} rotation={[0.2, 0.5, 0]} />
    </group>
  );
}

useGLTF.preload('/hard_cover_books.glb');