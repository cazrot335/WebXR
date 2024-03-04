import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ARButton,XR } from '@react-three/xr'

function Cube() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} position-z={-5}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  )
}

function Cubee() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ARButton />
      <Canvas style={{ width: '100%', height: '100%' }}>
        <XR>
        <OrbitControls/>
        <ambientLight />
        <Cube />
        </XR>
      </Canvas>
    </div>
  )
}

export default Cubee;