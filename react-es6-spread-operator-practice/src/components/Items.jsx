import React, { useState } from "react";

function Items(props) {
  const [isClick, setClick] = useState(false);

  function handleClick() {
    setClick((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isClick ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default Items;