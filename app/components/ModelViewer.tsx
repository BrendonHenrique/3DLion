"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stage, Text } from '@react-three/drei'
import LionModel from './LionMesh'
import AnimatedLight from './AnimatedLight'

const ModelViewer:React.FC = () => {
  return (
    <Canvas style={{ background:  '#313131'}}>
      <Suspense fallback={<Text>Loading</Text>}>
        <Stage>
          <spotLight position={[-20,50,10]} intensity={10} color={0xCA3E47} />
          <spotLight position={[0,10,-10]} intensity={10} color={0xCA3E47} />
          <spotLight position={[10,-30,10]} intensity={25} color={0x92dce5} />
          <pointLight position={[10,10,10]} intensity={5} color={0x000} />
          <pointLight position={[10,10,10]} intensity={50} color={0xCA3E47} />
          <AnimatedLight intensity={10} color={0x92dce5}/>
          <AnimatedLight intensity={10} color={0x92dce5}/>
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[1, 2]}
          >
            <LionModel />
          </Float>
  
          <OrbitControls makeDefault/>
        </Stage>
      </Suspense>
    </Canvas>
  )
}

export default ModelViewer;
