import { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      search: "",
    };
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmitevents = (e) => {
    console.log(this.state);
    axios
      .post("https://apifromashu.herokuapp.com/api/login", this.state)
      .then((response) => {
        console.log(response);
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert("Successfully DOne");
          localStorage.setItem("token", response.data.token);
          this.props.history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar logo={"images/logo.png"} fun={this.state.search} />
        <div className=" TestLoginForm ">
          <label>Email</label>
          <input
            type="text"
            name="name"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button type="button" onClick={this.handleSubmitevents}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
