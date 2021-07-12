/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let cakesdata = [];

export function Cake2(props) {
  const [cakes, setCakes] = useState(cakesdata);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://apifromashu.herokuapp.com/api/allcakes")
        .then(function (response) {
          console.log(response.data.data);
          setCakes(response.data.data);
          cakesdata = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {cakes.length === 0 && (
          <div>
            <p>No Cake found</p>
          </div>
        )}
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
                      <Link to={`/cake/${res.cakeid}`}>{res.name}</Link>
                    </h4>
                    <p className="card-text">{res.description}</p>
                    <div className="row">
                      <div className="col">
                        <p className="btn btn-danger btn-block">
                          {res.price} ₹
                        </p>
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
    </div>
  );
}

export default Cake2;
