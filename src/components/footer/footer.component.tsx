import {
  Container,
  GridContainer,
  Socials,
  SocialLogo,
  SocialLogoBox,
  SocialIcons,
  SocialSvg,
  NavLinks1,
  NavLinks2,
  NavLink,
  Invite,
  InviteBtn,
  Copyright,
} from "./footer.styles";
import Logo from "../../assets/logo-white.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Youtube from "../../assets/icon-youtube.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <Container>
      <GridContainer>
        <Socials>
          <SocialLogoBox>
            <SocialLogo src={Logo} />
          </SocialLogoBox>
          <SocialIcons>
            <SocialSvg src={Facebook} />
            <SocialSvg src={Youtube} />
            <SocialSvg src={Twitter} />
            <SocialSvg src={Pinterest} />
            <SocialSvg src={Instagram} />
          </SocialIcons>
        </Socials>
        <NavLinks1>
          <NavLink>About Us</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Blog</NavLink>
        </NavLinks1>
        <NavLinks2>
          <NavLink>Careers</NavLink>
          <NavLink>Support</NavLink>
          <NavLink>Privacy Policy</NavLink>
        </NavLinks2>
        <Invite>
          <InviteBtn>Request Invite</InviteBtn>
          <Copyright>© Easybank. All Rights Reserved</Copyright>
        </Invite>
      </GridContainer>
    </Container>
  );
};

export default Footer;
