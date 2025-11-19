import Nav from "../modules/Nav";
import Banner from "../modules/Banner";
import Hero from "../modules/Hero";
import Categories from "../modules/Categories";
import Footer from "../modules/Footer";

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Nav />
      {/* Banner Section */}
      <Banner />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Home;
