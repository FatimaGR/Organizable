import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ClosedBoards from "./pages/closed-boards";
import MyBoards from "./pages/my-boards";
import MyProfile from "./pages/my-profile";

function Authenticate({onLogout}) {
  return(
    <div>
      <Navbar onLogout={onLogout}/>
      <Routes>
        <Route index element={<MyBoards/>}/>
        <Route path="/ClosedBoards" element={<ClosedBoards/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
      </Routes>
    </div>
  )
}

export default Authenticate;