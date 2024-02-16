import {
  Container,
  BgImage,
  Box,
  TextBox,
  Heading,
  Paragraph,
  TextContainer,
  InviteBtn,
} from "./hero.styles";
import Bg from "../../assets/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <Container>
      <BgImage src={Bg} />
      <TextBox>
        <TextContainer>
          <Heading>Next generation digital banking</Heading>
          <Paragraph>
            {" "}
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Paragraph>
          <InviteBtn>Request Invite</InviteBtn>
        </TextContainer>
      </TextBox>
      <Box></Box>
    </Container>
  );
};

export default Hero;
