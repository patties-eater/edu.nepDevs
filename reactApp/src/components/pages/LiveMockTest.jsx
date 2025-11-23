// import { useParams } from "react-router-dom";
// import TestSetCard from "../modules/TestSetCard";

// function LiveMockTest() {
//   const { testType } = useParams();

//   return (
//     <div>
//       <h1 className="text-3xl font-bold p-6">
//         Live Mock Test: {testType.toUpperCase()}
//       </h1>

//       <TestSetCard testType={testType} />
//     </div>
//   );
// }

// export default LiveMockTest;
import TestSetCard from "../modules/TestSetCard";
import { useParams } from "react-router-dom";

// Mock data for different tests
const testData = {
  BCA: [
    { title: "BCA Mock 1", docs: "5", time: "60 mins", students: 100, instructor: "GT", rating: 4.5, isFree: true },
    { title: "BCA Mock 2", docs: "6", time: "90 mins", students: 80, instructor: "GT", rating: 4.7, isFree: false },
  ],
  BIT: [
    { title: "BIT Mock 1", docs: "4", time: "60 mins", students: 120, instructor: "GT", rating: 4.6, isFree: true },
  ],
  CSIT: [
    { title: "CSIT Mock 1", docs: "8", time: "120 mins", students: 90, instructor: "GT", rating: 4.8, isFree: true },
  ],
  BBB: [
    { title: "BBB Mock 1", docs: "3", time: "30 mins", students: 50, instructor: "GT", rating: 4.2, isFree: true },
  ],
};

function LiveMockTest() {
  const { testType } = useParams();

  // Grab the correct data array based on testType, fallback to empty array
  const cards = testData[testType] || [];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((data, index) => (
        <TestSetCard key={index} data={data} />
      ))}
      {cards.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">
          No tests found for "{testType}"
        </p>
      )}
    </div>
  );
}

export default LiveMockTest;
