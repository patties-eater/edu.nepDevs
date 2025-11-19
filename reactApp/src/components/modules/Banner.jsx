import banner from "../../assets/profile-pic.png";

// function Banner() {
//   return (
//     <div className="w-full flex justify-center mt-4">
//       <img
//         src={banner}
//         alt="banner"
//         className="w-[85%] rounded-md shadow-md"
//       />
//     </div>
//   );
// }

// export default Banner;










import React from 'react';

const Banner = () => {
  // Use the newly generated image URL here.
  const heroImageUrl = "https://example.com/path-to-your-new-boy-image.jpg"; // Placeholder, replace with actual URL

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-blue-400 animate-pulse"></div>
      <div className="absolute top-20 left-20">
        <img src="https://assets.website-files.com/60ee693b4823101d293f0b6e/60ef2f2f98642a42012d9c4f_globe-icon.svg" alt="Globe" className="w-16 h-16 opacity-30 animate-float" />
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/4 right-1/4 transform rotate-12">
        <img src="https://assets.website-files.com/60ee693b4823101d293f0b6e/60ef2f2f98642a42012d9c4f_triangle-icon.svg" alt="Triangle" className="w-20 h-20 opacity-30 animate-pulse" />
      </div>
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 animate-spin-slow">
          <circle cx="50" cy="50" r="40" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="10 5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content Section */}
        <div className="text-left">
          <p className="text-blue-600 text-sm font-semibold mb-2">100% Satisfaction Guarantee</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Best Learning <br />
            <span className="relative inline-block">
              Platform
              <span className="absolute left-0 bottom-0 w-full h-2 bg-blue-400 opacity-50 z-0"></span>
            </span>{' '}
            For Entrance <br />
            Preparation
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            CodeWithPrajjwal is your trusted path to success. Get guided by industry experts and elevate your knowledge to new heights.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              EXPLORE COURSES <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              <div>
                <p className="text-sm">Have any Question?</p>
                <p className="font-medium">9818313694</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image and Stats Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            {/* Main Image - Now using the new boy image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={banner} 
                alt="Male student ready for entrance preparation" 
                className="w-full h-auto object-cover transform scale-105" 
              />
            </div>
            
            {/* Stats Boxes (unchanged) */}
            <div className="absolute -top-10 right-0 bg-white p-4 rounded-lg shadow-xl flex items-center space-x-3 transform rotate-3">
              <div className="p-2 rounded-full bg-green-100">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h.01M17 10h.01M8 20h.01M8 10h.01M8 7h.01M17 7h.01M12 4h.01M12 20h.01M17 4h.01M8 4h.01M4 4h.01M4 20h.01M20 4h.01M20 20h.01"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-xl font-bold text-gray-900">4M+</p>
              </div>
            </div>
            <div className="absolute -bottom-10 left-0 bg-white p-4 rounded-lg shadow-xl flex items-center space-x-3 transform -rotate-3">
              <div className="p-2 rounded-full bg-purple-100">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697A7.903 7.903 0 005.166 6H4a2 2 0 00-2 2v4a2 2 0 002 2h.166a7.903 7.903 0 002.669 1.303l.001.001A8 8 0 0012 20a8 8 0 005.166-1.303l.001-.001A7.903 7.903 0 0019.834 14H20a2 2 0 002-2V8a2 2 0 00-2-2h-1.166a7.903 7.903 0 00-2.669-1.303l-.001-.001A8 8 0 0012 4a8 8 0 00-5.166 1.303z"></path></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Achieved Dream</p>
                <p className="text-xl font-bold text-gray-900">3M+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animations (Keep this in your file or move to global CSS) */}
      <style jsx>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0px, 0px) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(10px, -10px) scale(1.05); }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0px, 0px) scale(1); }
          75% { border-radius: 40% 70% 60% 30% / 40% 70% 30% 60%; transform: translate(-10px, 10px) scale(0.95); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse { animation: pulse 3s ease-in-out infinite; }
        .animate-blob { animation: blob 8s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Banner;