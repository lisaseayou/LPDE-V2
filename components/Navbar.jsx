import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  height: 100px;
  background: #a68a60;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 920px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 6px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  padding: 0rem 2rem;
  cursor: pointer;
  font-family: "Verdana";
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    padding: 6px;
  }
`;
const Logo = styled.img`
 width : 202px,
 height : 66px;
 @media screen and (max-width: 920px) {
    width: 300px;
    height; 30px;
      }
 `;
function Navbar(props) {
  return (
    <Nav>
      <Link href="/">
        <StyledLink>
          {" "}
          <Logo
            style={{ width: "300px" }}
            src="/assets/logos/LOGO-SEUL-BLANC.png"
          />
        </StyledLink>
      </Link>
      <div>
        <Link href="/la-degustation">
          <StyledLink>La dégustation</StyledLink>
        </Link>
        <Link href="/la-vente-a-emporter">
          <StyledLink>La vente à emporter</StyledLink>
        </Link>
        <Link href="/evenements">
          <StyledLink>Évènements</StyledLink>
        </Link>
        <Link href="/a-propos">
          <StyledLink>À propos</StyledLink>
        </Link>
        <Link href="/contact">
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
}

export default Navbar;
