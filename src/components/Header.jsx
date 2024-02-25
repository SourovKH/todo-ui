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
      height: '4em',
      padding: '0em 1em'
    }}>
      <h1><Link to="/" style={{
        textDecoration: 'none',
        color: 'white'
      }}>TODO</Link></h1>
      <ProfileIcon userDetails={userDetails} />
    </div>
  )
}

export default Header;