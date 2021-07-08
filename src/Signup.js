import React from "react";
import axios from "axios";
import API from "./Api";

function Signup() {
  let user = {};
  var signUp = function () {
    console.log("user has entered", user);
    let apiUrl = API.register;
    axios({
      url: apiUrl,
      method: "post",
      data: user,
    }).then(
      (response) => {
        console.log("signup successfull");
      },
      (error) => {
        console.log("failure");
      }
    );
  };
  var handleName = function (e) {
    user.name = e.target.value;
  };
  var handleEmail = function (e) {
    user.email = e.target.value;
  };
  var handlePassword = function (e) {
    user.password = e.target.value;
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <input
        onChange={handleName}
        className="form-control"
        type="name"
        name=""
        placeholder="Enter UserName"
      />
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
      <button className="btn btn-primary" onClick={signUp} id="login">
        Signup
      </button>
    </div>
  );
}

// class Signup extends React.Component {
//   constructor() {
//     super();
//     this.state = { users: 0 };
//   }
//   joinMeeting = () => {
//     this.setState({
//       users: this.state.users + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.joinMeeting} className="btn btn-primary">
//           Join Meeting
//         </button>
//         <label>{this.state.users}Joined the meeting</label>
//       </div>
//     );
//   }
// }

export default Signup;
