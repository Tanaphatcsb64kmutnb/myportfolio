// learn.js - แก้ไขแล้ว
import React from 'react';
import { useGLTF } from '@react-three/drei';


const modelUrl = 'https://sdpjneouogwaatdu.public.blob.vercel-storage.com/hard_cover_books-UybVFA88k1pj2c1kDq7jryp9bGMKgq.glb';
export function LearnModel(props) {
  // const { scene } = useGLTF('/hard_cover_books.glb');
  const { scene } = useGLTF(modelUrl);
  
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={3.5} position={[0, -0.5, 0]} rotation={[0.2, 0.5, 0]} />
    </group>
  );
}

useGLTF.preload(modelUrl);


