import { 
  HiOutlineUserCircle, 
  HiOutlineKey, 
  HiOutlineMail, 
  HiOutlineClipboard, 
  HiOutlineTrash, 
  HiOutlineStar, 
  HiOutlineArrowNarrowUp,
  HiOutlinePencilAlt,
  HiOutlinePlusSm,
  HiOutlineViewBoards,
  HiOutlineArchive,
  HiOutlineLogout,
  HiOutlineCheck,
  HiOutlineX
} from 'react-icons/hi';

const NavbarStyles = {margin: "8px 0", fontSize: "25px"};

export const icons = {
  user: <HiOutlineUserCircle style={NavbarStyles}/>,
  key: <HiOutlineKey style={NavbarStyles}/>,
  mail: <HiOutlineMail style={NavbarStyles}/>,
  clipboard: <HiOutlineClipboard style={NavbarStyles}/>,
  trash: <HiOutlineTrash/>,
  star: <HiOutlineStar/>,
  arrow: <HiOutlineArrowNarrowUp/>,
  editpencil: <HiOutlinePencilAlt/>,
  plus: <HiOutlinePlusSm/>,
  check: <HiOutlineCheck/>,
  cancel: <HiOutlineX/>,
  boards: <HiOutlineViewBoards style={NavbarStyles}/>,
  archive: <HiOutlineArchive style={NavbarStyles}/>,
  logout: <HiOutlineLogout/>
}