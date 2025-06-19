import React, { useState } from 'react';
import { Star, Clock, Users, Filter, Search } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  originalPrice?: number;
  level: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "John Smith",
    rating: 4.9,
    students: 2500,
    duration: "12 weeks",
    price: 299,
    originalPrice: 399,
    level: "Intermediate",
    category: "Web Development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    description: "Master modern web development with React, Node.js, and MongoDB",
    features: ["React & Redux", "Node.js & Express", "MongoDB", "Authentication", "Deployment"]
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1800,
    duration: "16 weeks",
    price: 399,
    originalPrice: 499,
    level: "Advanced",
    category: "Data Science",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    description: "Learn Python, TensorFlow, and advanced analytics techniques",
    features: ["Python Programming", "TensorFlow", "Data Analysis", "ML Algorithms", "Deep Learning"]
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Mike Chen",
    rating: 4.7,
    students: 3200,
    duration: "8 weeks",
    price: 199,
    originalPrice: 299,
    level: "Beginner",
    category: "Marketing",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    description: "Complete guide to SEO, social media, and online advertising",
    features: ["SEO Optimization", "Social Media", "Google Ads", "Content Marketing", "Analytics"]
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    instructor: "Emma Wilson",
    rating: 4.9,
    students: 2100,
    duration: "10 weeks",
    price: 249,
    originalPrice: 349,
    level: "Beginner",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    description: "Create stunning user interfaces and exceptional user experiences",
    features: ["Design Principles", "Figma", "Prototyping", "User Research", "Wireframing"]
  },
  {
    id: 5,
    title: "Cybersecurity Essentials",
    instructor: "Alex Rodriguez",
    rating: 4.6,
    students: 1500,
    duration: "14 weeks",
    price: 349,
    originalPrice: 449,
    level: "Intermediate",
    category: "Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    description: "Protect systems and networks from cyber threats",
    features: ["Network Security", "Ethical Hacking", "Risk Assessment", "Incident Response", "Compliance"]
  },
  {
    id: 6,
    title: "Mobile App Development",
    instructor: "Lisa Park",
    rating: 4.8,
    students: 1900,
    duration: "12 weeks",
    price: 329,
    originalPrice: 429,
    level: "Intermediate",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    description: "Build native mobile apps for iOS and Android platforms",
    features: ["React Native", "Flutter", "iOS Development", "Android Development", "App Store Deployment"]
  }
];

const categories = ["All", "Web Development", "Data Science", "Marketing", "Design", "Security", "Mobile Development"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose from our extensive catalog of expert-led courses
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                </div>
                {course.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    Save ${course.originalPrice - course.price}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">What you'll learn:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;