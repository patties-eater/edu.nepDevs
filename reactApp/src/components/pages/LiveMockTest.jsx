// // import { useParams } from "react-router-dom";
// // import TestSetCard from "../modules/TestSetCard";

// // function LiveMockTest() {
// //   const { testType } = useParams();

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold p-6">
// //         Live Mock Test: {testType.toUpperCase()}
// //       </h1>

// //       <TestSetCard testType={testType} />
// //     </div>
// //   );
// // }

// // export default LiveMockTest;
// import TestSetCard from "../modules/TestSetCard";
// import { useParams } from "react-router-dom";

// // Mock data for different tests
// const testData = {
//   BCA: [
//     { title: "BCA Mock 1", docs: "5", time: "60 mins", students: 100, instructor: "GT", rating: 4.5, isFree: true },
//     { title: "BCA Mock 2", docs: "6", time: "90 mins", students: 80, instructor: "GT", rating: 4.7, isFree: false },
//   ],
//   BIT: [
//     { title: "BIT Mock 1", docs: "4", time: "60 mins", students: 120, instructor: "GT", rating: 4.6, isFree: true },
//   ],
//   CSIT: [
//     { title: "CSIT Mock 1", docs: "8", time: "120 mins", students: 90, instructor: "GT", rating: 4.8, isFree: true },
//   ],
//   BBB: [
//     { title: "BBB Mock 1", docs: "3", time: "30 mins", students: 50, instructor: "GT", rating: 4.2, isFree: true },
//   ],
// };

// function LiveMockTest() {
//   const { testType } = useParams();

//   // Grab the correct data array based on testType, fallback to empty array
//   const cards = testData[testType] || [];

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {cards.map((data, index) => (
//         <TestSetCard key={index} data={data} />
//       ))}
//       {cards.length === 0 && (
//         <p className="text-center text-gray-500 col-span-full">
//           No tests found for "{testType}"
//         </p>
//       )}
//     </div>
//   );
// }

// export default LiveMockTest;
import React from "react";
import TestSetCard from "../modules/TestSetCard";
import { useParams } from "react-router-dom";

/**
 * Simple mock data for local dev.
 * Each entry MUST have an `id` that matches the testId you plan to use in DB.
 * When you move to real data, replace this with a fetch to your API.
 */
const testData = {
  BCA: [
    { id: "bca1", title: "BCA Mock 1", docs: "5", time: "60 mins", students: 100, instructor: "GT", rating: 4.5, isFree: true },
    { id: "bca2", title: "BCA Mock 2", docs: "6", time: "90 mins", students: 80, instructor: "GT", rating: 4.7, isFree: false },
  ],
  BIT: [
    { id: "bit1", title: "BIT Mock 1", docs: "4", time: "60 mins", students: 120, instructor: "GT", rating: 4.6, isFree: true },
  ],
  CSIT: [
    { id: "csit1", title: "CSIT Mock 1", docs: "8", time: "120 mins", students: 90, instructor: "GT", rating: 4.8, isFree: true },
  ],
  BBB: [
    { id: "bbb1", title: "BBB Mock 1", docs: "3", time: "30 mins", students: 50, instructor: "GT", rating: 4.2, isFree: true },
  ],
};

const LiveMockTest = () => {
  const { testType } = useParams();
  const cards = testData[testType] || [];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.length > 0 ? (
        cards.map((data) => <TestSetCard key={data.id} data={data} />)
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No tests found for <span className="font-semibold">"{testType}"</span>
          <p className="text-sm mt-2">Make sure testType in URL matches one of: BCA, BIT, CSIT, BBB</p>
        </div>
      )}
    </div>
  );
};

export default LiveMockTest;
