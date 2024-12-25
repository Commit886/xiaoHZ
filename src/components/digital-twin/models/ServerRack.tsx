import React from 'react';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

interface ServerRackProps {
  position: [number, number, number];
  status?: 'normal' | 'warning' | 'error';
}

export function ServerRack({ position, status = 'normal' }: ServerRackProps) {
  // 根据状态决定LED颜色
  const getLEDColor = () => {
    switch (status) {
      case 'warning': return '#fbbf24';
      case 'error': return '#ef4444';
      default: return '#48bb78';
    }
  };

  return (
    <group position={position}>
      {/* 机柜框架 */}
      <Box args={[1, 2, 0.8]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* 服务器单元 */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          args={[0.9, 0.2, 0.7]}
          position={[0, 0.4 + i * 0.3, 0]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial color="#334155" metalness={0.5} roughness={0.5} />
        </Box>
      ))}

      {/* LED指示灯 */}
      {[...Array(6)].map((_, i) => (
        <Box
          key={`led-${i}`}
          args={[0.05, 0.05, 0.05]}
          position={[0.4, 0.4 + i * 0.3, 0.35]}
        >
          <meshStandardMaterial
            color={getLEDColor()}
            emissive={getLEDColor()}
            emissiveIntensity={1}
          />
        </Box>
      ))}
    </group>
  );
}