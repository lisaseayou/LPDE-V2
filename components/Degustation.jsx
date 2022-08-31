import styled from "styled-components";

const Couverture = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: -85px;
  margin-bottom: -50px;
  height: 500px;
  zindex: -1;
`;

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
  font-size: 15px;
  line-height: 2;
  color: white;
  text-align: center;
  font-family: "Verdana";
`;
const Titre2 = styled.p`
  font-size: 17px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "Verdana";
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #20212a;
  width: 100%;
  height: 1272px;
  border-radius: 50px 50px 0px 0px;
  //padding-bottom: 80px;
  z-index: 2;
  margin-bottom: -50px;
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 585px;
  height: 710px;
  //padding: 20px;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
`;

const Logo = styled.img`
  width: 40px;
  //height: 110px;
  margin-bottom: 10px;
`;

const Text= styled.div`
border: 1px solid #707070;
border-radius: 18px;
width: 1000px;
margin: auto;
padding: 10px;
`;
function Degustation(props) {
  return (
    <div>
      <Couverture
        style={{ backgroundImage: "url(assets/images/degust.png)" }}
      ></Couverture>
      <Container>
        <Titre>LA CARTE</Titre>

        <Section>
          <Box style={{ borderRight: "1px solid white" }}>
            <Logo src="/assets/icons/oysterwhite.png" />
            <Titre2>Les huîtres</Titre2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Contain>
                <Typography>CAP FERRET</Typography>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>12 n°2 : 10,00 €</Typography>
                  <Typography>12 n°3 : 8,50 €</Typography>
                  <Typography>12 n°4 : 7,50 €</Typography>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>9 n°2 : 9,50 €</Typography>
                  <Typography>9 n°3 : 7,50 €</Typography>
                  <Typography>9 n°4 : 5,50 €</Typography>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>6 n°2 : 9,50 €</Typography>
                  <Typography>6 n°3 : 7,50 €</Typography>
                  <Typography>6 n°4 : 5,50 €</Typography>
                </div>
              </Contain>
              <Contain>
                <Typography>BANC D'ARGUIN</Typography>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>12 n°2 : 10,00 €</Typography>
                  <Typography>12 n°3 : 8,50 €</Typography>
                  <Typography>12 n°4 : 7,50 €</Typography>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>9 n°2 : 9,50 €</Typography>
                  <Typography>9 n°3 : 7,50 €</Typography>
                  <Typography>9 n°4 : 5,50 €</Typography>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Typography>6 n°2 : 9,50 €</Typography>
                  <Typography>6 n°3 : 7,50 €</Typography>
                  <Typography>6 n°4 : 5,50 €</Typography>
                </div>
              </Contain>
            </div>
          </Box>

          <Box style={{ borderRight: "1px solid white" }}>
            <div style={{ display: "flex" }}>
              {" "}
              <Logo src="/assets/icons/coquillage.png" />
              <Logo src="/assets/icons/crevette.png" />
            </div>

            <Titre2>Les accompagnements</Titre2>

            <Typography>1 part de 6 grosses crevettes roses: 8,00 €</Typography>
            <Typography>1 part de 10 bulots: 8,00 €</Typography>
            <Typography>Pâté de porc nature (100g): 3,00 €</Typography>
            <Typography>
              Pâté de porc au piment d'Espelette (100g): 3,50 €
            </Typography>
          </Box>
          <Box>
            <Logo src="/assets/icons/du-vin.png" />
            <Titre2>Les boissons</Titre2>
            <div>
              <Typography>VIN BLANC</Typography>
              <Typography>Domaine du Cheval Blanc - Bordeaux</Typography>
              <Typography>La bouteille : 16,00 €</Typography>
              <Typography>Le verre : 3,00 €</Typography>
            </div>
            <div>
              <Typography>VIN ROSÉ</Typography>
              <Typography>Domaine du Cheval Blanc - Bordeaux</Typography>
              <Typography>La bouteille : 16,00 €</Typography>
              <Typography>Le verre : 3,00 €</Typography>
            </div>
            <div>
              <Typography>
                Bouteille d'eau plate - Les Abatilles : 2,50 €
              </Typography>
              <Typography>
                Bouteille d'eau gazeuse - Les Abatilles : 3,00 €
              </Typography>
            </div>
          </Box>
        </Section>
        <Text>
            <Typography style={{fontStyle: 'italic'}}>INFO UTILE : il est obligatoire de consommer des huîtres pour être servi. La loi nous autorise à servir bulots, crevettes, pâtés, et vins seulement en accompagnement d'huîtres.</Typography>
        </Text>
      </Container>
    </div>
  );
}

export default Degustation;
