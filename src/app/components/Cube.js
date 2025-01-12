'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01

    }
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color='#468585' emissive='#468585' />
    </mesh>
  )
}



const Cube = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color attach='background' args={['#000000']} />
      <RotatingCube></RotatingCube>
    </Canvas>
  );
};

export default Cube;