/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NameAvatar from "./NameAvatar";

const ProfileCard = ({ userDetails }) => {
  const { name, isLoggedIn } = userDetails;
  return (
    <div
      style={{
        width: '200px',
        padding: '10px',
        position: "relative",
        top: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.6)',
        backgroundColor: 'white'
      }}
    >
      <NameAvatar name={name} style={{ width: "100px", height: "100px" }} />
      <hr style={{backgroundColor: 'grey', height: '0.1px', width: '100%'}}/>
      {isLoggedIn ? (
        <span style={{fontSize: '30px', color: 'grey'}}>{name}</span>
        ) : (
        <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
      )}
    </div>
  );
};

export default ProfileCard;
