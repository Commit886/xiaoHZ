import React from 'react';
import { ResourceMetrics } from '../metrics/ResourceMetrics';
import { ResourceAllocation } from '../resources/ResourceAllocation';

export function ResourceManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">资源管理</h2>
      <ResourceMetrics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">资源分配</h3>
          <ResourceAllocation />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">资源使用趋势</h3>
          <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">资源使用趋势图表</p>
          </div>
        </div>
      </div>
    </div>
  );
}