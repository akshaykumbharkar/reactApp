import Navbar from "./Navbar";
import { Carosel } from "./Carousel";
import { Cards } from "./Cards";
import Login from "./login";
import "./App.css";
import Signup from "./Signup";

function App() {
  let cakes = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAdfqfc7FJ6JeGcDGmsU7F3BvIDOmazTVcI3OWXtbJgJLkLBMG-O76AoOR6ztx8XaYZ32_eaxZM_4VqYKhBQUThHen8iwz2zbQxzUTlq5F&usqp=CAc",
      name: "black forest",
      price: "300",
    },
    {
      image:
        "https://i7.fnp.com/images/pr/l/v20210326105718/chocolate-cream-cake_1.jpg",
      name: "Chocolate",
      price: "400",
    },
  ];
  return (
    <div>
      <Navbar />
      <Carosel />
      <div className="row">
        <Signup />
        <Login />
        {cakes.map((cake) => {
          return <Cards data={cake} />;
        })}
        {/* <Cards data={cake2} /> */}
        {/* <div class="col-sm">
          <Cards />
        </div>
        <div class="col-sm">
          <Cards />
        </div>
        <div class="col-sm">
          <Cards />
        </div> */}
      </div>
    </div>
  );
}

export default App;
