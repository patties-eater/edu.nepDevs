// // import Nav from "../modules/Nav";
// // import Banner from "../modules/Banner";
// // import Hero from "../modules/Hero";
// // import Categories from "../modules/Categories";
// // import Footer from "../modules/Footer";
// // import YouTubeCard from "../modules/YouTubeCard";

// // function Home() {
// //   const myVideo = "https://youtu.be/MZ9x3n9pSaE?si=tT3KQbFHLF6ORAyq";

// //   return (
// //     <>
// //       {/* Navigation Bar */}
// //       <Nav />

// //       {/* Banner Section */}
// //       <Banner />

// //       {/* Hero Section */}
// //       <Hero />

// //       {/* Categories Section */}
// //       <Categories />

// //       {/* Featured Courses (YouTube Section) */}
// //       <section className="bg-gray-100 py-16 px-6">
// //         <h1 className="text-3xl font-bold text-center mb-10">
// //           Featured Courses
// //         </h1>

// //         <div className="flex justify-center">
// //           <YouTubeCard url={myVideo} />
// //         </div>
// //       </section>

// //       {/* Footer Section */}
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Home;





// import Nav from "../modules/Nav";
// import Banner from "../modules/Banner";
// import Hero from "../modules/Hero";
// import Categories from "../modules/Categories";
// import Footer from "../modules/Footer";
// import YouTubeCard from "../modules/YouTubeCard";

// function Home() {
//   const videos = [
//     "https://youtu.be/MZ9x3n9pSaE?si=tT3KQbFHLF6ORAyq",
//     "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     "https://youtu.be/3fumBcKC6RE",
//     "https://youtu.be/ysz5S6PUM-U",
//   ];

//   return (
//     <>
//       <Nav />
//       <Banner />
//       <Hero />
//       <Categories />

//       {/* FEATURED VIDEO SECTION */}
//       <section className="bg-gray-100 py-16 px-6">
//         <h1 className="text-3xl font-bold text-center mb-10">
//           Featured Courses
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {videos.map((link, index) => (
//             <YouTubeCard key={index} url={link} />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Home;




import Nav from "../modules/Nav";
import Banner from "../modules/Banner";
import Hero from "../modules/Hero";
import Categories from "../modules/Categories";
import Footer from "../modules/Footer";
import YouTubeCard from "../modules/YoutubeCard";

import React, { useState } from "react";

// page( but home page is the suprimpages which will take both page annd pages modules) component other than pages modules will be here imported

import ContactUs from "./ContactUs";

function Home() {
  const allVideos = [
    "https://youtu.be/MZ9x3n9pSaE?si=tT3KQbFHLF6ORAyq",
    "https://youtu.be/Ram_A6hva88?si=TYVGBjz49DBeKVh4",
    "https://youtu.be/84VhTjJ12iw?si=P7OT5kA9Su-XBxXX",
    "https://youtu.be/T0ssHGPTvtI?si=lEZFDqlQZBS0kvSM",
    "https://youtu.be/lwKcTyIJWjs?si=isrDkIdf2a5ii7nq",
    "https://youtu.be/vEn31DjIN6E?si=2gToA3CyMYOHchSQ",
  ];

  const [showMore, setShowMore] = useState(false);

  // Show only 3 videos initially (PC view)
  const visibleVideos = showMore ? allVideos : allVideos.slice(0, 3);

  return (
    <>
      <Nav />
      <Banner />
      <Hero />
      <Categories />

      {/* FEATURED VIDEO SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <h1 className="text-3xl font-bold text-center mb-10">
          Featured Courses
        </h1>

        {/* RESPONSIVE GRID */}
        <div className="
          grid 
          grid-cols-1        /* 1 per row on phone */
          sm:grid-cols-2     /* 2 per row on tablets */
          lg:grid-cols-3     /* 3 per row on PC */
          gap-8              /* Spacing always responsive */
          auto-rows-auto
        ">
          {visibleVideos.map((link, index) => (
            <YouTubeCard key={index} url={link} />
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        <div className="flex justify-center mt-10">
          {allVideos.length > 3 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </section>

      <ContactUs />

      <Footer />
    </>
  );
}

export default Home;

