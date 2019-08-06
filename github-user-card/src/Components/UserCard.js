// STEP 2 - Display the User Data
// - Pass the data to the component that will be displaying it
// - Build out a user card using the data that the Github API returns to you
//   - You may reference your old project for this, or you may wish to build this from scratch yourself

import React from "react";

const UserCard = props => (
  // Named them props.props<item> to differentiate when calling them in UserData.js 
  // (can name them props.whatever as long as its being called the same)
  <div>
    <h1>GitHub UserCard Data</h1>
    <h3>{props.propslogin}</h3>
    <img src={props.propsimage} alt="avatar img" />
    Followers: {props.propsfollowers} Following: {props.propsfollowing} Public repos:{" "}
    {props.propspublicrepo}
    GitHub url: {props.propsgithuburl}
  </div>
);

export default UserCard;
