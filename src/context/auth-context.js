import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createUser, getUser } from "../services/user-services";
import * as auth from "../services/session-service"
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  let params = useParams();

  useEffect(() => {
    getUser(params.id)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }, [])

  function login(credentials){
    auth.login(credentials)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }

  function logout(){
    sessionStorage.removeItem(tokenKey);
    setUser(null);
  }

  function signUp(data){
    createUser(data)
    .then(u => setUser(u))
    .catch(error => console.log(error));
  }

  return(
    <AuthContext.Provider value={{
      user, login, signUp, logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };