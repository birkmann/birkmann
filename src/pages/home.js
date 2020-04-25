import React from "react";
import Header from "../components/header/header";
import IntroHome from "../components/introHome/introHome";
import Teaser from "../components/teaser/teaser";

function HomePage() {
  return (
    <div>
      <Header />
      <IntroHome />
      <Teaser />
    </div>
  );
}

export default HomePage;
