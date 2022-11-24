import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import { icons } from "../styles/icons";
import { weight } from "../styles/typography";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  gap: 8px;
  background: ${colors.white};
  height: 100vh;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  margin-bottom: 8px;
`;

const TitlePage = styled.a`
  ${weight.regular}
  color: ${colors.gray400};
  outline: none;
  text-decoration: none;

`;

function Navbar() {

  const { logout } = useAuth();

  return(
    <NavbarContainer>
      <div>
        <img src="../assets/organizable.svg" />
        <Page>
          {icons.boards}
          <Link to="/"><TitlePage>My boards</TitlePage></Link>
        </Page>
        <Page>
          {icons.archive}
          <Link to="/ClosedBoards">Closed Boards</Link>
        </Page>
        <Page>
          {icons.user}
          <Link to="/MyProfile">My profile</Link>
        </Page>
      </div>
      <button onClick={logout}>logout</button>
    </NavbarContainer>
  )
}

export default Navbar;