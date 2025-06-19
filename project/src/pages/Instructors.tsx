import React from 'react';
import { Star, Award, BookOpen, Users, Linkedin, Twitter, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Instructor {
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
  rating: number;
  students: number;
  courses: number;
  experience: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Full Stack Developer",
    specialization: "Web Development & Data Science",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    rating: 4.9,
    students: 15000,
    courses: 12,
    experience: "10+ years",
    bio: "Former MIT professor and Google engineer with extensive experience in full-stack development and machine learning. Passionate about making complex concepts accessible to everyone.",
    skills: ["JavaScript", "Python", "React", "Node.js", "TensorFlow", "AWS"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Lead Data Scientist",
    specialization: "Machine Learning & AI",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
    rating: 4.8,
    students: 12000,
    courses: 8,
    experience: "8+ years",
    bio: "Ex-Facebook data scientist specializing in machine learning and artificial intelligence. Published researcher with 50+ papers in top-tier conferences.",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "Docker"],
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Digital Marketing Expert",
    specialization: "SEO & Content Marketing",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 4.7,
    students: 18000,
    courses: 15,
    experience: "12+ years",
    bio: "Award-winning digital marketer who has helped 500+ businesses grow their online presence. Expert in SEO, content marketing, and social media strategy.",
    skills: ["SEO", "Google Ads", "Content Marketing", "Social Media", "Analytics", "Email Marketing"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Alex Kim",
    title: "Senior UX Designer",
    specialization: "UI/UX Design",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
    rating: 4.9,
    students: 10000,
    courses: 6,
    experience: "7+ years",
    bio: "Design lead at top tech companies including Apple and Airbnb. Specializes in user-centered design and has won multiple design awards.",
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "James Wilson",
    title: "Cybersecurity Specialist",
    specialization: "Information Security",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    rating: 4.8,
    students: 8000,
    courses: 10,
    experience: "15+ years",
    bio: "Former NSA cybersecurity analyst with extensive experience in penetration testing, incident response, and security architecture.",
    skills: ["Ethical Hacking", "Network Security", "Incident Response", "Risk Assessment", "Compliance", "Forensics"],
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 6,
    name: "Lisa Park",
    title: "Mobile App Developer",
    specialization: "iOS & Android Development",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
    rating: 4.9,
    students: 9500,
    courses: 9,
    experience: "9+ years",
    bio: "Senior mobile developer who has built apps with millions of downloads. Expert in both native and cross-platform development.",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

const Instructors: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: instructorsRef, isVisible: instructorsVisible } = useScrollAnimation();

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold mb-6">Meet Our Expert Instructors</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Learn from industry professionals with years of real-world experience 
              and a passion for teaching
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Expert Instructors</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">100K+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Taught</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400">Courses Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section ref={instructorsRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Teaching Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Industry experts committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div 
                key={instructor.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  instructorsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{instructor.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {instructor.specialization}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{instructor.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{instructor.courses} courses</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {instructor.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {instructor.skills.slice(0, 4).map(skill => (
                        <span key={skill} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {instructor.skills.length > 4 && (
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                          +{instructor.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                      <Award className="h-4 w-4" />
                      <span>{instructor.experience} experience</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {instructor.social.linkedin && (
                        <a href={instructor.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {instructor.social.twitter && (
                        <a href={instructor.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {instructor.social.github && (
                        <a href={instructor.social.github} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Become an Instructor?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Share your expertise with thousands of eager learners worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Apply to Teach
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;