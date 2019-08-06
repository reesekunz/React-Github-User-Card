// STEP 1 - Fetch the User Data
// - When your component mounts, send a GET request to the following URL
//   - https://api.github.com/users/reesekunz
// - After you fetch your data, set it to state

import React from "react";

class UserData extends React.Component {
  constructor() {
    console.log("constructor in UserData.js is running");
    super();
    // super gives us acccess to 'this' keyword
    this.state = {
      login: " ",
      id: " ",
      following: " ",
      image: " "
    };
  }

  fetchUserData = () => {
    fetch("https://api.github.com/users/reesekunz")
      .then(response => {
        // first .then is used to format the response/data
        return response.json();
        // this becomes the usergithub and is fed back into the next .then
      })
      .then(data =>
        this.setState({
          login: data.login,
          id: data.id,
          following: data.following,
          image: data.avatar_url
        })
      )

      .catch(error => {
        console.log("error", error);
      });
  };

  componentDidMount() {
    console.log("component mounted, data = ", this.state.data);

    this.fetchUserData();
  }

  render() {
    console.log("props", this.props);
    console.log("render invoked");
    return (
      <div>
        <h1>GitHub UserCard Data</h1>
        Username: {this.state.login} Id: {this.state.id} Following:{" "}
        {this.state.following}
        <img src={this.state.image} alt="avatar image" />
      </div>
    );
  }
}

export default UserData;
