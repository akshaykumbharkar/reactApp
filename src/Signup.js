import React, { useState } from "react";
import axios from "axios";

export function Signup() {
  const [user, setUser] = useState({});

  const handleEmailChange = function (e) {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = function (e) {
    setUser({ ...user, password: e.target.value });
  };

  const handleNameChange = function (e) {
    setUser({ ...user, name: e.target.value });
  };

  var handleSignup = function () {
    console.log("users>>>>>>>>>>>>>>>", user);
    axios
      .post("https://apifromashu.herokuapp.com/api/register", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="login">
      <div className="container">
        <h3 className="text-center text-white pt-5">Signup form</h3>
        <form>
          <input
            type="text"
            name="text"
            placeholder="Name"
            onChange={handleNameChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={handleSignup}>
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
