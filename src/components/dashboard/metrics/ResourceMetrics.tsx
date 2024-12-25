import React from 'react';
import { Database, HardDrive, Cpu, CircuitBoard } from 'lucide-react';
import { MetricCard } from '../../common/MetricCard';

const metrics = [
  { icon: Cpu, label: 'CPU使用率', value: '65%', trend: '+5%' },
  { icon: CircuitBoard, label: '内存使用率', value: '78%', trend: '+2%' },
  { icon: HardDrive, label: '存储空间', value: '4.2TB', trend: '-120GB' },
  { icon: Database, label: '数据库负载', value: '45%', trend: '-3%' },
];

export function ResourceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}