import { BrowserRouter, Route, Routes } from "react-router-dom";

const Homepage = () => <p>Home Page</p>;
const LoginPage = () => <p>Login Page</p>;
const ErrorPage = () => <p>Error Page</p>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
