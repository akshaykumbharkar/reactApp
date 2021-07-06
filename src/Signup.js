import React from "react";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = { users: 0 };
  }
  joinMeeting = () => {
    this.setState({
      users: this.state.users + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.joinMeeting} className="btn btn-primary">
          Join Meeting
        </button>
        <label>{this.state.users}Joined the meeting</label>
      </div>
    );
  }
}

export default Signup;
