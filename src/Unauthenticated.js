import { useState } from "react";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/signup-form";

function Unauthenticate() {
  const [login, setLogin] = useState(true);

  function handleClick(e) {
    setLogin(!login);
  }

  return (
    <div>
      <h2>Organizable</h2>
      <h1>{login ? "Login" : "Sign Up"}</h1>
      {login ? <LoginForm/> : <SignUpForm/>}
      <button onClick={handleClick}>{login ? "Create Account" : "Login"}</button>
    </div>
  )
}

export default Unauthenticate;