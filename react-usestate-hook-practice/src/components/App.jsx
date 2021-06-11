import React, { useState } from "react";

function App() {

  const nowTime = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = useState(nowTime);

  function Click() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Click}>Get Time</button>
    </div>
  );
}

export default App;
