import React from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  showLabel?: boolean;
}

export function ProgressBar({
  value,
  label,
  showLabel = true,
}: ProgressBarProps) {
  const getColorClass = (value: number) => {
    if (value > 80) return 'bg-red-500';
    if (value > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div>
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{label}</span>
          <span className="text-gray-900">{value}%</span>
        </div>
      )}
      <div className="mt-1 h-2 bg-gray-200 rounded-full">
        <div
          className={`h-2 rounded-full ${getColorClass(value)}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
