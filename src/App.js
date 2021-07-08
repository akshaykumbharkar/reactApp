import "./App.css";
import Loader from "react-loader-spinner";
import Navbar from "./Navbar";
import { Carosel } from "./Carousel";
import Login from "./login";
import Search from "./search";
import Signup from "./Signup";
// import Cakedata from "./cakesdata";
// import { Cards } from "./Cards";

function App() {
  return (
    <div className="App">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <Navbar />
      <Carosel />
      <Signup />
      <Login />
      <Search />
    </div>
  );
}

export default App;
