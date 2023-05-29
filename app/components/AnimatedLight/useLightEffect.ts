import { useFrame } from "@react-three/fiber";
import { RefObject, useEffect } from "react";
import { PointLight, Vector3 } from "three";

const useLightEffect = (lightRef: RefObject<PointLight>) => {

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newPosition = new Vector3(
        (event.clientX * window.innerWidth) / 10,
        (event.clientY * window.innerHeight) / 10,
        lightRef.current?.position.z || 0
      );
    
      lightRef.current?.position.copy(newPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useFrame(({ mouse }) => {
    if (lightRef.current) {
      const newPosition = new Vector3(
        (mouse.x * window.innerWidth) / 10,
        (mouse.y * window.innerHeight) / 10,
        lightRef.current.position.z || 0
      );
  
      lightRef.current.position.copy(newPosition);
    }
  });
}

export default useLightEffect