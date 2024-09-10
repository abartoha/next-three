'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Torus, useTexture } from '@react-three/drei';
import { useRef } from "react";
// import texture from '../../assets/sun.jpg';

const RotatingCube = () => {
  const meshRef = useRef();
  // const sunTexture = useTexture('./sunCopy.jpg');
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01

    }
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry />
      <meshStandardMaterial color='#468585' emissive='#468585' />
    </mesh>
  )
}



const ThreeScene = () => {

  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <fog attach="fog" args={['#353535', 5, 20]} />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color attach='background' args={['#000000']} />
      <RotatingCube></RotatingCube>
    </Canvas>
  );
};

export default ThreeScene;