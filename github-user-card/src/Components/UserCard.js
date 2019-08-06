// STEP 2 - Display the User Data
// - Pass the data to the component that will be displaying it
// - Build out a user card using the data that the Github API returns to you
//   - You may reference your old project for this, or you may wish to build this from scratch yourself

import React from "react";

const UserCard = props => (
  // Named them props.props<item> to differentiate when calling them in UserData.js
  // (can name them props.whatever as long as its being called the same)
  <div>
    <h1>Reese's GitHub UserCard</h1>
    <img src={props.propsimage} alt="avatar img" />
    <h2>Username: {props.propslogin}</h2>
    <h4> GitHub URL: {props.propsgithuburl} </h4>
    <h4>Repository Count: {props.propspublicrepo} </h4>
    <h4>Followers: {props.propsfollowers}</h4>
    <h4>Following: {props.propsfollowing}</h4>

    <h1> Followers:</h1>
  </div>
);

export default UserCard;
