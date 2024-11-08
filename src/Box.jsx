import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
export default function Box({ position, name, wireframe }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2;
  });
  return (
    <mesh position={position} name={name} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={wireframe} />
    </mesh>
  );
}
