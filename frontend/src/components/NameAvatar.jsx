/* eslint-disable react/prop-types */
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const NameAvatar = ({ name, style }) => {
  const letter = name ? name[0].toUpperCase() : null;
  return <Avatar sx={{ bgcolor: deepOrange[500] }} style={style}>{letter}</Avatar>;
}

export default NameAvatar;