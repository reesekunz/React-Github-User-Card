// STEP 1 - Fetch the User Data
// - When your component mounts, send a GET request to the following URL
//   - https://api.github.com/users/reesekunz
// - After you fetch your data, set it to state

import React from "react";
import UserCard from "./UserCard";

class UserData extends React.Component {
  constructor() {
    console.log("constructor in UserData.js is running");
    super();
    // super gives us acccess to 'this' keyword
    this.state = {
      login: " ",
      followers: " ",
      following: " ",
      image: " ",
      publicrepo: " ",
      githuburl: " "
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
        // data is from whatever is being called after .then(<here>)
        // login, id, etc. are taken from the github api object 
          login: data.login,
            followers: data.followers,
          following: data.following,
          image: data.avatar_url,
          publicrepo: data.public_repos,
          githuburl: data.url
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
      // Originally did it this way instead of passing props to UserCard component, both work 
      //   <div>
      //     <h1>GitHub UserCard Data</h1>
      //     <h3>{this.state.login}</h3>
      //     <img src={this.state.image} alt="avatar image" />
      //     Id: {this.state.id} Following: {this.state.following} Public repos:{" "}
      //     {this.state.publicrepo}
      //     GitHub url: {this.state.githuburl}
      //   </div>

      <UserCard
        propslogin={this.state.login}
        propsimage={this.state.image}
        propsfollowers={this.state.followers}
        propsfollowing={this.state.following}
        propspublicrepo={this.state.publicrepo}
        propsgithuburl={this.state.githuburl}
      />
    );
  }
}

export default UserData;
