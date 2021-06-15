import React, { useState } from "react";
import Items from "./Items";

function App() {
  const [item, setItem] = useState("");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick() {
    addItems((prevValue) => {
      return [...prevValue, item];
    });

    // Delete for the next input
    setItem("");
  }

  function deleteItem(id) {
    addItems((prevValue) => {
      return prevValue.filter((item, idx) => {
        return idx !== id;
      });
    });
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
        <ul>
          {items.map((item, idx) => (
            <Items key={idx} id={idx} text={item} checked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
