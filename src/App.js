import Unauthenticate from "./Unauthenticated";
import { useState, useEffect } from "react";
import { createUser, getUser } from "./services/user-services";
import Authenticate from "./Authenticated";
import { login } from "./services/session-service";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }, [])

  function handleLogin(credentials){
    login(credentials)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }

  function handleSignUp(data){
    createUser(data)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }
  
  return user ? (
    <Authenticate/>
  ) : (
    <Unauthenticate onLogin={handleLogin} onSignUp={handleSignUp}/>
  )
}

export default App;
