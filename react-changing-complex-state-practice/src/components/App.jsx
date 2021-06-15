import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onChange={handleChange}>
        <input name="fName" placeholder="First Name" value={contact.fName} />
        <input name="lName" placeholder="Last Name" value={contact.lName} />
        <input name="email" placeholder="Email" value={contact.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
