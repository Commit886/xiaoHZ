import React from 'react';
import { Line } from '@react-three/drei';

interface NetworkCablesProps {
  connections: Array<{
    start: [number, number, number];
    end: [number, number, number];
  }>;
}

export function NetworkCables({ connections }: NetworkCablesProps) {
  return (
    <group>
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color="#3b82f6"
          lineWidth={1}
        />
      ))}
    </group>
  );
}