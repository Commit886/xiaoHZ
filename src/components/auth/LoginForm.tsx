import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function LoginForm() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'Admin' && credentials.password === 'Admin@789') {
      login();
    } else {
      setError('用户名或密码错误');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white/60 text-white"
            placeholder="用户名"
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent placeholder-white/60 text-white"
            placeholder="密码"
          />
        </div>
      </div>
      {error && (
        <p className="text-red-300 text-sm">{error}</p>
      )}
      <button
        type="submit"
        className="w-full bg-white/10 backdrop-blur border border-white/20 text-white py-3 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium"
      >
        登录
      </button>
    </form>
  );
}