import React from 'react';

interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'small';
}

export function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  const baseClasses = 'font-medium rounded-full';
  const variantClasses = variant === 'small' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm';
  const colorClasses = status === '正常' || status === '在线' || status === '已处理'
    ? 'bg-green-100 text-green-800'
    : 'bg-yellow-100 text-yellow-800';

  return (
    <span className={`${baseClasses} ${variantClasses} ${colorClasses}`}>
      {status}
    </span>
  );
}