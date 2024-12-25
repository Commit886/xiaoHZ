import React from 'react';
import { Box } from '@react-three/drei';

export function DataCenterFloor() {
  return (
    <group position={[0, 0, 0]}>
      {[...Array(10)].map((_, i) =>
        [...Array(10)].map((_, j) => (
          <Box
            key={`floor-${i}-${j}`}
            args={[1, 0.05, 1]}
            position={[i - 4.5, -0.025, j - 4.5]}
            receiveShadow
          >
            <meshStandardMaterial
              color={(i + j) % 2 === 0 ? '#f1f5f9' : '#e2e8f0'}
              metalness={0.1}
              roughness={0.8}
            />
          </Box>
        ))
      )}
    </group>
  );
}