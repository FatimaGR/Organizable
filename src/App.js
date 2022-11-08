import Unauthenticate from "./Unauthenticated";
import Authenticate from "./Authenticated";
import { useAuth } from "./context/auth-context";


function App() {
  const { user } = useAuth();
  
  return user ? (
    <Authenticate/>
  ) : (
    <Unauthenticate/>
  )
}

export default App;
