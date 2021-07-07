import React from 'react';
import './App.css';

import UserData from "./Components/UserData";
import UserFollowers from "./Components/UserFollowers"

function App() {
  return (
    <div className="App">
   <UserData />
   <UserFollowers />
    </div>
  );
}

export default App;
