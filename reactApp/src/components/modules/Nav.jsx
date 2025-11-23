// import profile from "../../assets/profile-pic.png";

// function Nav() {
//   return (
//     <nav className="bg-gray-800 p-4 text-white flex items-center">
//       <img
//         className="rounded-full w-10 h-10"
//         src={profile}
//         alt="Logo"
//       />
//     </nav>
//   );
// }

// export default Nav;









// import profile from "../../assets/profile-pic.png";
// import { useState } from "react";
// import { FaSearch, FaShoppingBag } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";

// function Nav() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
//       {/* LEFT: LOGO */}
//       <div className="flex items-center gap-3">
//         <img 
//           src={profile} 
//           alt="Logo" 
//           className="w-14 h-14 rounded-full object-cover"
//         />
//       </div>

//       {/* CENTER: NAV ITEMS */}
//       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//         <li className="hover:text-blue-600 cursor-pointer">Courses</li>

//         {/* Dropdown */}
//         <li 
//           className="relative hover:text-blue-600 cursor-pointer"
//           onMouseEnter={() => setOpen(true)}
//           onMouseLeave={() => setOpen(false)}
//         >
//           Entrance Exam ▾

//           {open && (
//             <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40">
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BBB</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BIT</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">CSIT</p>
//             </div>
//           )}
//         </li>

//         <li className="hover:text-blue-600 cursor-pointer"
//          onMouseEnter={() => setOpen(true)}
//           onMouseLeave={() => setOpen(false)}
//         >
//           Live Mock Test
//            {open && (
//             <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40">
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BBB</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BIT</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">CSIT</p>
//             </div>
//           )}
//         </li>
//         <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
//       </ul>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-4">

//         {/* Categories Button */}
//         <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50">
//           <IoGrid size={18} />
//           Categories
//         </button>

//         {/* Search */}
//         <FaSearch size={18} className="cursor-pointer text-gray-600" />

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <FaShoppingBag size={20} className="text-gray-700" />
//           <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
//             0
//           </span>
//         </div>

//         {/* Login */}
//         <button className="border px-4 py-2 rounded-md hover:bg-gray-50">
//           Log In
//         </button>

//         {/* Try For Free Button */}
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
//           Try For Free
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Nav;









// import { useNavigate } from "react-router-dom";

// import LiveMockTest from "../pages/LiveMockTest";
// import profile from "../../assets/profile-pic.png";
// import { useState } from "react";
// import { FaSearch, FaShoppingBag } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";

// function Nav() {
//   const [examOpen, setExamOpen] = useState(false);
//   const [mockOpen, setMockOpen] = useState(false);

//   return (
  
//     <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between relative">
//       {/* LEFT: LOGO */}
//       <div className="flex items-center gap-3">
//         <img 
//           src={profile} 
//           alt="Logo" 
//           className="w-14 h-14 rounded-full object-cover"
//         />
//       </div>

//       {/* CENTER: NAV ITEMS */}
//       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//         <li className="hover:text-blue-600 cursor-pointer">Home</li>
//         <li className="hover:text-blue-600 cursor-pointer">Courses</li>

//         {/* Entrance Exam Dropdown */}
//         <li
//           className="relative hover:text-blue-600 cursor-pointer"
//           onMouseEnter={() => setExamOpen(true)}
//           onMouseLeave={() => setExamOpen(false)}
//         >
//           Entrance Exam ▾

//           {examOpen && (
//             <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40 z-50">
//              <p 
//                 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
//                 onClick={() => navigate("/live-mock-test/bbb")}
//               >
//                 BBB
//               </p>

//               <p 
//                 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
//                 onClick={() => navigate("/live-mock-test/bit")}
//               >
//                 BIT
//               </p>

//               <p 
//                 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
//                 onClick={() => navigate("/live-mock-test/csit")}
//               >
//                 CSIT
//               </p>

//             </div>
//          )}
//         </li>

//         {/* Live Mock Test Dropdown */}
//         <li
//           className="relative hover:text-blue-600 cursor-pointer"
//           onMouseEnter={() => setMockOpen(true)}
//           onMouseLeave={() => setMockOpen(false)}
//         >
//           Live Mock Test ▾

//           {mockOpen && (
//             <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40 z-50">
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BBB</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">BIT</p>
//               <p className="hover:bg-gray-100 p-2 rounded-md cursor-pointer">CSIT</p>
//             </div>
//           )}
//         </li>

//         <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
//       </ul>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-4">
//         {/* Categories Button */}
//         <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50">
//           <IoGrid size={18} />
//           Categories
//         </button>

//         {/* Search */}
//         <FaSearch size={18} className="cursor-pointer text-gray-600" />

//         {/* Cart */}
//         <div className="relative cursor-pointer">
//           <FaShoppingBag size={20} className="text-gray-700" />
//           <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
//             0
//           </span>
//         </div>

//         {/* Login */}
//         <button className="border px-4 py-2 rounded-md hover:bg-gray-50">
//           Log In
//         </button>

//         {/* Try For Free Button */}
//         <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
//           Try For Free
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Nav;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile-pic.png";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

function Nav() {
  const [examOpen, setExamOpen] = useState(false);
  const [mockOpen, setMockOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Router hook

  // Function to navigate to dynamic test type
  const goToTest = (testType) => {
    navigate(`/live-mock-test/${testType}`);
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between relative">
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-3">
        <img
          src={profile}
          alt="Logo"
          className="w-14 h-14 rounded-full object-cover"
        />
      </div>

      {/* CENTER: NAV ITEMS */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Courses</li>

        {/* Entrance Exam Dropdown */}
        <li
          className="relative hover:text-blue-600 cursor-pointer"
          onMouseEnter={() => setExamOpen(true)}
          onMouseLeave={() => setExamOpen(false)}
        >
          Entrance Exam ▾

          {examOpen && (
            <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40 z-50">
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("BCA")}
              >
                BCA
              </p>
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("BIT")}
              >
                BIT
              </p>
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("CSIT")}
              >
                CSIT
              </p>
            </div>
          )}
        </li>

        {/* Live Mock Test Dropdown */}
        <li
          className="relative hover:text-blue-600 cursor-pointer"
          onMouseEnter={() => setMockOpen(true)}
          onMouseLeave={() => setMockOpen(false)}
        >
          Live Mock Test ▾

          {mockOpen && (
            <div className="absolute left-0 top-6 bg-white shadow-md rounded-md p-3 w-40 z-50">
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("BBB")}
              >
                BBB
              </p>
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("BIT")}
              >
                BIT
              </p>
              <p
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => goToTest("CSIT")}
              >
                CSIT
              </p>
            </div>
          )}
        </li>

        <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-50">
          <IoGrid size={18} />
          Categories
        </button>

        <FaSearch size={18} className="cursor-pointer text-gray-600" />

        <div className="relative cursor-pointer">
          <FaShoppingBag size={20} className="text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>

        <button className="border px-4 py-2 rounded-md hover:bg-gray-50">Log In</button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md">Try For Free</button>
      </div>
    </nav>
  );
}

export default Nav;
