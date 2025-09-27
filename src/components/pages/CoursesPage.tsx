import React from 'react';

export const CoursesPage: React.FC = () => {
  const courses = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Course ${i + 1}`,
    description: 'Advanced programming concepts and practical applications.',
    level: ['Beginner', 'Intermediate', 'Advanced'][i % 3],
    duration: `${Math.floor(Math.random() * 20) + 10} hours`
  }));

  const [currentPage, setCurrentPage] = React.useState(0);
  const coursesPerPage = 5;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const getCurrentCourses = () => {
    const start = currentPage * coursesPerPage;
    return courses.slice(start, start + coursesPerPage);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
            <span className="text-lg font-bold text-gray-700">SITE LOGO AND SITE NAME</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Explore our courses! Designed for the next gen developers!
        </h1>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Explore our courses! Designed for the next gen developers!
        </h1>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover cutting-edge courses designed to elevate your skills and accelerate your career in technology.
        </p>

        {/* Course Grid */}
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-12 rounded-3xl mb-8 shadow-lg border border-yellow-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {getCurrentCourses().map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-gray-300 hover:border-gray-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-700 mb-2">{course.description}</p>
                <div className="text-xs text-gray-600 mb-3">
                  <p>Level: {course.level}</p>
                  <p>Duration: {course.duration}</p>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-gray-900 scale-125' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Additional CTA */}
        <div className="text-center">
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-gray-300 mb-6">Join thousands of students who have transformed their careers with our courses.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-colors">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};