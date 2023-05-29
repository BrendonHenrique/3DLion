import { MeshReflectorMaterial } from "@react-three/drei";
import { memo } from "react";

const MeshNodes:React.FC<{ nodes: any}> = ({ nodes }) => {
  return (
    <>
      {
        Object.keys(nodes).map((nodeName: string) => (
          <mesh
            key={nodes[nodeName].uuid}
            geometry={nodes[nodeName].geometry}
          > 
          <MeshReflectorMaterial
              color={0x000}
              blur={[0, 0]}
              mixBlur={0}
              mixStrength={1}
              mixContrast={1}
              resolution={512}
              mirror={.7} 
              metalness={.9} 
              roughness={1} 
              depthScale={1}
              minDepthThreshold={0.9}
              maxDepthThreshold={1}
              depthToBlurRatioBias={0.25}
              distortion={1}
              reflectorOffset={0.2}
            />
          </mesh>
        ))
      }
    </>
  )
}


export default memo(MeshNodes)