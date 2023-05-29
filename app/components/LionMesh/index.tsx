"use client"

import { Sparkles, useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Mesh } from "three"
import MeshNodes from "./MeshNodes"
import useRotate from "./useRotate"

const LionMesh: React.FC = () => {
  const { nodes } = useGLTF('/lowe/scene.gltf') as any
  const meshRef = useRef<Mesh>(null);
  
  useRotate(meshRef)

  return (
    <mesh 
      ref={meshRef} 
      position={[0, .5, 4]} 
      rotation={[(Math.PI + 1.4) / 2 , Math.PI , (Math.PI + 1) / 2]}
    >
      <Sparkles
        position={[-1.2,-.8,3]}
        count={300}
        speed={.5}
        opacity={1}
        color={0x92dce5}
        size={3}
        scale={8}
        noise={.3}
      />
      <MeshNodes {...{nodes}}/>
    </mesh>
  )
} 
export default LionMesh