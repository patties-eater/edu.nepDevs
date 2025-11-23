// import React, { useState } from 'react';
// import React from "react";
// import { useParams } from "react-router-dom";
// // Main TestArea Component
// const TestArea = () => {
//     const { id } = useParams();
//   // State to simulate question data and selection
//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [questionStates, setQuestionStates] = useState({
//     1: 'unanswered', // blue
//     2: 'unattempted', // default white
//     3: 'unattempted',
//     4: 'unattempted',
//     5: 'unattempted',
//     6: 'answered', // green (selectedOption1 is null, but we'll show state)
//     7: 'unattempted',
//     8: 'unattempted',
//     9: 'unattempted',
//     10: 'answered', // green
//   });

//   // Helper function to get Tailwind classes for navigation buttons
//   const getButtonClass = (state) => {
//     switch (state) {
//       case 'answered':
//         return 'bg-emerald-500 text-white hover:bg-emerald-600';
//       case 'unanswered':
//         return 'bg-blue-500 text-white hover:bg-blue-600';
//       case 'unattempted':
//       default:
//         return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300';
//     }
//   };

//   // Helper function to render the math formulas as text placeholders
//   const MathDisplay = ({ children }) => (
//     // Note: The font-serif and text-lg are used to visually distinguish math
//     // In a real application, you would use a library like KaTeX or MathJax here.
//     <div className="font-serif text-lg py-2">
//       {children}
//     </div>
//   );

//   // Component for a single question option
//   const Option = ({ index, label, isSelected, onSelect }) => {
//     const baseClasses = "flex items-center p-4 my-2 border rounded-xl cursor-pointer transition duration-150 shadow-sm";
//     const selectedClasses = "border-emerald-500 ring-2 ring-emerald-300 bg-emerald-50 bg-opacity-80";
//     const unselectedClasses = "border-gray-200 hover:border-gray-400 bg-white";

//     return (
//       <div
//         className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
//         onClick={onSelect}
//       >
//         <div className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full mr-4 transition duration-150 ${isSelected ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
//           {label}
//         </div>
//         <div className="text-gray-900 text-md">
//           <MathDisplay>{index}</MathDisplay>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex font-[Inter]">
//       {/* Main Content Area (Left) */}
//       <div className="flex-1 p-6 lg:p-10">
//         <div className="max-w-4xl mx-auto">
//           {/* Timer/Header Bar */}
//           <div className="bg-amber-100 border border-amber-300 text-amber-800 p-3 rounded-xl mb-6 shadow-md flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
//             </svg>
//             <span className="font-bold tracking-wider">TIME LEFT - 09:15 MIN</span>
//           </div>

//           {/* Question 1 Section */}
//           <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
//             <p className="text-gray-700 mb-4">
//               The area bounded by $y = 2 - \lvert z - x \rvert$ and $y = \frac{1}{\lvert x \rvert}$ is
//             </p>
//             <div className="space-y-2">
//               <Option
//                 label="A"
//                 index="\frac{4 - 3\ln3}{2}"
//                 isSelected={selectedOption1 === 'A'}
//                 onSelect={() => setSelectedOption1('A')}
//               />
//               <Option
//                 label="B"
//                 index="\frac{19}{8} - 3\ln2"
//                 isSelected={selectedOption1 === 'B'}
//                 onSelect={() => setSelectedOption1('B')}
//               />
//               <Option
//                 label="C"
//                 index="\frac{3}{2} - \ln3"
//                 isSelected={selectedOption1 === 'C'}
//                 onSelect={() => setSelectedOption1('C')}
//               />
//               <Option
//                 label="D"
//                 index="\frac{1}{2} - \ln3"
//                 isSelected={selectedOption1 === 'D'}
//                 onSelect={() => setSelectedOption1('D')}
//               />
//             </div>
//           </div>

//           {/* Question 10 Section */}
//           <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Question 10</h3>
//               <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
//                 1 / 0
//               </span>
//             </div>
//             <p className="text-gray-700 mb-4">
//               Area bounded by $y = f^{-1}(x)$ and tangent and normal drawn to it at the points with
//               abscissae $\pi$ and $2\pi$, where $f(x) = \sin x - x$ is
//             </p>
//             <div className="space-y-2">
//               <Option
//                 label="A"
//                 index="\frac{\pi^2}{2} - 1"
//                 isSelected={selectedOption2 === 'A'}
//                 onSelect={() => setSelectedOption2('A')}
//               />
//               <Option
//                 label="B"
//                 index="\frac{\pi^2}{2}"
//                 isSelected={selectedOption2 === 'B'}
//                 onSelect={() => setSelectedOption2('B')}
//               />
//               <Option
//                 label="C"
//                 index="\frac{\pi^2}{2} - 4"
//                 isSelected={selectedOption2 === 'C'}
//                 onSelect={() => setSelectedOption2('C')}
//               />
//               <Option
//                 label="D"
//                 index="\frac{\pi^2}{2}"
//                 isSelected={selectedOption2 === 'D'}
//                 onSelect={() => setSelectedOption2('D')}
//               />
//             </div>
//           </div>

//           {/* Bottom Submit Button */}
//           <div className="text-center">
//             <button className="w-full sm:w-auto px-12 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 transition duration-150 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-emerald-300">
//               Submit Test
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sidebar (Right) */}
//       <div className="w-full lg:w-96 bg-white p-6 border-l border-gray-200 shadow-xl lg:shadow-none">
//         {/* User Profile */}
//         <div className="flex items-center pb-6 border-b border-gray-200 mb-6">
//           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <div className="font-medium text-gray-800">User</div>
//         </div>

