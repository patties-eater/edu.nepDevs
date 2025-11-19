import cat from "../../assets/profile-pic.png";

function Categories() {
  const categories = [
    { name: "IOE", courses: 6 },
    { name: "BSc.CSIT", courses: 9 },
    { name: "CEE", courses: 7 },
    { name: "BIT", courses: 6 },
    { name: "BCA", courses: 8 },
    { name: "BSc", courses: 13 },
  ];

  return (
    <div className="py-20 px-10">
      <p className="text-blue-600 font-semibold">Unique online courses</p>
      <h2 className="text-3xl font-bold mt-2">
        Browse By <span className="text-blue-600">Categories</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {categories.map((item) => (
          <div
            key={item.name}
            className="border rounded-xl shadow-sm hover:shadow-md transition p-6 text-center cursor-pointer"
          >
            <img src={cat} className="w-14 mx-auto" />
            <h3 className="text-lg font-bold mt-4">{item.name}</h3>
            <p classname="text-gray-500 text-sm">
              {item.courses} Courses
            </p>
          </div>
        ))}
      </div>

      <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg">
        All Categories
      </button>
    </div>
  );
}

export default Categories;
