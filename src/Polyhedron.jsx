import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron({ position, polyhedron }) {
  const ref = useRef();
  const [count, setCount] = useState(0);

  //console.log(polyhedron);
  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 3)}
      geometry={polyhedron[count]}>
      <meshBasicMaterial color={'lime'} wireframe />
      <axesHelper />
    </mesh>
  );
}
