import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Box(props) {
  const ref = useRef();

  const [selected, setSelected] = useState(props.selected);

  useFrame((_, delta) => {
    props.keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta);
    props.keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta);
    props.keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta);
    props.keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta);
  });

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  );
}
