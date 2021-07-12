/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import queryString from "query-string";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Search(props) {
  const [cakes, setCakes] = useState([]);
  let query = queryString.parse(props.location.search);
  console.log("query is", props);

  useEffect(() => {
    console.log("qery changed", query);
    let apiurl =
      process.env.REACT_APP_BASE_API_URL + "/searchcakes?q=" + query.q;
    axios
      .get(
        "https://apifromashu.herokuapp.com/api/searchcakes?q=Chocolate%20Cake"
      )
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          alert(response.data.message);
        } else {
          setCakes(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query.q]);

  return (
    <div className="container">
      Search page . Search for these cakes {props.searchquery}
      {cakes.length > 0 &&
        cakes.map((res) => {
          return (
            <div
              style={{ marginTop: 20 + "px", marginBottom: 20 + "px" }}
              className="col-12 col-md-4 col-lg-4"
            >
              <div className="card">
                <img
                  className="card-img-top"
                  style={{ width: 350 + "px", height: 350 + "px" }}
                  src={res.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {/* <a href="#" title="View Product">{res.name}</a> */}
                    <Link to={`/cake/${res._id}`}>{res.name}</Link>
                  </h4>
                  <p className="card-text">{res.description}</p>
                  <div className="row">
                    <div className="col">
                      <p className="btn btn-danger btn-block">{res.price} ₹</p>
                    </div>
                    <div className="col">
                      <a href="#" className="btn btn-success btn-block">
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Search;
