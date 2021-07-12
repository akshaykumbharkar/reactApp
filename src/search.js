import querystring from "query-string";
import { useEffect } from "react";

function Search(props) {
  let query = querystring.parse(props.location.search);
  console.log("query is: " + query);

  useEffect(() => {
    console.log("query is: " + query);
    let apiurl =
      process.env.REACT_APP_BASE_API_URL + "/searchcakes?q=" + query.q;
  }, [query.q]);

  return (
    <div className="container-fluid mt-3">
      <div>
        <p>Search string from app.js {props.searchquery}</p>
      </div>
    </div>
  );
}

export default Search;
