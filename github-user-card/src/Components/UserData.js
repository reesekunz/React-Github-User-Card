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
      login: null,
      id: null,
      following: null
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
          following: data.following
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
    console.log("render invoked");
    return <div>{this.state.usergithub}</div>;
  }
}

export default UserData;
