import {styled} from "@mui/material";

export const TemplateBox = styled('div')({
  width: '40%',
  height: '15em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  boxShadow: "0 3px 10px rgb(0 0 0 / 0.6)",
  backgroundColor: 'cornflowerblue',
});

export const TemplateBoxHeading = styled('div')({
  fontSize: "2em",
  fontWeight: "600",
  color: 'white'
});

export const DashBoardButton = styled('div')({
  textAlign: 'center',
  width: '50%',
  padding: '0.5em',
  cursor: 'pointer',
  borderRadius: '50px',
  color: 'cornflowerblue',
  backgroundColor: 'white',
});

export const HomePageImage = styled('div')({
  height: '100%',
  aspectRatio: "1"
})