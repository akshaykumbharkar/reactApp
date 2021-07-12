/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from "react-router-dom";

export function SearchCake(props) {
  const [cake, setCake] = useState([]);

  let query = queryString.parse(props.location.search);
  console.log(props.match.params.id, "query is", props);

  useEffect(() => {
    console.log("qery changed", query);
    let apiurl =
      process.env.REACT_APP_BASE_API_URL + "/cake/" + props.match.params.id;
    axios
      .get(apiurl)
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          setCake(response.data !== null && response.data.data);
        } else {
          setCake("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [query.q]);

  return (
    <div class="container">
      {console.log("cake>>>>>>>>>>>>>>>>>>>>>>>", cake)}
      {cake == "" && <div>No cake found</div>}
      {cake !== "" && (
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img
                      src={cake.image}
                      style={{ width: 350 + "px", height: 350 + "px" }}
                    />
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3 class="product-title">
                  <Link to={`/cake/${cake._id}`}>{cake.name}</Link>
                </h3>
                <p class="product-description">{cake.description}</p>
                <h4 class="price">{cake.price} ₹</h4>
                <div class="action">
                  <button class="add-to-cart btn btn-info" type="button">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchCake;
