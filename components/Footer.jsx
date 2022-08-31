import styled from "styled-components";

const Foot = styled.div`
  height: 200px;
  width: 100%;
  background: #a68a60;
  color: #fff;
  font-family: "Verdana";
  border-radius: 50px 50px 0px 0px;
  box-shadow: 0px -6px 30px #00000080;
  bottom: 0;
  z-index: 1;
  position: static;
  @media screen and (max-width: 920px) {
    height: 350px;
  
  }
`;
const Profil = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 10px;
  @media screen and (max-width: 920px) {
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  
  }
`;
const Text = styled.p`
  color: #fff;
  font-size: 15px;
  @media screen and (max-width: 920px) {
    font-size: 12px;
  
  }
  
`;
const Container = styled.div`
display : flex; 
align-items : center; 
justify-content : space-around;
@media screen and (max-width: 920px) {
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center; 
}
`
const Actu = styled.div`
display : flex; 
justift-content : flex-end; 
margin-right : 20px; 
align-items : center;
`

function Footer(props) {
  return (
    <Foot>
    <Container>
      <Profil>
        <Text>Hubert DUCOUT</Text>
        <Text>Ostréiculteur - Cabane 13</Text>
        <Text>Le Four Nord</Text>
      </Profil>
      <div>
          <Text>LA CARTE</Text>
      </div>
      <div>
          <Text>NOUS TROUVER</Text>
      </div>
      <div>
          <Text>NOUS CONTACTER</Text>
      </div>
      <Actu>
          <Text>Retrouvez toute l'actualité sur nos réseaux : </Text>
          <a href="https://www.facebook.com/lespiedsdansleaucapferret" target="_blank"> 
        <img style={{width: "43px", height: "45px", marginRight: "8px", marginLeft : "10px"}} src="assets/icons/facebook.png" />
        </a>
        <a href="https://www.instagram.com/lespiedsdansleaucapferret/" target="_blank">
        <img style={{width: "43px", height: "45px", marginRight: "8px", marginLeft : "10px"}}src="assets/icons/instagram.png" />
        </a>
      </Actu>
      
      </Container>
      <Text style={{fontSize : "10px", display: "flex", justifyContent : "center"}}>mentions légales - Les pieds dans l'eau - 2022</Text>
    </Foot>
  );
}

export default Footer;
