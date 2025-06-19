import React, { createContext, useContext, useEffect, useState } from 'react';

interface RippleContextType {
  ripples: Array<{ id: number; x: number; y: number; size: number; color: string }>;
  addRipple: (x: number, y: number) => void;
}

const RippleContext = createContext<RippleContextType | undefined>(undefined);

export const RippleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);

  const addRipple = (x: number, y: number) => {
    const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-green-400'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomSize = Math.random() * 20 + 10;
    
    const newRipple = { 
      id: Date.now() + Math.random(), 
      x, 
      y, 
      size: randomSize,
      color: randomColor
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 1500);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) { // Create ripples more frequently
        addRipple(e.clientX, e.clientY);
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Always create a ripple on click
      addRipple(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <RippleContext.Provider value={{ ripples, addRipple }}>
      {children}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className={`absolute rounded-full ${ripple.color} opacity-60 animate-ping`}
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
      
      {/* Water ripple effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {ripples.map(ripple => (
          <div
            key={`water-${ripple.id}`}
            className="absolute border-2 border-blue-300 dark:border-blue-500 rounded-full opacity-30"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
              animation: 'ripple 1.5s ease-out forwards'
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </RippleContext.Provider>
  );
};

export const useRipple = () => {
  const context = useContext(RippleContext);
  if (!context) {
    throw new Error('useRipple must be used within a RippleProvider');
  }
  return context;
};