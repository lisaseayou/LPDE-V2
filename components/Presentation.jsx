import styled from "styled-components";

const Titre = styled.p`
font-family: "Verdana";
font-weight: lighter;
line-height: 2; 
display: flex;
font-size: 20px;
text-transform: uppercase;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 50px; 
padding-left: 50px;
padding-right: 50px;
text-align: center;
color: white; 
//margin: auto;
`;

const Typography = styled.p`
width: 200px;
font-size: 15px; 
line-height: 2; 
color: white; 
text-align: center;
font-family: "Verdana";
`;

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #20212A;
width: 100%;
height: 572px;
border-radius: 50px 50px 0px 0px;
//padding-bottom: 80px;
z-index: 2;
`;
const BoxTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
margin-bottom: 50px;
`;
const Section = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
`;
const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const Contain = styled.div`
display: flex;
justify-content: space-around;
`;
const Text = styled.div`
background-color: #fff;
width: 100%;
padding-top: 50px;
padding-bottom: 50px;
padding-left: 50px;
padding-right: 50px;
`;
const Paragraphe = styled.p`
  width: 800px;
`;
const Subtitle = styled.p`
font-size : 30px; 
margin-bottom: 10px
`;

const Logo = styled.img`
width: 90px;
//height: 110px;
margin-bottom: 50px;
`;
function Presentation(props) {
  return (
    <div>
      <Container>
        {/* <BoxTitle> */}
          <Titre>
            La dégustaion les pieds dans l'eau met à l'honneur les meilleurs produits de
            la mer et leurs accompagnements régionaux...{" "}
          </Titre>
        {/* </BoxTitle> */}
        <Section>
          <Box>
            <Logo src="/assets/icons/oysterwhite.png" />
            <Typography>Huîtres du bassin Cap Ferret & Banc d'Arguin</Typography>
          
          </Box>
    
          <Box>
            <Logo src="/assets/icons/coquillage.png" />
            <Typography>Bulots cuisinés</Typography>
          </Box>
          <Box>
            <Logo src="/assets/icons/crevette.png" />
            <Typography>Crevettes roses de Madagascar</Typography>
          </Box>
          <Box>
            <Logo src="/assets/icons/conservateur.png" />
            <Typography>Pâté de porc Producteur des Landes</Typography>
         
          </Box>
          <Box>
            <Logo src="/assets/icons/du-vin.png" />
            <Typography>Vin blanc & rosé Domaine du Cheval Blanc Bordeaux</Typography>
           
          </Box>
        </Section>
      </Container>
      <Text>
        <Subtitle>L'huître la Gigas, la fierté de notre région...</Subtitle>

        <Contain>
          <Paragraphe>
            {" "}
            Lorem ipsum dolor sit amet; consetetur sadipscing elitr; sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat; sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasdLorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua
          </Paragraphe>
          <img
            style={{ width: "437px", height: "432px", borderRadius: "35px", marginRight: "100px", marginBottom: "200px",  marginTop: "-190px" }}
            src="assets/images/cre.JPG"
            alt="oyster"
          />
        </Contain>
      </Text>
    </div>
  );
}

export default Presentation;
