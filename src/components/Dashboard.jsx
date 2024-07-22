import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fetchTodos = (cb) => {
  fetch("http://localhost:8001/todo-app/bff/todos")
    .then((res) => res.json())
    .then((res) => cb(res.message));
};

const Dashboard = (props) => {
  const [todos, setTodos] = useState();
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log(import.meta.env);
    const { userDetails } = props;

    if (!userDetails.isLoggedIn) goToHomePage();
    fetchTodos(setTodos);
  }, []);

  return <div>{todos}</div>;
};

export default Dashboard;
