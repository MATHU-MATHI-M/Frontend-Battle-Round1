import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    "Loading courses...",
    "Preparing content...",
    "Initializing features...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % stats.length);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="relative mb-8">
          <BookOpen className="h-16 w-16 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">EduMaster</h1>
        <p className="text-xl mb-8 opacity-90">Education Excellence</p>
        
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-lg font-medium">
            {stats[currentStat]}
          </p>
          
          <div className="mt-6 flex justify-center space-x-8 text-sm opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div>Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div>Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;