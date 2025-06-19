import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rodriguez",
    role: "Full Stack Developer",
    company: "TechCorp",
    content: "EduMaster transformed my career. The courses are incredibly well-structured, and the instructors are industry experts. I landed my dream job within 3 months!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Data Scientist",
    company: "DataTech Solutions",
    content: "The machine learning course exceeded my expectations. The hands-on projects and real-world applications made complex concepts easy to understand.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
  },
  {
    id: 3,
    name: "David Kim",
    role: "UX Designer",
    company: "Creative Studio",
    content: "Outstanding quality and support! The design fundamentals course helped me transition from development to design seamlessly. Highly recommended!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
  }
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from our graduates who achieved their goals
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                    <Quote className="h-12 w-12 text-blue-600 mb-4" />
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;