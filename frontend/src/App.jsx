import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [userDetails, setUserDetails] = useState({
    name: undefined,
    isLoggedIn: false,
  });
  console.log(userDetails);
  return (
    <BrowserRouter>
      <Header userDetails={userDetails} setUserDetails={setUserDetails}></Header>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setUserDetails={setUserDetails} />}
        />
        <Route path="/" element={<HomePage userDetails={userDetails} />} />
        <Route path="*" element={<ErrorPage message="Page Not Found"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
