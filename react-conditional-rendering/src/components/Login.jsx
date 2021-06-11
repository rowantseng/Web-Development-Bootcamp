import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" value="Username" />
      <Input type="password" value="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
