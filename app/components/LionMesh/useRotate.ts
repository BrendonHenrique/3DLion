import { RefObject, useEffect } from 'react';

const useRotate = (refObject: RefObject<any>) => {
  useEffect(() => {
    const animateRotation = () => {
      const rotation = refObject.current.rotation;
      rotation.y += .1;

      if (rotation.y > Math.PI * 2) {
        rotation.y -= 2 * Math.PI;
      } else if (rotation.y < -Math.PI * 2) {
        rotation.y += 2 * Math.PI;
      }
    };

    const animationId = requestAnimationFrame(animateRotation);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [refObject]);
};

export default useRotate;
