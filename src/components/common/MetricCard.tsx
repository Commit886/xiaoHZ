import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  status?: string;
  colorClass?: string;
}

export function MetricCard({ icon: Icon, label, value, trend, status, colorClass = 'blue' }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className={`p-3 rounded-full bg-${colorClass}-100`}>
          <Icon className={`h-6 w-6 text-${colorClass}-600`} />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {trend && (
              <p className={`ml-2 text-sm font-medium ${
                trend.startsWith('+') ? 'text-yellow-600' : 'text-green-600'
              }`}>
                {trend}
              </p>
            )}
          </div>
          {status && (
            <span className={`mt-1 inline-block px-2 py-1 text-xs rounded-full ${
              status === '正常' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}