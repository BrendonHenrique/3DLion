"use client"

import { useRef } from 'react'
import { Color, PointLight } from 'three';
import useLightEffect from './useLightEffect';

interface AnimatedLightProps {
  intensity: number;
  color: Color | string | number;
}

const AnimatedLight: React.FC<AnimatedLightProps> = ({ intensity, color }) => {
  const lightRef = useRef<PointLight>(null);
  
  useLightEffect(lightRef)

  return (
    <pointLight
      intensity={intensity}
      color={color}
      ref={lightRef}
    />
  );
};


export default AnimatedLight