import heroGirl from "../../assets/profile-pic.png";

function Hero() {
  return (
    <div className="w-full bg-[#f8faff] py-20 px-10 flex flex-col md:flex-row items-center justify-between">

      {/* Left Side */}
      <div className="max-w-xl">
        <p className="text-blue-600 font-semibold mb-2">
          100% Satisfaction Guarantee
        </p>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Best <span className="text-blue-600">Learning Platform</span> <br />
          For Entrance <br /> Preparation
        </h1>

        <p className="text-gray-600 mt-4">
          Get guided by industry experts and elevate your knowledge to
          new heights.
        </p>

        <div className="flex items-center gap-6 mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Explore Courses
          </button>

          <div className="text-gray-800 font-semibold">
            📞 9818313694
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-8 md:mt-0">
        <img src={heroGirl} alt="Student" className="w-[350px]" />
      </div>
    </div>
  );
}

export default Hero;
