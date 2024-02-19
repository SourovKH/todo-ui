import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login";

const Homepage = () => <p>Home Page</p>;
const ErrorPage = () => <p>Error Page</p>;

function App() {
  return (
    <BrowserRouter basename="todo-app">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
