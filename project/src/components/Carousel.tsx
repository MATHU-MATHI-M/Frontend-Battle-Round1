import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, Users } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  image: string;
  description: string;
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
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    description: "Master modern web development with React, Node.js, and MongoDB"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 1800,
    duration: "16 weeks",
    price: 399,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    description: "Learn Python, TensorFlow, and advanced analytics techniques"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Mike Chen",
    rating: 4.7,
    students: 3200,
    duration: "8 weeks",
    price: 199,
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    description: "Complete guide to SEO, social media, and online advertising"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    instructor: "Emma Wilson",
    rating: 4.9,
    students: 2100,
    duration: "10 weeks",
    price: 249,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    description: "Create stunning user interfaces and exceptional user experiences"
  }
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-96 overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {courses.map((course) => (
          <div key={course.id} className="w-full flex-shrink-0 relative">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-200 mb-3">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm">
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
                <div className="text-right">
                  <div className="text-2xl font-bold">${course.price}</div>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {courses.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;