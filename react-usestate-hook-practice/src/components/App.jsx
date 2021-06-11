import React, { useState } from "react";

function App() {
  setInterval(UpdateTime, 1000);

  const nowTime = new Date().toLocaleTimeString("en-GB");
  const [time, setTime] = useState(nowTime);

  function UpdateTime() {
    const newTime = new Date().toLocaleTimeString("en-GB");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
