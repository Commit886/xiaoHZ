import React from 'react';
import { Activity } from 'lucide-react';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80'),
              url('https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80'),
              url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')
            `,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'overlay',
            mixBlendMode: 'overlay',
            opacity: 0.2,
          }}
        />
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-violet-600/30 to-purple-600/30"
          style={{
            animation: 'gradient 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Login container with glassmorphism effect */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur mb-4 border border-white/20">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">智能网络运维管理平台</h1>
          <p className="text-white/80">请输入您的账号密码</p>
        </div>
        <LoginForm />
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          from { transform: translateY(100vh) rotate(0deg); }
          to { transform: translateY(-100vh) rotate(360deg); }
        }
        @keyframes gradient {
          0% { opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}