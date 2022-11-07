import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

function Navbar() {

  const { logout } = useAuth();

  return(
    <NavbarContainer>
      <h2>Organizable</h2>
        <Link to="/">My boards</Link>
        <Link to="/ClosedBoards">Closed Boards</Link>
        <Link to="/MyProfile">My profile</Link>
      
      <button onClick={logout}>logout</button>
    </NavbarContainer>
  )
}

export default Navbar;