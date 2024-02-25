/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const Header = ({userDetails}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'cornflowerblue',
      height: '3em',
      padding: '0em 1em'
    }}>
      <Link to="/" style={{
        fontSize: '50px',
        fontWeight: '600',
        textDecoration: 'none',
        color: 'white'
      }}>TODO</Link>
      <ProfileIcon userDetails={userDetails} />
    </div>
  )
}

export default Header;