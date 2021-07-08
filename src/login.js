import { useState } from "react";
import axios from "axios";
import API from "./Api";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  let user = {};
  var login = function () {
    console.log("user has entered", user);
    let apiUrl = API.login;
    axios({
      url: apiUrl,
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("signup successfull");
      },
      (error) => {
        setErrorMessage("Failure");
      }
    );
  };

  var forgotPassword = function () {
    console.log("user has entered", user);
    let apiUrl = API.forgotPassword;
    axios({
      url: apiUrl,
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("password reset");
      },
      (error) => {
        setErrorMessage("Failure");
      }
    );
  };
  var handleEmail = function (e) {
    user.email = e.target.value;
  };
  var handlePassword = function (e) {
    user.password = e.target.value;
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        onChange={handleEmail}
        className="form-control"
        type="email"
        name=""
        placeholder="Enter email"
      />
      <input
        onChange={handlePassword}
        className="form-control"
        type="password"
        name=""
        placeholder="Enter password"
      />
      <button className="btn btn-primary" onClick={login} id="login">
        Login
      </button>
      <button
        className="btn btn-primary"
        onClick={forgotPassword}
        id="forgotPassword"
      >
        Forgot Password
      </button>
      {errorMessage}
    </div>
  );
}

export default Login;
