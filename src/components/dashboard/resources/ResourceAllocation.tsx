import React from 'react';
import { StatusBadge } from '../../common/StatusBadge';
import { ProgressBar } from '../../common/ProgressBar';

interface ResourceData {
  name: string;
  cpu: number;
  memory: number;
  storage: number;
  status: string;
}

const resources: ResourceData[] = [
  { name: '生产环境', cpu: 75, memory: 82, storage: 68, status: '正常' },
  { name: '测试环境', cpu: 45, memory: 55, storage: 40, status: '正常' },
  { name: '开发环境', cpu: 35, memory: 42, storage: 30, status: '正常' },
  { name: '备份系统', cpu: 25, memory: 35, storage: 85, status: '警告' },
];

export function ResourceAllocation() {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-gray-900">{resource.name}</h4>
            <StatusBadge status={resource.status} />
          </div>
          <div className="space-y-3">
            <ProgressBar value={resource.cpu} label="CPU" />
            <ProgressBar value={resource.memory} label="内存" />
            <ProgressBar value={resource.storage} label="存储" />
          </div>
        </div>
      ))}
    </div>
  );
}