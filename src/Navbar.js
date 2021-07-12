/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  const [search, setSearch] = useState({});
  let logostyle = { width: 35 + "px", height: 35 + "px" };
  let buttonstyle = { marginRight: 35 + "px" };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let searchClick = () => {
    props.history.push(`/search?q=${search}`);
  };

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Cake Shop
        </a>
        <Link to="/">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              onChange={handleSearch}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={searchClick}
              style={buttonstyle}
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
          </form>
          <div className="form-inline my-2 my-lg-0 ">
            <Link to="/login">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
