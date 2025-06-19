import React from 'react';
import { Award, Users, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from course content to student support."
    },
    {
      icon: Heart,
      title: "Accessibility",
      description: "Education should be available to everyone, regardless of background or location."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our teaching methods to provide the best learning experience."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      description: "Former MIT professor with 20+ years in education technology"
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
      description: "Ex-Google engineer passionate about scalable learning platforms"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Curriculum",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      description: "Educational psychology expert with proven track record in course design"
    }
  ];

  const achievements = [
    { icon: Users, number: "50,000+", label: "Students Graduated" },
    { icon: BookOpen, number: "500+", label: "Courses Offered" },
    { icon: Award, number: "98%", label: "Student Satisfaction" },
    { icon: Target, number: "150+", label: "Industry Partners" }
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold mb-6">About EduMaster</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize quality education and empower learners worldwide 
              with the skills they need to succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Founded in 2020, EduMaster began as a small initiative to provide accessible, 
                  high-quality education during the global shift to remote learning. What started 
                  as a handful of courses has grown into a comprehensive platform serving students worldwide.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Our platform has helped thousands of students transition to new careers, advance 
                  in their current roles, and discover their passion for learning. We're proud to 
                  maintain a 95% student satisfaction rate and continue to innovate in online education.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={achievement.label} className="text-center">
                        <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {achievement.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" 
                  alt="Students learning"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transform transition-all duration-700 ${
            valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className={`bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center transform transition-all duration-700 ${
                    valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transform transition-all duration-700 ${
            teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The passionate experts behind EduMaster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 ${
                  teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Become part of a global learning community that's changing lives through education
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;