import React from 'react';
import { Activity, Server, Network, Shield, Database, Users, Settings } from 'lucide-react';

const menuItems = [
  { id: 'overview', icon: Activity, label: '系统概览' },
  { id: 'devices', icon: Server, label: '设备管理' },
  { id: 'network', icon: Network, label: '网络监控' },
  { id: 'security', icon: Shield, label: '安全防护' },
  { id: 'resources', icon: Database, label: '资源管理' },
  { id: 'users', icon: Users, label: '用户管理' },
  { id: 'settings', icon: Settings, label: '系统设置' },
];

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export function Sidebar({ onPageChange, currentPage }: SidebarProps) {
  return (
    <aside className="bg-gray-900 w-64 min-h-screen">
      <div className="flex flex-col h-full">
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'} mr-3`} />
                {item.label}
              </button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">系统状态</p>
                <p className="text-xs text-green-400">运行正常</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}