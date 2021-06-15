import React from "react";

function Items(props) {
  // call `props.checked` function when click
  return (
    <div
      onClick={() => {
        props.checked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default Items;