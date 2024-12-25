import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { ServerRack } from './models/ServerRack';
import { CoolingUnit } from './models/CoolingUnit';
import { NetworkCables } from './models/NetworkCables';
import { DataCenterFloor } from './models/DataCenterFloor';

export function NetworkModel() {
  const roomRef = useRef<Group>(null);

  useFrame((state) => {
    if (roomRef.current) {
      roomRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  // 定义网络连接
  const networkConnections = [
    { start: [-2, 1, -2], end: [0, 2.5, 0] },
    { start: [-2, 1, 0], end: [0, 2.5, 0] },
    { start: [-2, 1, 2], end: [0, 2.5, 0] },
    { start: [2, 1, -2], end: [0, 2.5, 0] },
    { start: [2, 1, 0], end: [0, 2.5, 0] },
    { start: [2, 1, 2], end: [0, 2.5, 0] },
  ];

  return (
    <group ref={roomRef}>
      <DataCenterFloor />

      {/* 服务器机柜 */}
      <ServerRack position={[-2, 0, -2]} status="normal" />
      <ServerRack position={[-2, 0, 0]} status="warning" />
      <ServerRack position={[-2, 0, 2]} status="normal" />
      <ServerRack position={[2, 0, -2]} status="normal" />
      <ServerRack position={[2, 0, 0]} status="error" />
      <ServerRack position={[2, 0, 2]} status="normal" />

      {/* 制冷设备 */}
      <CoolingUnit position={[0, 0, -3]} />
      <CoolingUnit position={[0, 0, 3]} />

      {/* 网络连接 */}
      <NetworkCables connections={networkConnections} />
    </group>
  );
}