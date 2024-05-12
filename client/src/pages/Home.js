import React from "react";
import Intro from "../components/Intro";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Intro
        title={"Welcome to Thrive Health | Your Trusted Healthcare Provider"}
        imageUrl={"/intro.png"}
      />
      <Biography imageUrl={"/biography.png"} />
      <MessageForm />
    </>
  );
};

export default Home;
