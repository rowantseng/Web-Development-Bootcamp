import React from "react";
import Input from "./Input";

function Register(props) {
  return (
    <form className="form">
      <Input type="text" value="Username" />
      <Input type="password" value="Password" />
      {!props.isRegistered && (
        <Input type="password" value="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Register;
