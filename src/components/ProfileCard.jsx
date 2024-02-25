/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NameAvatar from "./NameAvatar";
import { Logout } from "@mui/icons-material";

const HorizontalLine = () => {
  return (
    <hr
      style={{
        backgroundColor: "grey",
        height: "0.1px",
        width: "100%",
        margin: "10px 0px",
      }}
    />
  );
};

const ProfileCard = ({ userDetails, setUserDetails }) => {
  const { name, isLoggedIn } = userDetails;
  return (
    <div
      style={{
        width: "200px",
        padding: "10px",
        position: "relative",
        top: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.6)",
        backgroundColor: "white",
      }}
    >
      <NameAvatar
        name={name}
        style={{ width: "80px", height: "80px", marginBottom: "0.5em" }}
      />
      {isLoggedIn ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1em", color: "grey", textAlign: "center" }}>
            {name}
          </span>
          <HorizontalLine />
          <Link
            to="/my-profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            My Profile
          </Link>
          <HorizontalLine />
          <div
            style={{ display: "flex", alignItems: "center", cursor: 'pointer' }}
            onClick={() => setUserDetails({})}
          >
            <pre>Logout </pre>
            <Logout></Logout>
          </div>
        </div>
      ) : (
        <>
          <HorizontalLine />
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
