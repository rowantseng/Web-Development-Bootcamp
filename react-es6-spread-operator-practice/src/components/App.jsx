import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick() {
    addItems((prevValue) => {
      return [...prevValue, <li>{item}</li>];
    });

    // Delete for the next input
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items}</ul>
      </div>
    </div>
  );
}

export default App;
