// import React from 'react';
// import { ClockIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
// import { StarIcon } from '@heroicons/react/24/solid';
// import TestArea from './TestArea.jsx';

// // --- IMAGE IMPORTS ---
// // Background image for the card header (as requested)
// const CARD_HEADER_BG_IMAGE_URL = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// // Instructor avatar (using a placeholder from the previous example, which acts as a 'logo' for the instructor)
// const INSTRUCTOR_AVATAR_URL = "https://via.placeholder.com/40x40/333333/ffffff?text=GT";


// const TestSetCard = ({ data }) => {
//   const { title, docs, time, students, instructor, rating, isFree } = data;

//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      
//       {/* --- Card Header Image Section --- */}
//       {/* This section now includes the background image with an overlay effect */}
//       <div className="relative h-44 bg-gradient-to-r from-orange-400 to-purple-600 flex items-center justify-center">
//         {/* Background Image Overlay */}
//         {/* The requested background image applied here.
//             It covers the area, is subtle (opacity-20), and blends with the gradient. */}
//         <img 
//           src={CARD_HEADER_BG_IMAGE_URL} 
//           alt="Abstract background" 
//           className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay z-0" 
//         />

//         {/* The Center "LIVE" box */}
//         <div className="bg-white rounded-xl px-7 py-2 shadow-sm z-10">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 text-3xl font-extrabold uppercase tracking-wider">
//             LIVE
//             </span>
//         </div>

//         {/* Free Badge */}
//         {isFree && (
//           <div className="absolute bottom-0 right-0 bg-blueBadge text-white px-8 py-1.5 rounded-tl-3xl font-semibold text-sm z-20">
//             Free
//           </div>
//         )}
//       </div>


//       {/* --- Card Body --- */}
//       <div className="p-5 flex-grow flex flex-col justify-between">
//         <div>
//             {/* Tag */}
//             <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
//             Live Exam
//             </span>
            
//             {/* Title */}
//             <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2">
//             {title}
//             </h3>

//             {/* Details Row (Docs, Time, Students) */}
//             <div className="flex items-center space-x-4 text-slate-500 text-sm mb-6">
//             {docs && (
//                 <div className="flex items-center space-x-1">
//                 <DocumentTextIcon className="h-4 w-4" />
//                 <span>{docs}</span>
//                 </div>
//             )}
//             <div className="flex items-center space-x-1">
//                 <ClockIcon className="h-4 w-4" />
//                 <span>{time}</span>
//             </div>
//             <div className="flex items-center space-x-1">
//                 <UserGroupIcon className="h-4 w-4" />
//                 <span>{students}</span>
//             </div>
//             </div>
//         </div>

//         {/* --- Card Footer (Instructor & Rating) --- */}
//         <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//           <div className="flex items-center space-x-2">
//             {/* Instructor 'logo' image (avatar) */}
//             <img 
//               src={INSTRUCTOR_AVATAR_URL} 
//               alt={`${instructor} avatar`} 
//               className="h-8 w-8 rounded-full" 
//             />
//             <span className="text-slate-600 text-sm font-medium">{instructor}</span>
//           </div>
          
//           {rating && (
//              <div className="flex items-center text-orange-400 font-semibold text-sm">
//                 <StarIcon className="h-4 w-4 mr-1" />
//                 <span>({rating.toFixed(2)})</span>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TestSetCard;


import React from 'react';
import { ClockIcon, UserGroupIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom"; 
import TestArea from './TestArea.jsx';

// --- IMAGE IMPORTS ---
const CARD_HEADER_BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop";
const INSTRUCTOR_AVATAR_URL =
  "https://via.placeholder.com/40x40/333333/ffffff?text=GT";

const TestSetCard = ({ data }) => {
  const navigate = useNavigate();

  const { id, title, docs, time, students, instructor, rating, isFree } = data;

  return (
    <div
      onClick={() => navigate(`/test/${id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* --- Card Header Image Section --- */}
      <div className="relative h-44 bg-gradient-to-r from-orange-400 to-purple-600 flex items-center justify-center">
        <img
          src={CARD_HEADER_BG_IMAGE_URL}
          alt="Abstract background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay z-0"
        />

        <div className="bg-white rounded-xl px-7 py-2 shadow-sm z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 text-3xl font-extrabold uppercase tracking-wider">
            LIVE
          </span>
        </div>

        {isFree && (
          <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-8 py-1.5 rounded-tl-3xl font-semibold text-sm z-20">
            Free
          </div>
        )}
      </div>

      {/* --- Card Body --- */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
            Live Exam
          </span>

          <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center space-x-4 text-slate-500 text-sm mb-6">
            {docs && (
              <div className="flex items-center space-x-1">
                <DocumentTextIcon className="h-4 w-4" />
                <span>{docs}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <UserGroupIcon className="h-4 w-4" />
              <span>{students}</span>
            </div>
          </div>
        </div>

        {/* --- Card Footer --- */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-2">
            <img
              src={INSTRUCTOR_AVATAR_URL}
              alt={`${instructor} avatar`}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-slate-600 text-sm font-medium">{instructor}</span>
          </div>

          {rating && (
            <div className="flex items-center text-orange-400 font-semibold text-sm">
              <StarIcon className="h-4 w-4 mr-1" />
              <span>({rating.toFixed(2)})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestSetCard;
