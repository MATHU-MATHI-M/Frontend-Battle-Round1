import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Web Development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    readTime: "5 min read",
    tags: ["JavaScript", "React", "AI", "PWA"]
  },
  {
    id: 2,
    title: "Machine Learning for Beginners: A Complete Guide",
    excerpt: "Start your journey into machine learning with this comprehensive guide covering fundamentals and practical applications.",
    author: "Dr. Michael Chen",
    date: "2024-01-12",
    category: "Data Science",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    readTime: "8 min read",
    tags: ["Python", "ML", "AI", "Data Science"]
  },
  {
    id: 3,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Discover proven digital marketing strategies that drive real results for businesses of all sizes.",
    author: "Emma Rodriguez",
    date: "2024-01-10",
    category: "Marketing",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    readTime: "6 min read",
    tags: ["SEO", "Social Media", "Content Marketing"]
  },
  {
    id: 4,
    title: "UI/UX Design Principles Every Designer Should Know",
    excerpt: "Master the fundamental principles of user interface and user experience design to create exceptional digital products.",
    author: "Alex Kim",
    date: "2024-01-08",
    category: "Design",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    readTime: "7 min read",
    tags: ["UI", "UX", "Design", "Figma"]
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices for Remote Work",
    excerpt: "Essential cybersecurity measures to protect your data and systems while working remotely.",
    author: "James Wilson",
    date: "2024-01-05",
    category: "Security",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    readTime: "4 min read",
    tags: ["Security", "Remote Work", "VPN"]
  },
  {
    id: 6,
    title: "Mobile App Development: Native vs Cross-Platform",
    excerpt: "Compare native and cross-platform development approaches to choose the best strategy for your mobile app.",
    author: "Lisa Park",
    date: "2024-01-03",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
    readTime: "6 min read",
    tags: ["React Native", "Flutter", "iOS", "Android"]
  }
];

const categories = ["All", "Web Development", "Data Science", "Marketing", "Design", "Security", "Mobile Development"];

const Blog: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold mb-6">EduMaster Blog</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and insights in technology and education
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Article</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">{featuredPost.author}</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article 
                key={post.id}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  postsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for the latest articles and insights
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;