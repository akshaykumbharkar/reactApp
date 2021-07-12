import React, { useState } from "react";
import Cake2 from "./Cake2";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

function Home(props) {
  const [searchString, setSearchString] = useState("");

  let navSearch = function (res) {
    setSearchString(res);
  };

  return (
    <div>
      <Navbar logo={"images/logo.png"} fun={navSearch} />
      <Carousel />
      <Cake2 />
      {/* <Search  res={searchString}/> */}
    </div>
  );
}

export default Home;
