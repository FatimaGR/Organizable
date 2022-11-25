import { useState } from "react";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/signup-form";
import { FormButton2 } from "./styles/button";
import styled from "@emotion/styled";
import logo from "./assets/logo.svg";

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const ContainerForm = styled.div`
  width: 704px;
  margin: auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Unauthenticate() {
  const [login, setLogin] = useState(true);

  function handleClick(e) {
    setLogin(!login);
  }

  return (
    <Container>
      <ContainerForm>
        <img src={logo} />
        <h1>{login ? "Login" : "Sign Up"}</h1>
        {login ? <LoginForm/> : <SignUpForm/>}
        <FormButton2 onClick={handleClick}>{login ? "Create Account" : "Login"}</FormButton2>
      </ContainerForm>
    </Container>
  )
}

export default Unauthenticate;