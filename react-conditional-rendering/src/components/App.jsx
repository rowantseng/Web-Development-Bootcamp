import React from "react";
import Register from "./Register";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Register isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
