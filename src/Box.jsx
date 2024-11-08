import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
export default function Box({ position, name, wireframe }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);

  const [rotate, setRotate] = useState(false);

  useFrame((state, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });
  return (
    <mesh
      position={position}
      name={name}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      //onPointerUp={(e) => console.log('pointer up' + e.object.name)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      // onUpdate={(self) => console.log(self)}
    >
      <boxGeometry />
      <meshBasicMaterial
        color={hovered ? 0xff0000 : 0x00ff00}
        wireframe={wireframe}
      />
    </mesh>
  );
}
