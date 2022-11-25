import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import { icons } from "../styles/icons";
import { typography } from "../styles/typography";

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
  &:hover {
    background: ${colors.primary100};
    color: ${colors.gray400};
    border-left: 4px solid ${colors.primary500};
  }
`;

const titlePage = {
  weight: "400",
  color: colors.gray300,
  outline: "none",
  textDecoration: "none",
}

const Bottom = styled.div`
  border-top: 2px solid ${colors.primary400};
  display: flex;
  padding: 20px 16px;
  gap: 11px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #E76A94;
  ${typography.content.sm};
  cursor: pointer;
`;

const Organizable = styled.img`
  width: 155px;
  height: 24px;
  margin: 12px 16px;
  margin-bottom: 0px;
`;

function Navbar() {

  const { logout } = useAuth();

  return(
    <NavbarContainer>
      <div>
        <Organizable src={logo} />
        <Page>
          {icons.boards}
          <Link to="/" style={titlePage}>My boards</Link>
        </Page>
        <Page>
          {icons.archive}
          <Link to="/ClosedBoards" style={titlePage}>Closed Boards</Link>
        </Page>
        <Page>
          {icons.user}
          <Link to="/MyProfile" style={titlePage}>My profile</Link>
        </Page>
      </div>
      <Bottom>
        {icons.logout}
        <LogoutButton onClick={logout}>Log out</LogoutButton>
      </Bottom>
    </NavbarContainer>
  )
}

export default Navbar;