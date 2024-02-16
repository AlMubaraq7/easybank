import styled from "styled-components";
export const Container = styled.section`
  height: min-content;
  background-color: var(--lightgrey);
  position: relative;
`;
export const PhoneImage = styled.img`
  position: absolute;
  max-width: 50%;
  top: -110%;
  right: -7rem;
  @media only screen and (max-width: 1300px) {
    max-width: 600px;
    top: -40rem;
    right: 0rem;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 550px;
    top: -40rem;
    right: -0.25rem;
  }
  @media only screen and (max-width: 1023px) {
    max-width: 56%;
    top: -35rem;
    right: -1%;
  }

  @media only screen and (max-width: 900px) {
    max-width: 55%;
    top: -30rem;
    right: -1%;
  }
  @media only screen and (max-width: 700px) {
    max-width: 50%;
    top: -30rem;
    right: -1%;
  }
  @media only screen and (max-width: 640px) {
    max-width: 425px;
    top: -53rem;
    right: 13.5%;
  }
  @media only screen and (max-width: 550px) {
    max-width: 425px;
    top: -53rem;
    right: 8.5%;
  }
  @media only screen and (max-width: 480px) {
    max-width: 400px;
    top: -53rem;
    right: 3%;
  }
  @media only screen and (max-width: 400px) {
    max-width: 350px;
    top: -48rem;
    right: 0.25rem;
  }
`;
export const GridContainer = styled.div`
  padding: 5rem 8rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 2fr;
  grid-row-gap: 4rem;
  @media only screen and (max-width: 1024px) {
    grid-template-rows: 1fr 2.5fr;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem;
    grid-row-gap: 1rem;
  }
  @media only screen and (max-width: 640px) {
    padding: 2rem 5rem;
    grid-row-gap: 0rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 2rem 3rem;
    grid-row-gap: 2rem;
    grid-template-rows: 1fr 4fr;
  }
`;
export const WhyBox = styled.div`
  grid-column: 1 / 10;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media only screen and (max-width: 1300px) {
    text-align: center;
    grid-column: 1 / -1;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }
`;
export const WhyHeading = styled.h1`
  font-size: 35px;
  font-weight: 300;
  @media only screen and (max-width: 1300px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 640px) {
    line-height: 1.2;
    width: 67%;
  }
  @media only screen and (max-width: 480px) {
    font-size: calc(5.5vw + 0.5rem);
  }
  @media only screen and (max-width: 420px) {
    font-size: calc(4.75vw + 0.5rem);
  }
`;
export const WhyParagraph = styled.p`
  font-size: 18px;
  color: var(--grey);
  @media only screen and (max-width: 1300px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1024px) {
    width: 75%;
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    text-wrap: balance;
  }
  @media only screen and (max-width: 480px) {
    font-size: calc(2vw + 0.5rem);
    text-wrap: balance;
  }
`;

export const FeatureBox = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap: 1.35rem;
    grid-row-gap: 3.5rem;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
  }
  @media only screen and (max-width: 768px) {
    grid-row-gap: 2.5rem;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: unset;
    grid-auto-columns: minmax(250px, 450px);
    grid-column-gap: unset;
    grid-row-gap: 2rem;
    place-items: center;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media only screen and (max-width: 1300px) {
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const FeatureIconBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
export const FeatureIcon = styled.img`
  object-fit: contain;
`;

export const FeatureTitle = styled.h2`
  font-weight: 300;
  @media only screen and (max-width: 420px) {
    font-size: calc(4.75vw + 0.5rem);
  }
`;

export const FeatureParagraph = styled.p`
  font-size: 16px;
  color: var(--grey);
  @media only screen and (max-width: 1300px) {
    text-align: center;
    font-size: 20px;
  }
  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: 16px;
    text-wrap: balance;
  }
  @media only screen and (max-width: 768px) {
    text-wrap: balance;
    text-align: center;
    font-size: 15px;
  }
  @media only screen and (max-width: 640px) {
    text-align: center;
    font-size: 18px;
  }
  @media only screen and (max-width: 480px) {
    font-size: calc(2vw + 0.5rem);
    text-wrap: balance;
    text-align: center;
  }
`;
