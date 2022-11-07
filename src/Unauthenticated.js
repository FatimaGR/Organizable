import { useState } from "react";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/signup-form";

function Unauthenticate({onLogin, onSignUp}) {
  const [login, setLogin] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setLogin(!login);
  }

  return (
    <div>
      <h2>Organizable</h2>
      <h1>{login ? "Login" : "Sign Up"}</h1>
      {login ? <LoginForm onLogin={onLogin} /> : <SignUpForm onSignUp={onSignUp}/>}
      <button onClick={handleClick}>{login ? "Create Account" : "Login"}</button>
    </div>
  )
}

export default Unauthenticate;