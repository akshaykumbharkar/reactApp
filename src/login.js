import { useState } from "react";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  let user = {};
  var login = function () {
    console.log("user has entered", user);
    setErrorMessage("Login Failure");
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
      />
      <input
        onChange={handlePassword}
        className="form-control"
        type="password"
        name=""
      />
      <button className="btn btn-primary" onClick={login} id="login">
        Login
      </button>
      {errorMessage}
    </div>
  );
}

export default Login;
