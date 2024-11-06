import { useRef } from 'react';
export default function Box({ position, name, wireframe }) {
  const ref = useRef();
  console.log(ref);
  return (
    <mesh position={position} name={name} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={wireframe} />
    </mesh>
  );
}
