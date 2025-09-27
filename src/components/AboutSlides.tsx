// AboutSlides.tsx
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface AboutSlidesProps {
  onLogin: () => void;
}

export const AboutSlides: React.FC<AboutSlidesProps> = ({ onLogin }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi! I am Rishika!";

  // Typing animation effect
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentSlide === 0 && typedText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
    return () => clearTimeout(timeoutId);
  }, [typedText, currentSlide, fullText]);

  // Reset typing animation when returning to first slide
  useEffect(() => {
    if (currentSlide === 0) {
      setTypedText('');
    }
  }, [currentSlide]);

  const testimonials = [
    {
      text: "Amazing courses that helped me land my dream job! The practical approach and real-world projects made all the difference.",
      author: "Sarah Johnson",
      role: "Software Developer",
      company: "Tech Corp"
    },
    {
      text: "The AI tools are incredibly helpful for learning. I've improved my productivity by 300% since joining.",
      author: "Michael Chen",
      role: "Data Scientist",
      company: "AI Solutions"
    },
    {
      text: "Rishika's teaching style is exceptional and engaging. Complex topics become easy to understand.",
      author: "Emily Rodriguez",
      role: "Full Stack Developer",
      company: "StartupXYZ"
    },
    {
      text: "Best investment I made for my career development. The live classes and mentorship are invaluable.",
      author: "David Kim",
      role: "Product Manager",
      company: "Innovation Labs"
    },
    {
      text: "The community support and resources are outstanding. I never felt alone in my learning journey.",
      author: "Lisa Thompson",
      role: "UX Designer",
      company: "Design Studio"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const faqs = [
    {
      question: "How do I get started with the courses?",
      answer: "Simply sign up for an account and browse our course catalog. You can start with our beginner-friendly courses or take our skill assessment to find the perfect starting point."
    },
    {
      question: "What are the prerequisites for AI courses?",
      answer: "Basic programming knowledge is recommended for AI courses. We provide foundational materials to help you prepare if needed."
    },
    {
      question: "Can I access courses offline?",
      answer: "Yes! Our mobile app allows you to download course materials and videos for offline viewing during your commute or travel."
    },
    {
      question: "Do you offer one-on-one mentoring?",
      answer: "Absolutely! We provide personalized mentoring sessions with industry experts to help accelerate your learning journey."
    },
    {
      question: "What's included in the AI Hub?",
      answer: "The AI Hub includes cutting-edge tools for code generation, content creation, image generation, and intelligent tutoring systems."
    },
    {
      question: "How often are live classes conducted?",
      answer: "Live classes are held multiple times per week, with recordings available for those who can't attend in real-time."
    }
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      {/* Slide 1: Hero/About (portrait video on left for md+) */}
      <div className="h-screen flex items-center justify-center bg-gray-50 snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-12">
            {/* Left: portrait video placeholder (phone-like on md+) */}
            <div className="w-full md:flex-none md:w-[360px] md:h-[640px]">
              <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl h-64 md:h-full w-full flex items-center justify-center mx-auto">
                <div className="text-center text-gray-600">
                  <Play className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-sm">Video with diff<br />thumbnail<br />in<br />portrait<br />design</p>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 min-h-[2.5rem]">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>

              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                  Welcome to my learning platform! I'm passionate about helping students
                  master cutting-edge technologies and AI tools. Join thousands of learners
                  who have transformed their careers with our comprehensive courses.
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={onLogin}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={onLogin}
                    className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-medium transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: Services (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-white snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">SITE LOGO AND SITE NAME</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What we have got to offer?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4 md:px-0">
            <div className="bg-blue-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
            <div className="bg-yellow-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Providing for live one to one or all 3 group classes, tailored according to your needs.
              </p>
            </div>
            <div className="bg-green-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.Gain access to cutting edge AI tools, to max your exams and boost your productivity.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
            <div className="bg-pink-200 p-8 rounded-2xl text-center">
              <p className="text-gray-800 text-sm leading-relaxed">
                Get access to all PYQs and cheatsheets related to your field.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
                Pre Recorded courses on latest technologies and Tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
              Join us now!
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3: Testimonials (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-gray-50 snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">SITE LOGO AND SITE NAME</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What do students say about us?
          </h2>

          {/* Testimonial Carousel */}
          <div className="relative bg-gradient-to-br from-yellow-200 to-orange-200 p-8 md:p-16 rounded-3xl mb-12 min-h-[400px] overflow-hidden shadow-lg">
            <div className="relative h-full flex items-center justify-center">
              <div className={`text-center transition-all duration-500 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="mb-8">
                  <svg className="w-12 h-12 text-yellow-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
                <div className="border-t border-yellow-400 pt-6">
                  <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-700 font-medium">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-gray-800 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">
              Join us now!
            </button>
          </div>
        </div>
      </div>

      {/* Slide 4: FAQ (full-bleed) */}
      <div className="h-screen flex items-center justify-center bg-white snap-start">
        <div className="w-full px-6 md:px-8 lg:px-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">SITE LOGO AND SITE NAME</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - FAQ Items */}
              <div className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <div className={`transform transition-transform duration-300 ${expandedFaq === index ? 'rotate-45' : ''}`}>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-4 h-0.5 bg-gray-600"></div>
                            <div className="w-0.5 h-4 bg-gray-600 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column - FAQ Items */}
              <div className="space-y-4">
                {faqs.slice(3).map((faq, index) => (
                  <div key={index + 3} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === (index + 3) ? null : (index + 3))}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <div className={`transform transition-transform duration-300 ${expandedFaq === (index + 3) ? 'rotate-45' : ''}`}>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <div className="w-4 h-0.5 bg-gray-600"></div>
                            <div className="w-0.5 h-4 bg-gray-600 absolute"></div>
                          </div>
                        </div>
                      </div>
                    </button>
                    {expandedFaq === (index + 3) && (
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-3xl text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="mb-6 text-blue-100">We're here to help! Get in touch with our support team.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Contact Support
                  </button>
                  <button 
                    onClick={onLogin}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
              </h2>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Join Now
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">LIST OF QUESTIONS</h3>
              {faqs.map((faq, index) => (
                <div key={index} className="py-4 px-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-gray-800">{faq}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
