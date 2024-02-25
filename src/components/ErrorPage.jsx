import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import { Warning } from "@mui/icons-material";

/* eslint-disable react/prop-types */
const ErrorPage = ({ message }) => {
  return (
    <div
      style={{
        height: "15em",
        width: "40%",
        margin: "10em auto",
        display: "grid",
        gridTemplateRows: "20% auto",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.6)",
      }}
    >
      <div
        style={{
          fontSize: "2em",
          fontWeight: "600",
          color: "white",
          backgroundColor: "rgb(167 0 17)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon>
          <Warning style={{ color: "yellow" }}></Warning>
        </Icon>
        Error
      </div>
      <div
        style={{
          height: "100%",
          padding: "2em 1em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "2em" }}>{message}</p>
        <Link
          to="/"
          style={{
            width: "35%",
            height: '2.2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: "none",
            backgroundColor: "rgb(167 0 17)",
            color: 'white',
            borderRadius: '10px'
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
