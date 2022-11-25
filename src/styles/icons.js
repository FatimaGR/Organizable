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
  HiOutlineX,
} from 'react-icons/hi';
import { colors } from './colors';

const NavbarStyles = {margin: "8px 0", fontSize: "25px", color: colors.gray300};
const CreateStyles = {fontSize: "39px", color: colors.white};

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
  cancel: <HiOutlineX style={CreateStyles}/>,
  boards: <HiOutlineViewBoards style={NavbarStyles}/>,
  archive: <HiOutlineArchive style={NavbarStyles}/>,
  logout: <HiOutlineLogout style={NavbarStyles}/>
}