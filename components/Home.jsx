import styled from "styled-components";
import Presentation from "./Presentation";
//import img from "../public/assets/images/IMG_8043.JPG"

const Container = styled.div`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
top: -85px;
margin-bottom: -44px;
height: 500px;
zIndex: -1;
 
`;

const Logo = styled.img`
width: 537px;
height: 60px;
margin-top: 170px;            
margin-bottom: 200px;
margin-left: 30%;

`; 

function Home(props) {
  return (
    <>
    <Container style={{backgroundImage: "url(assets/images/couv.png)"}}>
    <Logo src="assets/logos/LOGO-SEUL-BLANC.png" alt="logo" />
    </Container>
    <Presentation />
    </>
  );
}

export default Home;
