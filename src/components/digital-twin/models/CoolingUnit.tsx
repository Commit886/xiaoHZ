import React, { useRef } from 'react';
import { Box, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface CoolingUnitProps {
  position: [number, number, number];
}

export function CoolingUnit({ position }: CoolingUnitProps) {
  const fanRef = useRef<Group>(null);

  useFrame((state) => {
    if (fanRef.current) {
      fanRef.current.rotation.z = state.clock.getElapsedTime() * 3;
    }
  });

  return (
    <group position={position}>
      {/* 主体 */}
      <Box args={[0.8, 1.8, 0.8]} position={[0, 0.9, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.2} />
      </Box>

      {/* 风扇 */}
      <group ref={fanRef} position={[0, 1.2, 0.41]}>
        <Cylinder args={[0.3, 0.3, 0.1, 16]} castShadow receiveShadow>
          <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </group>

      {/* 通风口 */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={`vent-${i}`}
          args={[0.6, 0.05, 0.1]}
          position={[0, 0.5 + i * 0.4, 0.41]}
        >
          <meshStandardMaterial color="#64748b" metalness={0.5} roughness={0.5} />
        </Box>
      ))}
    </group>
  );
}