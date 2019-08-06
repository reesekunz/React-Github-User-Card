// STEP 3 - Fetch the User's Followers

// - When your component mounts, you will also fetch the user's followers using this endpoint:
//   https://api.github.com/users/<Your github name>/followers
// - Set that data to state as well, and display the data in your app

import React from "react";

class UserFollowers extends React.Component {
  constructor() {
    console.log("constructor in UserFollowers.js is running");
    super();
    // super gives us acccess to 'this' keyword
    this.state = {
      followers: []
    };
  }

  fetchUserData = () => {
    fetch("https://api.github.com/users/reesekunz/followers")
      .then(response => {
        // first .then is used to format the response/data
        return response.json();
        // this becomes the usergithub and is fed back into the next .then
      })
      .then(data => this.setState({ data }))

      .catch(error => {
        console.log("error", error);
      });
  };

  componentDidMount() {
    console.log("component mounted, data = ", this.state.data);

    this.fetchUserData();
  }

  render() {
    console.log("follower login = ", this.state.login);
    console.log("follower id = ", this.state.id);
    console.log("follower url = ", this.state.url);

    console.log("render invoked");
    return this.state.followers.map(follower => {
      return (
        <div>
          {follower.login}
          {follower.id}
          {follower.url}
        </div>
      );
    });
  }
}

export default UserFollowers;
