import { Link } from "react-router-dom";

function Navbar({onLogout}) {

  return(
    <div>
      <h2>Organizable</h2>
        <Link to="/">My boards</Link>
        <Link to="/ClosedBoards">Closed Boards</Link>
        <Link to="/MyProfile">My profile</Link>
      
      <button onClick={onLogout}>logout</button>
    </div>
  )
}

export default Navbar;