import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const stats: StatItem[] = [
  { label: 'Students Enrolled', value: 15000, suffix: '+', color: 'text-blue-600' },
  { label: 'Courses Available', value: 750, suffix: '+', color: 'text-purple-600' },
  { label: 'Success Rate', value: 95, suffix: '%', color: 'text-green-600' },
  { label: 'Expert Instructors', value: 200, suffix: '+', color: 'text-orange-600' }
];

const Stats: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(increment * currentStep, stat.value);
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.round(currentValue);
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <div ref={ref} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {animatedValues[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;