import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ClosedBoards from "./pages/closed-boards";
import MyBoards from "./pages/my-boards";
import MyProfile from "./pages/my-profile";

const HomeContainer = styled.div`
  display: flex;
`;

function Authenticate() {
  return(
    <HomeContainer>
      <Navbar/>
      <Routes>
        <Route index element={<MyBoards/>}/>
        <Route path="/ClosedBoards" element={<ClosedBoards/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
      </Routes>
    </HomeContainer>
  )
}

export default Authenticate;