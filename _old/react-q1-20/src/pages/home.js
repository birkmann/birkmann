import React from "react";
import Header from "../components/header/header";
import IntroHome from "../components/introHome/introHome";
import Teaser from "../components/teaser/teaser";

function HomePage() {
  document.title = "Birkmann Design | Oberallgäu Werbeagentur | Sonthofen ";
  document.body.classList.add("home");
  return (
    <div>
      <Header />
      <IntroHome />
      <Teaser />
    </div>
  );
}

export default HomePage;
