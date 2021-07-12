import "./App.css";
import SearchCake from "./SearchCake";
import Home from "./Home";
import Search from "./Search";
import Login from "./Login";
import SignUp from "./Signup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/search" exact component={Search} />
          <Route path="/cake/:id" exact component={SearchCake} />
          <Route path="**">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
