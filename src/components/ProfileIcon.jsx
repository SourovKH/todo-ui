/* eslint-disable react/prop-types */
import { PopupMenu } from "react-simple-widgets";
import ProfileCard from "./ProfileCard";
import NameAvatar from "./NameAvatar";

export default function ProfileIcon({ userDetails }) {
  return (
    <div style={{cursor: 'pointer'}}>
      <PopupMenu>
        <div>
          <NameAvatar name={userDetails.name} />
        </div>
        <ProfileCard userDetails={userDetails} />
      </PopupMenu>
    </div>
  );
}
