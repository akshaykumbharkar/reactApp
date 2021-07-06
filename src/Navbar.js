/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {true && (
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Login
            </button>
          )}
          {false && (
            <button className="btn btn-danger my-2 my-sm-0" type="submit">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
