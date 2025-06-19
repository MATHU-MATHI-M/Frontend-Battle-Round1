import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Award, Clock, BookOpen, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProgressData {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

interface ChartData {
  month: string;
  courses: number;
  hours: number;
}

const Progress: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([0, 0, 0, 0]);
  const [currentStats, setCurrentStats] = useState([0, 0, 0, 0]);

  const progressData: ProgressData[] = [
    { label: 'Courses Completed', value: 8, maxValue: 12, color: 'bg-blue-500' },
    { label: 'Hours Studied', value: 156, maxValue: 200, color: 'bg-green-500' },
    { label: 'Assignments Done', value: 24, maxValue: 30, color: 'bg-purple-500' },
    { label: 'Certificates Earned', value: 3, maxValue: 5, color: 'bg-orange-500' }
  ];

  const stats = [
    { icon: BookOpen, label: 'Active Courses', value: 4, color: 'text-blue-600' },
    { icon: Clock, label: 'Study Streak', value: 15, suffix: ' days', color: 'text-green-600' },
    { icon: Target, label: 'Goals Achieved', value: 7, suffix: '/10', color: 'text-purple-600' },
    { icon: Award, label: 'Skill Level', value: 85, suffix: '%', color: 'text-orange-600' }
  ];

  const chartData: ChartData[] = [
    { month: 'Jan', courses: 2, hours: 40 },
    { month: 'Feb', courses: 3, hours: 55 },
    { month: 'Mar', courses: 1, hours: 25 },
    { month: 'Apr', courses: 4, hours: 70 },
    { month: 'May', courses: 2, hours: 45 },
    { month: 'Jun', courses: 3, hours: 60 }
  ];

  const maxHours = Math.max(...chartData.map(d => d.hours));

  useEffect(() => {
    if (!isVisible) return;

    // Animate progress bars
    progressData.forEach((_, index) => {
      const duration = 2000;
      const steps = 60;
      const targetValue = (progressData[index].value / progressData[index].maxValue) * 100;
      const increment = targetValue / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(increment * currentStep, targetValue);
        
        setAnimatedProgress(prev => {
          const newProgress = [...prev];
          newProgress[index] = currentValue;
          return newProgress;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });

    // Animate stats
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(increment * currentStep, stat.value);
        
        setCurrentStats(prev => {
          const newStats = [...prev];
          newStats[index] = Math.round(currentValue);
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Learning Progress
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {currentStats[index]}{stat.suffix || ''}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bars */}
        <div ref={ref} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
            Current Progress
          </h2>
          
          <div className="space-y-6">
            {progressData.map((progress, index) => (
              <div 
                key={progress.label}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {progress.label}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {progress.value}/{progress.maxValue}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${progress.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${animatedProgress[index]}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {Math.round(animatedProgress[index])}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Study Hours Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
              Monthly Study Hours
            </h3>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex items-center space-x-4">
                  <div className="w-8 text-sm text-gray-600 dark:text-gray-400">
                    {data.month}
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${(data.hours / maxHours) * 100}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <div className="w-12 text-sm text-gray-600 dark:text-gray-400 text-right">
                    {data.hours}h
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-orange-600" />
              Recent Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    JavaScript Mastery
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Completed with 95% score
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Study Streak
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    15 days in a row
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Fast Learner
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Completed 3 courses this month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Your Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">This Month</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Complete React Advanced course</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Study 50 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Start Node.js course</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Next Quarter</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Get Full Stack certification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Build 2 portfolio projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Join study group</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;