import {
  Container,
  Logo,
  LinkContainer,
  Link,
  InviteBtn,
  Hamburger,
  Bar,
} from "./navbar.styles";
import logo from "../../assets/logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Logo src={logo} />
      <LinkContainer $active={active}>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
      </LinkContainer>
      <InviteBtn>Request Invite</InviteBtn>
      <Hamburger $active={active} onClick={() => setActive(!active)}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
    </Container>
  );
};

export default Navbar;
