/* eslint-disable react/prop-types */
import { PopupMenu } from "react-simple-widgets";
import ProfileCard from "./ProfileCard";
import NameAvatar from "./NameAvatar";
import Tooltip from "@mui/material/Tooltip";

export default function ProfileIcon({ userDetails, setUserDetails }) {
  return (
    <div >
      <PopupMenu>
        <Tooltip title="Profile" placement="bottom">
          <div>
            <NameAvatar name={userDetails.name} style={{ cursor: "pointer" }}/>
          </div>
        </Tooltip>
        <ProfileCard userDetails={userDetails} setUserDetails={setUserDetails}/>
      </PopupMenu>
    </div>
  );
}