//         {/* Question Analysis */}
//         <div className="mb-8">
//           <h4 className="text-lg font-semibold text-gray-800 mb-4">Question Analysis</h4>
//           <div className="flex space-x-4 text-sm font-medium">
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
//               <span>Answered - 2</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
//               <span>Unanswered - 1</span>
//             </div>
//             <div className="flex items-center">
//               <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
//               <span>Unattempted - 7</span>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Grid */}
//         <div className="grid grid-cols-5 gap-3 mb-8">
//           {[...Array(10)].map((_, i) => {
//             const num = i + 1;
//             const state = num === 1 ? (selectedOption1 ? 'answered' : 'unanswered') :
//                           num === 10 ? (selectedOption2 ? 'answered' : 'unanswered') :
//                           questionStates[num];
//             return (
//               <button
//                 key={num}
//                 className={`w-full h-10 flex items-center justify-center font-bold rounded-lg transition duration-150 shadow-md ${getButtonClass(state)}`}
//                 title={`Question ${num} is ${state}`}
//                 // In a real app, this would scroll to the question
//               >
//                 {num}
//               </button>
//             );
//           })}
//         </div>

//         {/* Sidebar Submit Button */}
//         <button className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 transition duration-150 focus:outline-none focus:ring-4 focus:ring-emerald-300">
//           Submit Test
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestArea;


import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TestArea = () => {
  const { id } = useParams();

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const [questionStates, setQuestionStates] = useState({
    1: "unanswered",
    2: "unattempted",
    3: "unattempted",
    4: "unattempted",
    5: "unattempted",
    6: "answered",
    7: "unattempted",
    8: "unattempted",
    9: "unattempted",
    10: "answered",
  });

  const getButtonClass = (state) => {
    switch (state) {
      case "answered":
        return "bg-emerald-500 text-white hover:bg-emerald-600";
      case "unanswered":
        return "bg-blue-500 text-white hover:bg-blue-600";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300";
    }
  };

  const MathDisplay = ({ children }) => (
    <div className="font-serif text-lg py-2">{children}</div>
  );

  const Option = ({ index, label, isSelected, onSelect }) => {
    const baseClasses =
      "flex items-center p-4 my-2 border rounded-xl cursor-pointer transition duration-150 shadow-sm";
    const selectedClasses =
      "border-emerald-500 ring-2 ring-emerald-300 bg-emerald-50 bg-opacity-80";
    const unselectedClasses =
      "border-gray-200 hover:border-gray-400 bg-white";

    return (
      <div
        className={`${baseClasses} ${
          isSelected ? selectedClasses : unselectedClasses
        }`}
        onClick={onSelect}
      >
        <div
          className={`w-8 h-8 flex items-center justify-center font-bold text-sm rounded-full mr-4 transition duration-150 ${
            isSelected ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {label}
        </div>
        <div className="text-gray-900 text-md">
          <MathDisplay>{index}</MathDisplay>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-[Inter]">
      
      {/* LEFT SECTION */}
      <div className="flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">

          {/* TIMER */}
          <div className="bg-amber-100 border border-amber-300 text-amber-800 p-3 rounded-xl mb-6 shadow-md flex items-center justify-center">
            <span className="font-bold tracking-wider">
              TIME LEFT - 09:15 MIN (Test ID: {id})
            </span>
          </div>

          {/* QUESTION 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <p className="text-gray-700 mb-4">
              The area bounded by $y = 2 - |z - x|$ …
            </p>

            <Option
              label="A"
              index="\frac{4 - 3\ln3}{2}"
              isSelected={selectedOption1 === "A"}
              onSelect={() => setSelectedOption1("A")}
            />

            <Option
              label="B"
              index="\frac{19}{8} - 3\ln2"
              isSelected={selectedOption1 === "B"}
              onSelect={() => setSelectedOption1("B")}
            />

            <Option
              label="C"
              index="\frac{3}{2} - \ln3"
              isSelected={selectedOption1 === "C"}
              onSelect={() => setSelectedOption1("C")}
            />

            <Option
              label="D"
              index="\frac{1}{2} - \ln3"
              isSelected={selectedOption1 === "D"}
              onSelect={() => setSelectedOption1("D")}
            />
          </div>

          {/* QUESTION 10 */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800">Question 10</h3>

            <p className="text-gray-700 mb-4">
              Area bounded by $y = f^{-1}(x)$ …
            </p>

            <Option
              label="A"
              index="\frac{\pi^2}{2} - 1"
              isSelected={selectedOption2 === "A"}
              onSelect={() => setSelectedOption2("A")}
            />

            <Option
              label="B"
              index="\frac{\pi^2}{2}"
              isSelected={selectedOption2 === "B"}
              onSelect={() => setSelectedOption2("B")}
            />

            <Option
              label="C"
              index="\frac{\pi^2}{2} - 4"
              isSelected={selectedOption2 === "C"}
              onSelect={() => setSelectedOption2("C")}
            />

            <Option
              label="D"
              index="\frac{\pi^2}{2}"
              isSelected={selectedOption2 === "D"}
              onSelect={() => setSelectedOption2("D")}
            />
          </div>

          {/* Submit */}
          <button className="w-full sm:w-auto px-12 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600 transition">
            Submit Test
          </button>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-96 bg-white p-6 border-l border-gray-200 shadow-xl">
        
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Question Analysis
        </h4>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {[...Array(10)].map((_, i) => {
            const num = i + 1;

            const state =
              num === 1
                ? selectedOption1
                  ? "answered"
                  : "unanswered"
                : num === 10
                ? selectedOption2
                  ? "answered"
                  : "unanswered"
                : questionStates[num];

            return (
              <button
                key={num}
                className={`w-full h-10 flex items-center justify-center rounded-lg font-bold shadow ${getButtonClass(
                  state
                )}`}
              >
                {num}
              </button>
            );
          })}
        </div>

        <button className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-600">
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default TestArea;
