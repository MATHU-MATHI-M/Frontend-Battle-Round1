import React from 'react';
import { BookOpen, Users, Award, Clock, Laptop, HeadphonesIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Collaborate with peers and instructors in our engaging online community",
    color: "text-purple-600"
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn recognized certifications that boost your career prospects",
    color: "text-green-600"
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials",
    color: "text-orange-600"
  },
  {
    icon: Laptop,
    title: "Hands-On Projects",
    description: "Build real-world projects to showcase your skills to employers",
    color: "text-red-600"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team",
    color: "text-indigo-600"
  }
];

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose EduMaster?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the features that make our platform exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${feature.color} mb-4`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;