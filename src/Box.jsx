export default function Box({ position, name, wireframe }) {
  return (
    <mesh position={position} name={name}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={wireframe} />
    </mesh>
  );
}
