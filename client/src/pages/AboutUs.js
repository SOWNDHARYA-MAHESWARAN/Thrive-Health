import React from "react";
import Intro from "../components/Intro";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Intro
        title={"Learn More About Us | Thrive health care"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/biography.png"} />
    </>
  );
};

export default AboutUs;
