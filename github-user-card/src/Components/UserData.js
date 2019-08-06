// STEP 1 - Fetch the User Data
// - When your component mounts, send a GET request to the following URL 
//   - https://api.github.com/users/reesekunz
// - After you fetch your data, set it to state

import React from 'react';

class UserData extends React.Component {
constructor() {
console.log('constructor in UserData.js')
super();
this.state = {
    usergithub: []
}
}

componentDidMount(){
    console.log("component did mount")
    console.log(this);

  };

  render() {
    console.log("render invoked");
    return ( 

    )
  }
};



export default UserData;