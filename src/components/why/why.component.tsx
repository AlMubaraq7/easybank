import {
  Container,
  GridContainer,
  PhoneImage,
  WhyBox,
  WhyHeading,
  WhyParagraph,
  FeatureBox,
  FeatureContainer,
  FeatureIconBox,
  FeatureIcon,
  FeatureTitle,
  FeatureParagraph,
} from "./why.styles";
import Phone from "../../assets/image-mockups.png";
import Banking from "../../assets/icon-online.svg";
import Budgeting from "../../assets/icon-budgeting.svg";
import Onboarding from "../../assets/icon-onboarding.svg";
import Api from "../../assets/icon-api.svg";
const Why = () => {
  return (
    <Container>
      <PhoneImage src={Phone} />
      <GridContainer>
        <WhyBox>
          <WhyHeading>Why choose Easybank?</WhyHeading>
          <WhyParagraph>
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br />
            Control your finances like never before.
          </WhyParagraph>
        </WhyBox>
        <FeatureBox>
          <FeatureContainer>
            <FeatureIconBox>
              <FeatureIcon src={Banking} />
            </FeatureIconBox>
            <FeatureTitle>Online Banking</FeatureTitle>
            <FeatureParagraph>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </FeatureParagraph>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureIconBox>
              <FeatureIcon src={Budgeting} />
            </FeatureIconBox>
            <FeatureTitle>Simple Budgeting</FeatureTitle>
            <FeatureParagraph>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </FeatureParagraph>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureIconBox>
              <FeatureIcon src={Onboarding} />
            </FeatureIconBox>
            <FeatureTitle>Fast Onboarding</FeatureTitle>
            <FeatureParagraph>
              {" "}
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </FeatureParagraph>
          </FeatureContainer>
          <FeatureContainer>
            <FeatureIconBox>
              <FeatureIcon src={Api} />
            </FeatureIconBox>
            <FeatureTitle>Open API</FeatureTitle>
            <FeatureParagraph>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </FeatureParagraph>
          </FeatureContainer>
        </FeatureBox>
      </GridContainer>
    </Container>
  );
};

export default Why;
