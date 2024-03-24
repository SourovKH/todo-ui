/* eslint-disable react/prop-types */
import {Link, useNavigate} from "react-router-dom";
import {DashBoardButton, HomePageImage, TemplateBox, TemplateBoxHeading} from "../styles/home-page.styles.js";

const HomePage = () => {
  const navigate = useNavigate();
  const goToDashBoard = () => {
    navigate("/todo-dashboard");
  }

  return (
    <div style={{padding: '1em', display: 'flex', alignItems: "center", justifyContent: 'center', height: '90%'}}>
      <TemplateBox>
        <TemplateBoxHeading>Welcome to TODO</TemplateBoxHeading>
        <div style={{color: "white"}}>Track you work on daily basis</div>
        <DashBoardButton onClick={goToDashBoard}>
          Get Started
        </DashBoardButton>
      </TemplateBox>
      <HomePageImage>
        <img src="/images/home-page-image.jpeg" style={{height: '90%', aspectRatio: '1'}}></img>
      </HomePageImage>
    </div>
  )
}

export default HomePage;