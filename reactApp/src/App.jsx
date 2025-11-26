// // import { Routes, Route } from "react-router-dom";
// // import Home from "./components/pages/Home.jsx";
// // import LiveMockTest from "./components/pages/LiveMockTest.jsx";

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/live-mock-test/:testType" element={<LiveMockTest />} />
// //     </Routes>
// //   );
// // }

// // export default App;


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



// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/users")
//       .then(res => res.json())
//       .then(data => setUsers(data.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>

//       {users.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         users.map((user) => (
//           <div key={user._id}>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Users;
