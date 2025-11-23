// import { Routes, Route } from "react-router-dom";
// import Home from "./components/pages/Home.jsx";
// import LiveMockTest from "./components/pages/LiveMockTest.jsx";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/live-mock-test/:testType" element={<LiveMockTest />} />
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import LiveMockTest from "./components/pages/LiveMockTest.jsx";
import TestArea from "./components/modules/TestArea.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/live-mock-test/:testType" element={<LiveMockTest />} />

      {/* NEW ROUTE */}
      <Route path="/test/:id" element={<TestArea />} />
    </Routes>
  );
}

export default App;
