function Login() {
  let user = {};
  var login = function () {
    console.log("user has entered", user);
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
    </div>
  );
}

export default Login;
