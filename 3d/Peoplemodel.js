// src/components/Peoplemodel.js
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const modelurl ="https://sdpjneouogwaatdu.public.blob.vercel-storage.com/low_poly_man_working_at_a_table_with_a_laptop-aqni0dhjc7JqV9fNbzlIzer6TLGmPO.glb"
export function PeopleModel(props) {
  const group = useRef();
  // const { scene, animations } = useGLTF('/low_poly_man_working_at_a_table_with_a_laptop.glb'); 
  const { scene, animations } = useGLTF(modelurl); 
  const { actions } = useAnimations(animations, group);

  // เล่น animation
  useEffect(() => {
    console.log('Available animations:', animations);
    console.log('Available actions:', Object.keys(actions));
    
    // วิธีที่ 1: เล่น animation แรกที่มี (หากมี)
    if (Object.keys(actions).length > 0) {
      const firstAnimationName = Object.keys(actions)[0];
      console.log('Playing animation:', firstAnimationName);
      actions[firstAnimationName]?.reset().play();
    }
    
  }, [actions, animations]);

//   // หยุดการหมุนเมื่อมี animation เล่น หรือลดความเร็วลง
//   useFrame((state, delta) => {
//     if (group.current) {
//       // ลดความเร็วการหมุนลงเพื่อไม่ให้รบกวน animation
//     //   group.current.rotation.y += delta * 0.5; 
      
//       // หรือหยุดการหมุนเลยหาก animation เล่นอยู่
//       // const isAnimating = Object.values(actions).some(action => action?.isRunning());
//       // if (!isAnimating) {
//       //   group.current.rotation.y += delta * 0.3;
//       // }
//     }
//   });

  return (
    <group>
      {/* แสงสำหรับโมเดล */}
      
      
      <primitive 
        ref={group} 
        object={scene} 
        dispose={null} 
        scale={0.45}
        position={[0, -1.8, 0]}
        {...props} 
      />
    </group>
  );
}

// Preload the model
// useGLTF.preload('/low_poly_man_working_at_a_table_with_a_laptop.glb');
useGLTF.preload(modelurl);