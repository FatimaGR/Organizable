import Unauthenticate from "./Unauthenticated";
import { useState, useEffect } from "react";
import { createUser, getUser } from "./services/user-services";
import Authenticate from "./Authenticated";
import { login, logout } from "./services/session-service";
import { tokenKey } from "./config";
import { useParams } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);
  let params = useParams();

  useEffect(() => {
    getUser(params.id)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }, [])

  function handleLogin(credentials){
    login(credentials)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }

  function handleLogout(){
    logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    })
  }

  function handleSignUp(data){
    createUser(data)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }
  
  return user ? (
    <Authenticate onLogout={handleLogout}/>
  ) : (
    <Unauthenticate onLogin={handleLogin} onSignUp={handleSignUp}/>
  )
}

export default App;
