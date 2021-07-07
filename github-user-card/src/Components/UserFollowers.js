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
      data: []
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
    // Console.log this.state inside render to see what needs to be mapped over ('data' array in this case)
    console.log("userFollowers state = ", this.state);

    console.log("render invoked");

    return this.state.data.map(follower => {
      return (
        <div key={follower.id} className="bottomsection">
          {/* // returning each item in the array - follower - and the data you want from the api (login, url, etc.)) */}
          <img className="followersimg" src={follower.avatar_url} alt="followers avatar img" />
          <h2> {follower.login} </h2> 
          <h4> GitHub URL: {follower.url} </h4> 

        </div>
      );
    });
  }
}

export default UserFollowers;
