import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import axios from "axios";
import API from "./Api";
let cakesdata = [];

function CakeList(props) {
  // const [search, setSearchValue] = useState("");
  const [cakeData, setCakeData] = useState(cakesdata);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(API.allCakes)
        .then(function (response) {
          setCakeData(response.data.data);
          cakesdata = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {cakeData.map((each, index) => {
          return <Cards data={each} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CakeList;
