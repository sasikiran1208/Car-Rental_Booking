import React from "react";
import Hero from "../components/hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial"; // ← add this

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
    </>
  );
};

export default Home;
