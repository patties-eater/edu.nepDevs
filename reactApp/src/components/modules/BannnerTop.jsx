// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const BannerTop = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
//       {/* Injecting custom keyframe animations styles */}
//       <style>{`
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInLeftNormal {
//             from { opacity: 0; transform: translateX(-50px); }
//             to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInRightNormal {
//             from { opacity: 0; transform: translateX(50px); }
//             to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//             from { opacity: 0; transform: skewX(-12deg) scale(0.8); }
//             to { opacity: 1; transform: skewX(-12deg) scale(1); }
//         }
        
//         /* Utility classes for animations */
//         .anim-stripe-left { animation: slideInLeft 1s ease-out forwards; opacity: 0; }
//         .anim-stripe-right { animation: slideInRight 1s ease-out forwards; opacity: 0; }
//         .anim-slide-left { animation: slideInLeftNormal 0.8s ease-out forwards; opacity: 0; }
//         .anim-slide-right { animation: slideInRightNormal 0.8s ease-out forwards; opacity: 0; }
//         .anim-slide-up { animation: slideInUp 0.8s ease-out forwards; opacity: 0; }
//         .anim-pop { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        
//         /* Stagger delays */
//         .delay-0 { animation-delay: 0ms; }
//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//         .delay-300 { animation-delay: 300ms; }
//         .delay-400 { animation-delay: 400ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//       `}</style>

      
//       {/* --- BANNER START --- */}
//       <div className="relative w-full max-w-[1200px] h-[300px] md:h-[320px] bg-[#2a1b85] overflow-hidden shadow-2xl rounded-lg flex items-center group">
        
//         {/* --- DECORATIVE BACKGROUND STRIPES (LEFT) --- */}
//         <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none z-0">
//           {/* Pink Stripe Left */}
//           <div className="absolute -left-12 bottom-0 w-24 h-[150%] bg-pink-400 origin-bottom-left anim-stripe-left delay-0"></div>
//           {/* Blue Stripe Left */}
//           <div className="absolute left-8 bottom-0 w-16 h-[150%] bg-blue-600 origin-bottom-left anim-stripe-left delay-100"></div>
//           {/* White Thin Stripe Left */}
//           <div className="absolute left-4 bottom-0 w-4 h-[150%] bg-white opacity-20 origin-bottom-left anim-stripe-left delay-200"></div>
//         </div>

//         {/* --- DECORATIVE BACKGROUND STRIPES (RIGHT) --- */}
//         <div className="absolute top-0 right-0 h-full w-full overflow-hidden pointer-events-none z-0">
//            {/* Pink Stripe Right */}
//            <div className="absolute -right-12 top-0 w-32 h-[150%] bg-pink-300 origin-top-right anim-stripe-right delay-0"></div>
//            {/* Dark Purple Stripe Right */}
//            <div className="absolute right-16 top-0 w-16 h-[150%] bg-indigo-900 origin-top-right anim-stripe-right delay-100"></div>
//         </div>

//         {/* --- MAIN CONTENT CONTAINER --- */}
//         <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12">
          
//           {/* 1. LEFT IMAGE (Students on Books) */}
//           <div className="hidden md:block w-1/4 h-full relative">
//              <div className="absolute bottom-0 left-4 w-full h-[90%] flex items-end anim-slide-left delay-300">
//                 {/* Placeholder for 3D Student Illustration */}
//                 <img 
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
//                   alt="Students studying" 
//                   className="object-contain h-full w-auto drop-shadow-2xl mask-image-linear-gradient"
//                   style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))' }}
//                 />
//              </div>
//           </div>

//           {/* 2. CENTER CONTENT (Slanted Box & Text) */}
//           <div className="flex-1 flex flex-col items-center justify-center relative">
            
//             {/* The White Slanted Shape */}
//             <div className="relative bg-white py-6 px-12 transform -skew-x-12 shadow-lg mb-2 w-full max-w-2xl flex flex-col items-center justify-center anim-pop delay-400 hover:scale-105 transition-transform duration-300">
//               {/* Inner content un-skewed */}
//               <div className="transform skew-x-12 text-center">
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-[#3c1e96] leading-tight">
//                    Exam Preparation
//                 </h1>
//                 <div className="mt-1 flex items-center justify-center gap-2 text-[#0f172a] font-bold text-xl md:text-2xl">
//                   <span>B.Sc.CSIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BCA</span>
//                 </div>
//               </div>
//             </div>

//             {/* Text to the right of the box (Free Online Mock Test) */}
//             <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 hidden lg:block text-left pl-4 anim-slide-right delay-500">
//                <h2 className="text-white text-3xl font-bold leading-none italic">FREE ONLINE</h2>
//                <h2 className="text-white text-3xl font-bold leading-none italic">MOCK TEST</h2>
//             </div>

//              {/* Mobile Only Version of Right Text */}
//              <div className="lg:hidden mt-4 text-center anim-slide-up delay-500">
//                <h2 className="text-white text-xl font-bold italic">FREE ONLINE MOCK TEST</h2>
//              </div>

//             {/* URL Bottom Center */}
//             <div className="absolute -bottom-10 md:-bottom-12 left-0 right-0 text-center anim-slide-up delay-700">
//                <p className="text-white text-lg md:text-xl tracking-wide font-medium drop-shadow-md">
//                  www.Prajwalgautam7223@gmail.com
//                </p>
//             </div>
//           </div>

//           {/* 3. RIGHT IMAGE (Computer Monitor) */}
//           <div className="hidden md:flex w-1/4 h-full items-center justify-end relative anim-slide-right delay-500">
//              <div className="relative w-64 h-48 bg-white rounded-xl shadow-2xl border-4 border-gray-200 p-2 transform rotate-[-5deg] hover:rotate-0 transition duration-300 cursor-pointer">
//                 {/* Screen Content */}
//                 <div className="w-full h-full bg-blue-50 rounded overflow-hidden relative">
//                    {/* Mock Header */}
//                    <div className="h-6 bg-blue-200 w-full flex items-center px-2 space-x-1">
//                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                    </div>
//                    {/* Mock Charts */}
//                    <div className="p-3 grid grid-cols-2 gap-2 h-full">
//                       <div className="bg-blue-200 h-16 rounded animate-pulse"></div>
//                       <div className="bg-pink-200 h-16 rounded animate-pulse delay-75"></div>
//                       <div className="col-span-2 bg-indigo-200 h-8 rounded mt-1 animate-pulse delay-150"></div>
//                    </div>
//                 </div>
//                 {/* Monitor Stand */}
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-300 rounded-b-lg"></div>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full mt-6"></div>
//              </div>
//           </div>

//         </div>
//       </div>
//       {/* --- BANNER END --- */}

     

//     </div>
//   );
// };

// export default BannerTop;






// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const BannerTop = () => {
//   return (
//     <div className="h-[280px] md:h-[350px] lg:h-[400px] bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
//       {/* Injecting custom keyframe animations styles */}
//       <style>{`
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-100px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInLeftNormal {
//             from { opacity: 0; transform: translateX(-50px); }
//             to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(100px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInRightNormal {
//             from { opacity: 0; transform: translateX(50px); }
//             to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//             from { opacity: 0; transform: skewX(-12deg) scale(0.8); }
//             to { opacity: 1; transform: skewX(-12deg) scale(1); }
//         }
        
//         /* Utility classes for animations */
//         .anim-stripe-left { animation: slideInLeft 1s ease-out forwards; opacity: 0; }
//         .anim-stripe-right { animation: slideInRight 1s ease-out forwards; opacity: 0; }
//         .anim-slide-left { animation: slideInLeftNormal 0.8s ease-out forwards; opacity: 0; }
//         .anim-slide-right { animation: slideInRightNormal 0.8s ease-out forwards; opacity: 0; }
//         .anim-slide-up { animation: slideInUp 0.8s ease-out forwards; opacity: 0; }
//         .anim-pop { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        
//         /* Stagger delays */
//         .delay-0 { animation-delay: 0ms; }
//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//         .delay-300 { animation-delay: 300ms; }
//         .delay-400 { animation-delay: 400ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-700 { animation-delay: 700ms; }
//       `}</style>

//       {/* --- BANNER START --- */}
//       <div className="relative w-full max-w-[1200px] h-full bg-[#2a1b85] overflow-hidden shadow-2xl rounded-lg flex items-center group">
        
//         {/* Left Decorative Stripes */}
//         <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none z-0">
//           <div className="absolute -left-12 bottom-0 w-24 h-[150%] bg-pink-400 origin-bottom-left anim-stripe-left delay-0"></div>
//           <div className="absolute left-8 bottom-0 w-16 h-[150%] bg-blue-600 origin-bottom-left anim-stripe-left delay-100"></div>
//           <div className="absolute left-4 bottom-0 w-4 h-[150%] bg-white opacity-20 origin-bottom-left anim-stripe-left delay-200"></div>
//         </div>

//         {/* Right Decorative Stripes */}
//         <div className="absolute top-0 right-0 h-full w-full overflow-hidden pointer-events-none z-0">
//            <div className="absolute -right-12 top-0 w-32 h-[150%] bg-pink-300 origin-top-right anim-stripe-right delay-0"></div>
//            <div className="absolute right-16 top-0 w-16 h-[150%] bg-indigo-900 origin-top-right anim-stripe-right delay-100"></div>
//         </div>

//         {/* Main Content */}
//         <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12">
          
//           {/* Left Image */}
//           <div className="hidden md:block w-1/4 h-full relative">
//              <div className="absolute bottom-0 left-4 w-full h-[90%] flex items-end anim-slide-left delay-300">
//                 <img 
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
//                   alt="Students studying" 
//                   className="object-contain h-full w-auto drop-shadow-2xl mask-image-linear-gradient"
//                   style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))' }}
//                 />
//              </div>
//           </div>

//           {/* Center Box & Text */}
//           <div className="flex-1 flex flex-col items-center justify-center relative">
            
//             <div className="relative bg-white py-6 px-12 transform -skew-x-12 shadow-lg mb-2 w-full max-w-2xl flex flex-col items-center justify-center anim-pop delay-400 hover:scale-105 transition-transform duration-300">
//               <div className="transform skew-x-12 text-center">
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-[#3c1e96] leading-tight">
//                    Exam Preparation
//                 </h1>
//                 <div className="mt-1 flex items-center justify-center gap-2 text-[#0f172a] font-bold text-xl md:text-2xl">
//                   <span>B.Sc.CSIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BCA</span>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 hidden lg:block text-left pl-4 anim-slide-right delay-500">
//                <h2 className="text-white text-3xl font-bold leading-none italic">FREE ONLINE</h2>
//                <h2 className="text-white text-3xl font-bold leading-none italic">MOCK TEST</h2>
//             </div>

//             <div className="lg:hidden mt-4 text-center anim-slide-up delay-500">
//                <h2 className="text-white text-xl font-bold italic">FREE ONLINE MOCK TEST</h2>
//             </div>

//             <div className="absolute -bottom-10 md:-bottom-12 left-0 right-0 text-center anim-slide-up delay-700">
//                <p className="text-white text-lg md:text-xl tracking-wide font-medium drop-shadow-md">
//                  www.Prajwalgautam7223@gmail.com
//                </p>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="hidden md:flex w-1/4 h-full items-center justify-end relative anim-slide-right delay-500">
//              <div className="relative w-64 h-48 bg-white rounded-xl shadow-2xl border-4 border-gray-200 p-2 transform rotate-[-5deg] hover:rotate-0 transition duration-300 cursor-pointer">
//                 <div className="w-full h-full bg-blue-50 rounded overflow-hidden relative">
//                    <div className="h-6 bg-blue-200 w-full flex items-center px-2 space-x-1">
//                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                    </div>
//                    <div className="p-3 grid grid-cols-2 gap-2 h-full">
//                       <div className="bg-blue-200 h-16 rounded animate-pulse"></div>
//                       <div className="bg-pink-200 h-16 rounded animate-pulse delay-75"></div>
//                       <div className="col-span-2 bg-indigo-200 h-8 rounded mt-1 animate-pulse delay-150"></div>
//                    </div>
//                 </div>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-300 rounded-b-lg"></div>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-300 rounded-full mt-6"></div>
//              </div>
//           </div>

//         </div>
//       </div>
//       {/* --- BANNER END --- */}
//     </div>
//   );
// };

// export default BannerTop;
















// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const BannerTop = () => {
//   return (
//     <div className="h-[180px] md:h-[240px] lg:h-[280px] bg-gray-100 flex flex-col items-center justify-center p-3 font-sans">
      
//       {/* Custom Animations */}
//       <style>{`
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-80px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(80px) rotate(30deg); }
//           to { opacity: 1; transform: translateX(0) rotate(30deg); }
//         }
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(25px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//           from { opacity: 0; transform: skewX(-12deg) scale(0.85); }
//           to { opacity: 1; transform: skewX(-12deg) scale(1); }
//         }

//         .anim-stripe-left { animation: slideInLeft 0.9s ease-out forwards; opacity: 0; }
//         .anim-stripe-right { animation: slideInRight 0.9s ease-out forwards; opacity: 0; }
//         .anim-slide-up { animation: slideInUp 0.7s ease-out forwards; opacity: 0; }
//         .anim-pop { animation: popIn 0.6s ease-out forwards; opacity: 0; }

//         .delay-0 { animation-delay: 0ms; }
//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//         .delay-300 { animation-delay: 300ms; }
//         .delay-400 { animation-delay: 400ms; }
//         .delay-600 { animation-delay: 600ms; }
//       `}</style>

//       {/* Banner Container */}
//       <div className="relative w-full max-w-[1000px] h-full bg-[#2a1b85] overflow-hidden shadow-xl rounded-lg flex items-center">

//         {/* LEFT DECOR STRIPES */}
//         <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none">
//           <div className="absolute -left-10 bottom-0 w-20 h-[140%] bg-pink-400 origin-bottom-left anim-stripe-left delay-0"></div>
//           <div className="absolute left-6 bottom-0 w-14 h-[140%] bg-blue-600 origin-bottom-left anim-stripe-left delay-100"></div>
//         </div>

//         {/* RIGHT DECOR STRIPES */}
//         <div className="absolute top-0 right-0 h-full w-full overflow-hidden pointer-events-none">
//           <div className="absolute -right-10 top-0 w-24 h-[140%] bg-pink-300 origin-top-right anim-stripe-right delay-0"></div>
//           <div className="absolute right-10 top-0 w-14 h-[140%] bg-indigo-900 origin-top-right anim-stripe-right delay-100"></div>
//         </div>

//         {/* MAIN CONTENT */}
//         <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-10">

//           {/* LEFT IMAGE */}
//           <div className="hidden md:block w-1/4 h-full relative">
//             <div className="absolute bottom-0 left-2 w-full h-[70%] flex items-end anim-pop delay-300">
//               <img
//                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
//                 alt="Students studying"
//                 className="object-contain h-full w-auto drop-shadow-xl"
//               />
//             </div>
//           </div>

//           {/* CENTER TEXT BOX */}
//           <div className="flex-1 flex flex-col items-center justify-center relative">
            
//             <div className="relative bg-white py-4 px-8 transform -skew-x-12 shadow-lg w-full max-w-xl anim-pop delay-400 hover:scale-105 transition duration-300">
//               <div className="transform skew-x-12 text-center">
//                 <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c1e96]">
//                   Exam Preparation
//                 </h1>
                
//                 <div className="mt-1 flex items-center justify-center gap-2 text-[#0f172a] font-bold text-lg md:text-xl">
//                   <span>B.Sc.CSIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BIT</span>
//                   <span className="text-pink-500">,</span>
//                   <span>BCA</span>
//                 </div>
//               </div>
//             </div>

//             {/* BOTTOM SMALL TEXT */}
//             <div className="absolute -bottom-5 md:-bottom-7 left-0 right-0 text-center anim-slide-up delay-600">
//               <p className="text-white text-sm md:text-base font-medium">
//                 www.Prajwalgautam7223@gmail.com
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SMALL MOCK CARD */}
//           <div className="hidden md:flex w-1/4 h-full items-center justify-end relative anim-pop delay-400">
//             <div className="relative w-48 h-36 bg-white rounded-xl shadow-xl border-4 border-gray-200 p-2 transform rotate-[-5deg] hover:rotate-0 transition duration-300 cursor-pointer">

//               <div className="w-full h-full bg-blue-50 rounded overflow-hidden">
//                 <div className="h-5 bg-blue-200 w-full flex items-center px-2 space-x-1">
//                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
//                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                 </div>

//                 <div className="p-2 grid grid-cols-2 gap-2 h-full">
//                   <div className="bg-blue-200 h-10 rounded animate-pulse"></div>
//                   <div className="bg-pink-200 h-10 rounded animate-pulse delay-75"></div>
//                   <div className="col-span-2 bg-indigo-200 h-5 rounded mt-1 animate-pulse delay-150"></div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-gray-300 rounded-b-lg"></div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerTop;







import React from "react";

const BannerTop = () => {
  return (
    <div className="h-[160px] md:h-[215px] lg:h-[250px] bg-gray-100 flex items-center justify-center p-2 font-sans">

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: skewX(-10deg) scale(0.88); }
          to { opacity: 1; transform: skewX(-10deg) scale(1); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideSide {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .anim-pop { animation: popIn 0.6s ease-out forwards; opacity: 0; }
        .anim-up { animation: slideInUp 0.7s ease-out forwards; opacity: 0; }
        .anim-side { animation: slideSide 0.7s ease-out forwards; opacity: 0; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>

      {/* MAIN BANNER BOX */}
      <div className="relative w-full max-w-[1050px] h-full bg-[#1e1673] rounded-lg shadow-xl overflow-hidden flex items-center px-4">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-[22%] h-full items-end justify-center anim-side delay-200">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
            alt="students"
            className="h-[78%] object-contain drop-shadow-xl"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="flex-1 h-full flex flex-col items-center justify-center relative">

          <div className="bg-white px-8 py-4 -skew-x-12 shadow-lg anim-pop delay-300 w-full max-w-xl hover:scale-[1.04] transition">
            <div className="skew-x-12 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c1e96]">
                Exam Preparation
              </h1>
              <p className="mt-1 text-lg md:text-xl font-bold text-gray-900">
                B.Sc.CSIT <span className="text-pink-500">,</span> BIT
                <span className="text-pink-500">,</span> BCA
              </p>
            </div>
          </div>

          {/* Small bottom text */}
          <p className="text-white text-sm md:text-base mt-1 anim-up delay-400">
            www.Prajwalgautam.xyz
          </p>
        </div>

        {/* RIGHT SMALL MOCKCARD */}
        <div className="hidden md:flex w-[22%] justify-end anim-side delay-300">
          <div className="relative w-40 h-32 bg-white rounded-xl shadow-xl border-4 border-gray-200 p-2 transform rotate-[-4deg] hover:rotate-0 transition">
            <div className="w-full h-full bg-blue-50 rounded overflow-hidden">
              <div className="h-4 bg-blue-200 w-full flex items-center px-2 space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              </div>
              <div className="p-2 grid grid-cols-2 gap-1 h-full">
                <div className="bg-blue-200 h-8 rounded animate-pulse"></div>
                <div className="bg-pink-200 h-8 rounded animate-pulse"></div>
                <div className="col-span-2 bg-indigo-200 h-4 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BannerTop;
