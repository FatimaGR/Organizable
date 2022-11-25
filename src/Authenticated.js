import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import ClosedBoards from "./pages/closed-boards";
import DetailBoard from "./pages/detail-board";
import MyBoards from "./pages/my-boards";
import MyProfile from "./pages/my-profile";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ContainerPages = styled.div`
  width: 100vh;
  padding: 32px;
`;

function Authenticate() {
  return(
    <HomeContainer>
      <Navbar/>
      <Routes>
        <Route index element={<ContainerPages><MyBoards/></ContainerPages>}/>
        <Route path="/ClosedBoards" element={<ContainerPages><ClosedBoards/></ContainerPages>}/>
        <Route path="/MyProfile" element={<ContainerPages><MyProfile/></ContainerPages>}/>
        <Route path="/Board/:id" element={<DetailBoard/>}/>
      </Routes>
    </HomeContainer>
  )
}

export default Authenticate;