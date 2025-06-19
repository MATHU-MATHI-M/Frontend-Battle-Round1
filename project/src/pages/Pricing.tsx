import React, { useState } from 'react';
import { Check, X, Star, Crown, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  icon: React.ComponentType<any>;
  color: string;
  buttonColor: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for beginners starting their learning journey',
    features: [
      'Access to 50+ courses',
      'Basic video quality (720p)',
      'Community forum access',
      'Mobile app access',
      'Basic progress tracking',
      'Email support'
    ],
    notIncluded: [
      'Certificates',
      'Live sessions',
      'Priority support',
      'Downloadable content'
    ],
    icon: Star,
    color: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 59,
    originalPrice: 79,
    period: 'month',
    description: 'Most popular choice for serious learners',
    features: [
      'Access to 200+ courses',
      'HD video quality (1080p)',
      'Community forum access',
      'Mobile app access',
      'Advanced progress tracking',
      'Certificates of completion',
      'Live Q&A sessions',
      'Priority email support',
      'Downloadable resources'
    ],
    notIncluded: [
      '1-on-1 mentoring',
      'Custom learning paths'
    ],
    popular: true,
    icon: Crown,
    color: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    originalPrice: 129,
    period: 'month',
    description: 'Complete solution for professionals and teams',
    features: [
      'Access to all 500+ courses',
      '4K video quality',
      'Community forum access',
      'Mobile app access',
      'Advanced analytics',
      'Certificates of completion',
      'Live Q&A sessions',
      '1-on-1 mentoring sessions',
      'Custom learning paths',
      'Team management tools',
      'Priority phone support',
      'Downloadable resources',
      'API access'
    ],
    icon: Zap,
    color: 'text-orange-600',
    buttonColor: 'bg-orange-600 hover:bg-orange-700'
  }
];

const Pricing: React.FC = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();
  
  const [isAnnual, setIsAnnual] = useState(false);

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial for all plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer 50% discount for students with valid student ID. Contact support for details."
    }
  ];

  const getPrice = (plan: PricingPlan) => {
    const price = isAnnual ? Math.round(plan.price * 10) : plan.price;
    return price;
  };

  const getOriginalPrice = (plan: PricingPlan) => {
    if (!plan.originalPrice) return null;
    const price = isAnnual ? Math.round(plan.originalPrice * 10) : plan.originalPrice;
    return price;
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className={`text-center text-white transform transition-all duration-1000 ${
            heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl font-bold mb-6">Choose Your Learning Plan</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Flexible pricing options to fit your learning goals and budget
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-white' : 'bg-blue-400'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-blue-600 transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-blue-200'}`}>
                Annual
                <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={plansRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div 
                  key={plan.id}
                  className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  } ${
                    plansVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${plan.color} mb-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {plan.description}
                      </p>
                      
                      <div className="flex items-center justify-center space-x-2">
                        {getOriginalPrice(plan) && (
                          <span className="text-2xl text-gray-400 line-through">
                            ${getOriginalPrice(plan)}
                          </span>
                        )}
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          ${getPrice(plan)}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          /{isAnnual ? 'year' : plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded?.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 opacity-50">
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500 dark:text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full ${plan.buttonColor} text-white px-6 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200`}>
                      Get Started
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Compare All Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-6 text-gray-900 dark:text-white font-bold">Features</th>
                  {pricingPlans.map(plan => (
                    <th key={plan.id} className="text-center p-6 text-gray-900 dark:text-white font-bold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Course Access</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">50+ courses</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">200+ courses</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">All 500+ courses</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Video Quality</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">720p</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">1080p HD</td>
                  <td className="text-center p-6 text-gray-700 dark:text-gray-300">4K Ultra HD</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">Certificates</td>
                  <td className="text-center p-6"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-6"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="text-center p-6"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="p-6 text-gray-700 dark:text-gray-300">1-on-1 Mentoring</td>
                  <td className="text-center p-6"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-6"><X className="h-5 w-5 text-red-500 mx-auto" /></td>
                  <td className="text-center p-6"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-700 ${
                  faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already learning with EduMaster
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;